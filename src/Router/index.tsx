import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from '../components/scrolltotop/ScrollToTop';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DonatePage from '../pages/DonatePage';
import DonateTestPage from '../pages/DonateTestPage';
import DriveFolderPage from '../pages/DriveFolderPage';
import HomePage from '../pages/HomePage';
import InProgressPage from '../pages/InProgressPage';
import JoinUsPage from '../pages/JoinUsPage';
import NotFoundPage from '../pages/NotFoundPage';
import Projects from '../pages/Projects';
import ReportsPage from '../pages/ReportsPage';
import { SuccessPage } from '../pages/SuccessPage';
import SupportPage from '../pages/SupportPage';
import { ROUTES_PATH } from './constants';

const AppRoutes: React.FC = (): JSX.Element => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path={ROUTES_PATH.home} element={<HomePage />} />
      <Route path={ROUTES_PATH.projects} element={<Projects isBlue />} />
      <Route path={ROUTES_PATH.joinus} element={<JoinUsPage />} />
      <Route path={ROUTES_PATH.about} element={<AboutPage isBlue />} />
      <Route
        path={ROUTES_PATH.documents}
        element={<DriveFolderPage folder="documents" isBlue />}
      />
      <Route
        path={ROUTES_PATH.standards}
        element={<DriveFolderPage folder="standards" isBlue />}
      />
      <Route
        path={ROUTES_PATH.other}
        element={<DriveFolderPage folder="other" isBlue />}
      />
      <Route path={ROUTES_PATH.support} element={<SupportPage isBlue />} />

      {/* <Route path={ROUTES_PATH.news} element={<InProgressPage isBlue />} /> */}
      {/* <Route
        path={ROUTES_PATH.cooperation}
        element={<InProgressPage isBlue />}
      /> */}
      {/* <Route path={ROUTES_PATH.contact} element={<InProgressPage isBlue />} /> */}
      <Route
        path={ROUTES_PATH.userAgreement}
        element={<InProgressPage isBlue />}
      />
      <Route path={ROUTES_PATH.reports} element={<ReportsPage />} />
      <Route path={ROUTES_PATH.donate} element={<DonatePage />} />
      <Route path={ROUTES_PATH.donatetest} element={<DonateTestPage />} />
      <Route path={ROUTES_PATH.contact} element={<ContactPage />} />
      <Route path={ROUTES_PATH.success} element={<SuccessPage />} />
      <Route path="*" element={<NotFoundPage isBlue />} />
    </Routes>
  </Router>
);

export default AppRoutes;
