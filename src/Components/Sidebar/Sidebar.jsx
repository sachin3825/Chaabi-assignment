import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Trainings from "../../Pages/Trainings";
import Users from "../../Pages/Users";
import Analytics from "../../Pages/Analytics";
import MyAccount from "../../Pages/MyAccount";
import Support from "../../Pages/Support";
import {
  RiDashboardLine,
  RiTrainLine,
  RiUserLine,
  RiBarChartLine,
  RiAccountCircleLine,
  RiQuestionAnswerLine,
} from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { Routes, Route } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../Assets/logo.png";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const SidebarData = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <RiDashboardLine />,
      label: "Dashboard",
      cName: "nav-text",
    },
    {
      title: "Trainings",
      path: "/trainings",
      icon: <RiTrainLine />,
      label: "Trainings",
      cName: "nav-text",
    },
    {
      title: "Users",
      path: "/users",
      icon: <RiUserLine />,
      label: "Users",
      cName: "nav-text",
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <RiBarChartLine />,
      label: "Analytics",
      cName: "nav-text",
    },
    {
      title: "My Account",
      path: "/my-account",
      icon: <RiAccountCircleLine />,
      label: "My Account",
      cName: "nav-text",
    },
    {
      title: "Support",
      icon: <RiQuestionAnswerLine />,
      path: "/support",
      label: "Support",
      cName: "nav-text",
    },
  ];

  return (
    <>
      <div className='navbar'>
        <div className='menu-toggle' onClick={toggleSidebar}>
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </div>
        <div className='navbar-content'>
          <h1>Hello, Puneet Dhiman</h1>
          <p>Following is Your Organization's Performance Summary</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <nav className={sidebarOpen ? "sidebar active" : "sidebar"}>
          <img src={logo} alt='logo' />
          <ul className='sidebar-items'>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <NavLink exact to={item.path} activeClassName='active'>
                  <span className='icon'>{item.icon}</span>
                  <span className='label'>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/trainings' element={<Trainings />} />
            <Route exact path='/users' element={<Users />} />
            <Route exact path='/analytics' element={<Analytics />} />
            <Route exact path='/my-account' element={<MyAccount />} />
            <Route exact path='/support' element={<Support />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
