-- =============================================
-- AI Agents Work Lab - Supabase Migration Script
-- 접두사: agent_
-- 실행일: 2026-04-04
-- =============================================

-- =============================================
-- 1. 테이블 생성
-- =============================================

-- agent_profiles: 사용자 프로필 (auth.users 연동)
CREATE TABLE IF NOT EXISTS agent_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  display_name TEXT,
  avatar_url TEXT,
  provider TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- agent_posts: 커뮤니티 게시글
CREATE TABLE IF NOT EXISTS agent_posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_id UUID REFERENCES agent_profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  views INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- agent_comments: 댓글
CREATE TABLE IF NOT EXISTS agent_comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id BIGINT REFERENCES agent_posts(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES agent_profiles(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 2. 인덱스
-- =============================================

CREATE INDEX IF NOT EXISTS idx_agent_posts_author ON agent_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_agent_posts_category ON agent_posts(category);
CREATE INDEX IF NOT EXISTS idx_agent_posts_created ON agent_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_agent_comments_post ON agent_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_agent_comments_author ON agent_comments(author_id);

-- =============================================
-- 3. RLS (Row Level Security)
-- =============================================

ALTER TABLE agent_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_comments ENABLE ROW LEVEL SECURITY;

-- agent_profiles: 누구나 조회, 본인만 수정
DROP POLICY IF EXISTS "agent_profiles_select" ON agent_profiles;
DROP POLICY IF EXISTS "agent_profiles_insert" ON agent_profiles;
DROP POLICY IF EXISTS "agent_profiles_update" ON agent_profiles;
CREATE POLICY "agent_profiles_select" ON agent_profiles FOR SELECT USING (true);
CREATE POLICY "agent_profiles_insert" ON agent_profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "agent_profiles_update" ON agent_profiles FOR UPDATE USING (auth.uid() = id);

-- agent_posts: 누구나 조회, 본인만 작성/수정/삭제
DROP POLICY IF EXISTS "agent_posts_select" ON agent_posts;
DROP POLICY IF EXISTS "agent_posts_insert" ON agent_posts;
DROP POLICY IF EXISTS "agent_posts_update" ON agent_posts;
DROP POLICY IF EXISTS "agent_posts_delete" ON agent_posts;
CREATE POLICY "agent_posts_select" ON agent_posts FOR SELECT USING (true);
CREATE POLICY "agent_posts_insert" ON agent_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "agent_posts_update" ON agent_posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "agent_posts_delete" ON agent_posts FOR DELETE USING (auth.uid() = author_id);

-- agent_comments: 누구나 조회, 본인만 작성/수정/삭제
DROP POLICY IF EXISTS "agent_comments_select" ON agent_comments;
DROP POLICY IF EXISTS "agent_comments_insert" ON agent_comments;
DROP POLICY IF EXISTS "agent_comments_update" ON agent_comments;
DROP POLICY IF EXISTS "agent_comments_delete" ON agent_comments;
CREATE POLICY "agent_comments_select" ON agent_comments FOR SELECT USING (true);
CREATE POLICY "agent_comments_insert" ON agent_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "agent_comments_update" ON agent_comments FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "agent_comments_delete" ON agent_comments FOR DELETE USING (auth.uid() = author_id);

-- =============================================
-- 4. 트리거 함수
-- =============================================

-- 회원가입 시 agent_profiles 자동 생성
CREATE OR REPLACE FUNCTION handle_agent_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.agent_profiles (id, email, display_name, avatar_url, provider)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture'),
    NEW.raw_app_meta_data->>'provider'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_agent_auth_user_created ON auth.users;
CREATE TRIGGER on_agent_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_agent_new_user();

-- updated_at 자동 갱신
CREATE OR REPLACE FUNCTION update_agent_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS agent_profiles_updated_at ON agent_profiles;
CREATE TRIGGER agent_profiles_updated_at
  BEFORE UPDATE ON agent_profiles
  FOR EACH ROW EXECUTE FUNCTION update_agent_updated_at();

DROP TRIGGER IF EXISTS agent_posts_updated_at ON agent_posts;
CREATE TRIGGER agent_posts_updated_at
  BEFORE UPDATE ON agent_posts
  FOR EACH ROW EXECUTE FUNCTION update_agent_updated_at();
