import React, { lazy } from 'react';
import { Navigate, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ****Routes**** */
import PrivateRoute from '../views/authentication/PrivateRoute'; // Import PrivateRoute
import TeacherRoute from '../views/authentication/TeacherRoute'; // Import TeacherRoute

/* ***Layouts**** */
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const ExamLayout = Loadable(lazy(() => import('../layouts/full/ExamLayout')));

/* ****Pages***** */
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));
const Success = Loadable(lazy(() => import('../views/Success')));
const TestPage = Loadable(lazy(() => import('./../views/student/TestPage')));
const ExamPage = Loadable(lazy(() => import('./../views/student/ExamPage')));
const ExamDetails = Loadable(lazy(() => import('./../views/student/ExamDetails')));
const ResultPage = Loadable(lazy(() => import('./../views/student/ResultPage')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const UserAccount = Loadable(lazy(() => import('../views/authentication/UserAccount')));
const CreateExamPage = Loadable(lazy(() => import('./../views/teacher/CreateExamPage')));
const ExamLogPage = Loadable(lazy(() => import('./../views/teacher/ExamLogPage')));
const AddQuestions = Loadable(lazy(() => import('./../views/teacher/AddQuestions')));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<FullLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<ExamPage />} />
          <Route path="/sample-page" element={<SamplePage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/result" element={<ResultPage />} />

          {/* Teacher Routes */}
          <Route element={<TeacherRoute />}>
            <Route path="/create-exam" element={<CreateExamPage />} />
            <Route path="/add-questions" element={<AddQuestions />} />
            <Route path="/exam-log" element={<ExamLogPage />} />
          </Route>
        </Route>

        <Route path="/" element={<ExamLayout />}>
          <Route path="exam/:examId" element={<ExamDetails />} />
          <Route path="exam/:examId/:testId" element={<TestPage />} />
        </Route>
      </Route>

      {/* User Layout */}
      <Route path="/user" element={<FullLayout />}>
        <Route path="account" element={<UserAccount />} />
      </Route>

      {/* Authentication Layout */}
      <Route path="/auth" element={<BlankLayout />}>
        <Route path="404" element={<Error />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Catch-all Route */}
      <Route path="*" element={<Navigate to="/auth/404" />} />
    </>,
  ),
  {
    basename: '/', // Change this to '/frontend' if your app is deployed to a subdirectory
  }
);

export default Router;
