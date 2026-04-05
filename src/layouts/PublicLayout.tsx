import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = lazy(() => import('../pages/Home'));
const LearningPage = lazy(() => import('../pages/learning/LearningPage'));
const CoursePage = lazy(() => import('../pages/course/CoursePage'));

const MaterialsPage = lazy(() => import('../pages/materials/MaterialsPage'));
const PromptsPage = lazy(() => import('../pages/prompts/PromptsPage'));
const CasesPage = lazy(() => import('../pages/cases/CasesPage'));
const ResultsPage = lazy(() => import('../pages/results/ResultsPage'));
const FaqPage = lazy(() => import('../pages/faq/FaqPage'));
const CommunityPage = lazy(() => import('../pages/community/CommunityPage'));
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loading = () => (
  <div className="loading-page">
    <div className="loading-spinner" />
  </div>
);

export default function PublicLayout() {
  return (
    <>
      <a href="#main-content" className="skip-nav">본문 바로가기</a>
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/curriculum" element={<Navigate to="/course" replace />} />
            <Route path="/tools" element={<Navigate to="/learning" replace />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/prompts" element={<PromptsPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
