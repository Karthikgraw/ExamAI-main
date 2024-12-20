import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TeacherRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // Check if userInfo exists and if the user is a teacher
  const isTeacher = userInfo && userInfo.role === 'teacher';

  // If not a teacher, redirect to the dashboard
  return isTeacher ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default TeacherRoute;
