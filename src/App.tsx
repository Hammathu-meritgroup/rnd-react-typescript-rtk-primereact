
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Dashboard from './Pages/Dashboard';
import Department from './Pages/Department';
import Employee from './Pages/Employee';
import Home from './Pages/home';
import Login from './Pages/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="employee" element={<Employee />} />
            <Route path="department" element={<Department />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
