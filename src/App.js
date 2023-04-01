import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDash from './confrig/AdminDash';
import InstituteDash from './confrig/InstituteDash';
import Registration from './confrig/RegistScreen';
import Login from './confrig/Login';
import StudentDash from './confrig/StudentDash';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'admin/*'} element={<AdminDash/>} />
      <Route path={'institute/*'} element={<InstituteDash />} />
      <Route path={'student/*'} element={<StudentDash />} />
      <Route path={'/'} element={<Registration />} />
      <Route path={'login'} element={<Login />} />
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
