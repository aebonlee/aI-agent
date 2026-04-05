import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { supabase, TABLES } from '../../lib/supabase';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = [
  { id: 'all', ko: '전체', en: 'All' },
  { id: 'free', ko: '자유', en: 'Free' },
  { id: 'question', ko: '질문', en: 'Q&A' },
  { id: 'share', ko: '정보공유', en: 'Info' },
  { id: 'prompt', ko: '프롬프트', en: 'Prompt' },
  { id: 'result', ko: '결과물', en: 'Result' },
];

function formatDate(dateStr, lang) {
  const d = new Date(dateStr);
  if (lang === 'ko') {
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  }
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getCategoryLabel(categoryId, lang) {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  return cat ? (lang === 'ko' ? cat.ko : cat.en) : categoryId;
}

function getInitial(name) {
  if (!name) return '?';
  return name.charAt(0).toUpperCase();
}

export default function CommunityPage() {
  const { language, t }: any = useLanguage();
  const { user }: any = useAuth();
  const { showToast }: any = useToast();
  const isKo = language === 'ko';

  const [view, setView] = useState('list');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Write/Edit form state
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formCategory, setFormCategory] = useState('free');
  const [editingPostId, setEditingPostId] = useState(null);

  // Comment form state
  const [commentText, setCommentText] = useState('');

  // Fetch posts
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase
        .from(TABLES.POSTS)
        .select('*, author:agent_profiles(display_name, avatar_url)')
        .order('created_at', { ascending: false });

      if (activeCategory !== 'all') {
        query = query.eq('category', activeCategory);
      }

      if (searchQuery.trim()) {
        query = query.or(`title.ilike.%${searchQuery.trim()}%,content.ilike.%${searchQuery.trim()}%`);
      }

      const { data, error } = await query;
      if (error) {
        console.error('Posts fetch error:', error);
        showToast(t('toast.fetchPostsError'), 'error');
      } else {
        setPosts(data || []);
      }
    } catch (err: any) {
      console.error('Posts fetch error:', err);
      showToast(t('toast.fetchPostsError'), 'error');
    }
    setLoading(false);
  }, [activeCategory, searchQuery, showToast, t]);

  useEffect(() => {
    if (view === 'list') fetchPosts();
  }, [view, fetchPosts]);

  // Fetch single post + comments
  const openDetail = async (postId) => {
    setSelectedPostId(postId);
    setView('detail');

    // Increment views (silent - non-critical)
    try {
      await supabase
        .from(TABLES.POSTS)
        .update({ views: (posts.find(p => p.id === postId)?.views || 0) + 1 })
        .eq('id', postId);
    } catch (err: any) {
      console.error('Views update error:', err);
    }

    // Fetch post
    try {
      const { data: postData, error } = await supabase
        .from(TABLES.POSTS)
        .select('*, author:agent_profiles(display_name, avatar_url)')
        .eq('id', postId)
        .single();

      if (error) {
        console.error('Post fetch error:', error);
        showToast(t('toast.fetchPostError'), 'error');
        return;
      }
      setSelectedPost(postData);
    } catch (err: any) {
      console.error('Post fetch error:', err);
      showToast(t('toast.fetchPostError'), 'error');
      return;
    }

    // Fetch comments
    try {
      const { data: commentData, error } = await supabase
        .from(TABLES.COMMENTS)
        .select('*, author:agent_profiles(display_name, avatar_url)')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Comments fetch error:', error);
        showToast(t('toast.fetchCommentsError'), 'error');
      } else {
        setComments(commentData || []);
      }
    } catch (err: any) {
      console.error('Comments fetch error:', err);
      showToast(t('toast.fetchCommentsError'), 'error');
    }
  };

  // Create / Update post
  const handleSubmitPost = async () => {
    if (!formTitle.trim() || !formContent.trim()) {
      showToast(t('toast.titleContentRequired'), 'error');
      return;
    }

    setSubmitting(true);
    try {
      if (editingPostId) {
        const { error } = await supabase
          .from(TABLES.POSTS)
          .update({ title: formTitle, content: formContent, category: formCategory })
          .eq('id', editingPostId);

        if (error) {
          console.error('Post update error:', error);
          showToast(t('toast.updatePostError'), 'error');
          setSubmitting(false);
          return;
        }
        showToast(t('toast.updatePostSuccess'), 'success');
      } else {
        const { error } = await supabase
          .from(TABLES.POSTS)
          .insert({ author_id: user.id, title: formTitle, content: formContent, category: formCategory });

        if (error) {
          console.error('Post create error:', error);
          showToast(t('toast.createPostError'), 'error');
          setSubmitting(false);
          return;
        }
        showToast(t('toast.createPostSuccess'), 'success');
      }

      resetForm();
      setView('list');
    } catch (err: any) {
      console.error('Post submit error:', err);
      showToast(editingPostId ? t('toast.updatePostError') : t('toast.createPostError'), 'error');
    }
    setSubmitting(false);
  };

  // Delete post
  const handleDeletePost = async (postId) => {
    const confirmMsg = isKo ? '정말 삭제하시겠습니까?' : 'Are you sure you want to delete?';
    if (!window.confirm(confirmMsg)) return;

    setSubmitting(true);
    try {
      const { error } = await supabase.from(TABLES.POSTS).delete().eq('id', postId);
      if (error) {
        console.error('Post delete error:', error);
        showToast(t('toast.deletePostError'), 'error');
      } else {
        showToast(t('toast.deletePostSuccess'), 'success');
        setView('list');
      }
    } catch (err: any) {
      console.error('Post delete error:', err);
      showToast(t('toast.deletePostError'), 'error');
    }
    setSubmitting(false);
  };

  // Edit post
  const handleEditPost = (post) => {
    setEditingPostId(post.id);
    setFormTitle(post.title);
    setFormContent(post.content);
    setFormCategory(post.category);
    setView('write');
  };

  // Submit comment
  const handleSubmitComment = async () => {
    if (!commentText.trim() || !selectedPostId) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from(TABLES.COMMENTS)
        .insert({ post_id: selectedPostId, author_id: user.id, content: commentText });

      if (error) {
        console.error('Comment create error:', error);
        showToast(t('toast.createCommentError'), 'error');
        setSubmitting(false);
        return;
      }

      showToast(t('toast.createCommentSuccess'), 'success');
      setCommentText('');

      // Refresh comments
      try {
        const { data, error: fetchError } = await supabase
          .from(TABLES.COMMENTS)
          .select('*, author:agent_profiles(display_name, avatar_url)')
          .eq('post_id', selectedPostId)
          .order('created_at', { ascending: true });

        if (fetchError) {
          console.error('Comments refresh error:', fetchError);
          showToast(t('toast.fetchCommentsError'), 'error');
        } else {
          setComments(data || []);
        }
      } catch (fetchErr) {
        console.error('Comments refresh error:', fetchErr);
        showToast(t('toast.fetchCommentsError'), 'error');
      }
    } catch (err: any) {
      console.error('Comment create error:', err);
      showToast(t('toast.createCommentError'), 'error');
    }
    setSubmitting(false);
  };

  // Delete comment
  const handleDeleteComment = async (commentId) => {
    const confirmMsg = isKo ? '댓글을 삭제하시겠습니까?' : 'Delete this comment?';
    if (!window.confirm(confirmMsg)) return;

    setSubmitting(true);
    try {
      const { error } = await supabase.from(TABLES.COMMENTS).delete().eq('id', commentId);
      if (error) {
        console.error('Comment delete error:', error);
        showToast(t('toast.deleteCommentError'), 'error');
      } else {
        showToast(t('toast.deleteCommentSuccess'), 'success');
        setComments(prev => prev.filter(c => c.id !== commentId));
      }
    } catch (err: any) {
      console.error('Comment delete error:', err);
      showToast(t('toast.deleteCommentError'), 'error');
    }
    setSubmitting(false);
  };

  const resetForm = () => {
    setFormTitle('');
    setFormContent('');
    setFormCategory('free');
    setEditingPostId(null);
  };

  const openWrite = () => {
    resetForm();
    setView('write');
  };

  const goToList = () => {
    setSelectedPost(null);
    setComments([]);
    setSelectedPostId(null);
    setView('list');
  };

  // ===== LIST VIEW =====
  if (view === 'list') {
    return (
      <div className="community-page">
        <SEOHead title={t('community.title')} description={t('community.subtitle')} path="/community" />
        <div className="page-header">
          <div className="container">
            <h1>{t('community.title')}</h1>
            <p className="page-desc">{t('community.subtitle')}</p>
          </div>
        </div>

        <div className="community-layout">
          <div className="community-toolbar">
            <div className="community-toolbar-left">
              <div className="community-categories">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    className={`community-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {isKo ? cat.ko : cat.en}
                  </button>
                ))}
              </div>
            </div>

            <div className="community-toolbar-right">
              <div className="community-search">
                <i className="fa-solid fa-magnifying-glass community-search-icon" />
                <input
                  type="text"
                  className="community-search-input"
                  placeholder={isKo ? '검색어를 입력하세요' : 'Search posts...'}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && fetchPosts()}
                />
              </div>

              {user && (
                <button className="community-write-btn" onClick={openWrite}>
                  <i className="fa-solid fa-pen" />
                  {isKo ? '글쓰기' : 'Write'}
                </button>
              )}
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-light)' }}>
              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: 24, marginBottom: 12 }} />
              <p>{isKo ? '로딩 중...' : 'Loading...'}</p>
            </div>
          ) : posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-light)' }}>
              <i className="fa-solid fa-comment-slash" style={{ fontSize: 40, marginBottom: 16 }} />
              <p>{isKo ? '게시글이 없습니다' : 'No posts yet'}</p>
            </div>
          ) : (
            <div className="post-list">
              {posts.map(post => (
                <div key={post.id} className="post-item" onClick={() => openDetail(post.id)} style={{ cursor: 'pointer' }}>
                  <div className="post-vote">
                    <span className="post-vote-count">{post.views || 0}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-light)' }}>{isKo ? '조회' : 'views'}</span>
                  </div>

                  <div className="post-content">
                    <span className="post-category">{getCategoryLabel(post.category, language)}</span>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.content}</p>
                    <div className="post-meta">
                      <span className="post-meta-item">
                        <i className="fa-solid fa-user" />
                        {post.author?.display_name || (isKo ? '익명' : 'Anonymous')}
                      </span>
                      <span className="post-meta-item">
                        <i className="fa-regular fa-clock" />
                        {formatDate(post.created_at, language)}
                      </span>
                    </div>
                  </div>

                  <div className="post-stats">
                    <span className="post-stat">
                      <i className="fa-regular fa-eye post-stat-icon" />
                      {post.views || 0}
                    </span>
                    <span className="post-stat">
                      <i className="fa-regular fa-comment post-stat-icon" />
                      {post.comment_count || 0}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ===== DETAIL VIEW =====
  if (view === 'detail') {
    return (
      <div className="community-page">
        <SEOHead title={t('community.title')} description={t('community.subtitle')} path="/community" />
        <div className="page-header">
          <div className="container">
            <h1>{t('community.title')}</h1>
            <p className="page-desc">{t('community.subtitle')}</p>
          </div>
        </div>

        <div className="post-detail">
          <button
            onClick={goToList}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', fontSize: 14, fontWeight: 500,
              color: 'var(--text-secondary)', background: 'none',
              border: '1px solid var(--border-light)', borderRadius: 'var(--radius-full)',
              cursor: 'pointer', marginBottom: 24, fontFamily: 'inherit',
            }}
          >
            <i className="fa-solid fa-arrow-left" />
            {isKo ? '목록으로' : 'Back to List'}
          </button>

          {selectedPost ? (
            <>
              <div className="post-detail-card">
                <div className="post-detail-header">
                  <span className="post-detail-category">{getCategoryLabel(selectedPost.category, language)}</span>
                  <h1 className="post-detail-title">{selectedPost.title}</h1>
                  <div className="post-detail-meta">
                    <div className="post-detail-author">
                      {selectedPost.author?.avatar_url ? (
                        <img src={selectedPost.author.avatar_url} alt="" className="post-detail-avatar" style={{ objectFit: 'cover' }} />
                      ) : (
                        <div className="post-detail-avatar">
                          {getInitial(selectedPost.author?.display_name)}
                        </div>
                      )}
                      <span>{selectedPost.author?.display_name || (isKo ? '익명' : 'Anonymous')}</span>
                    </div>
                    <span>{formatDate(selectedPost.created_at, language)}</span>
                    <span><i className="fa-regular fa-eye" /> {selectedPost.views || 0}</span>
                  </div>
                </div>

                <div className="post-detail-body" style={{ whiteSpace: 'pre-wrap' }}>
                  {selectedPost.content}
                </div>

                {user && user.id === selectedPost.author_id && (
                  <div className="post-actions">
                    <button className="post-action-btn" onClick={() => handleEditPost(selectedPost)} disabled={submitting}>
                      <i className="fa-solid fa-pen" />
                      {isKo ? '수정' : 'Edit'}
                    </button>
                    <button className="post-action-btn" onClick={() => handleDeletePost(selectedPost.id)} disabled={submitting}>
                      <i className="fa-solid fa-trash" />
                      {isKo ? '삭제' : 'Delete'}
                    </button>
                  </div>
                )}
              </div>

              {/* Comments Section */}
              <div className="comments-section">
                <h3 className="comments-title">
                  {isKo ? `댓글 ${comments.length}개` : `${comments.length} Comment${comments.length !== 1 ? 's' : ''}`}
                </h3>

                {user && (
                  <div className="comment-form">
                    <div className="comment-form-avatar">
                      {user.user_metadata?.avatar_url ? (
                        <img src={user.user_metadata.avatar_url} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                      ) : (
                        getInitial(user.user_metadata?.full_name || user.email)
                      )}
                    </div>
                    <div className="comment-form-body">
                      <textarea
                        className="comment-form-input"
                        placeholder={isKo ? '댓글을 작성하세요...' : 'Write a comment...'}
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        disabled={submitting}
                      />
                      <div className="comment-form-actions">
                        <button className="comment-submit-btn" onClick={handleSubmitComment} disabled={submitting || !commentText.trim()}>
                          {submitting ? <i className="fa-solid fa-spinner fa-spin" /> : null}
                          {isKo ? '등록' : 'Submit'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="comment-list">
                  {comments.map(comment => (
                    <div key={comment.id} className="comment-item">
                      <div className="comment-avatar">
                        {comment.author?.avatar_url ? (
                          <img src={comment.author.avatar_url} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                        ) : (
                          getInitial(comment.author?.display_name)
                        )}
                      </div>
                      <div className="comment-body">
                        <div className="comment-header">
                          <span className="comment-author">{comment.author?.display_name || (isKo ? '익명' : 'Anonymous')}</span>
                          <span className="comment-date">{formatDate(comment.created_at, language)}</span>
                        </div>
                        <p className="comment-text">{comment.content}</p>
                        {user && user.id === comment.author_id && (
                          <div className="comment-actions">
                            <button className="comment-action" onClick={() => handleDeleteComment(comment.id)} disabled={submitting}>
                              {isKo ? '삭제' : 'Delete'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-light)' }}>
              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: 24 }} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // ===== WRITE / EDIT VIEW =====
  return (
    <div className="community-page">
      <SEOHead title={t('community.title')} description={t('community.subtitle')} path="/community" />
      <div className="page-header">
        <div className="container">
          <h1>{editingPostId ? (isKo ? '게시글 수정' : 'Edit Post') : (isKo ? '글쓰기' : 'Write Post')}</h1>
          <p className="page-desc">{isKo ? '커뮤니티에 글을 작성합니다' : 'Write a post for the community'}</p>
        </div>
      </div>

      <div className="write-post-page">
        <div className="write-post-card">
          <select
            value={formCategory}
            onChange={e => setFormCategory(e.target.value)}
            disabled={submitting}
            style={{
              padding: '8px 16px', fontSize: 14, fontFamily: 'inherit',
              border: '1px solid var(--border-light)', borderRadius: 'var(--radius-full)',
              background: 'var(--bg-white)', color: 'var(--text-primary)',
              marginBottom: 20, cursor: 'pointer',
            }}
          >
            {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
              <option key={cat.id} value={cat.id}>{isKo ? cat.ko : cat.en}</option>
            ))}
          </select>

          <input
            type="text"
            className="write-post-title-input"
            placeholder={isKo ? '제목을 입력하세요' : 'Enter title'}
            value={formTitle}
            onChange={e => setFormTitle(e.target.value)}
            disabled={submitting}
          />

          <textarea
            className="comment-form-input"
            style={{ minHeight: 300, fontSize: 15, lineHeight: 1.85 }}
            placeholder={isKo ? '내용을 입력하세요' : 'Write your content here...'}
            value={formContent}
            onChange={e => setFormContent(e.target.value)}
            disabled={submitting}
          />

          <div className="write-post-actions">
            <button
              className="post-action-btn"
              onClick={() => { resetForm(); setView('list'); }}
              disabled={submitting}
            >
              {isKo ? '취소' : 'Cancel'}
            </button>
            <button
              className="community-write-btn"
              onClick={handleSubmitPost}
              disabled={submitting || !formTitle.trim() || !formContent.trim()}
            >
              {submitting ? <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: 6 }} /> : <i className="fa-solid fa-check" />}
              {editingPostId ? (isKo ? '수정완료' : 'Update') : (isKo ? '등록' : 'Publish')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
