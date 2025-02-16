
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import ProfileProvider from '../store/Profile';
import './App.css'

function App() {
  let [selectedTab,setSelectedTab]=useState("Home");

  return (
    <>
    <ProfileProvider>
    <div className="contain">
    <div className="">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
    </div>
    <div className="cont">
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
    </div>
    </ProfileProvider>
    </>
  )
}

export default App
