import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import { useState } from 'react';
import { Profile } from './store/Profile';

function App() {
  let [selectedTab,setSelectedTab]=useState("Home");
  let [data,setData]=useState([{
    name:"Saurabh",
    about:"3rd Year Student"
  }]);

  return (
    <>
    <Profile.Provider value={
      {
        data,
      setData
    }
    }>
    <div className="contain">
    <div className="">
    <Sidebar setSelectedTab={setSelectedTab}></Sidebar>
    </div>
    <div className="container">
    <Header></Header>
    {selectedTab=="Home"?<PostList ></PostList>:selectedTab=="CreatePost"? <CreatePost></CreatePost>:""}
    <Footer></Footer>
    </div>
    </div>
    </Profile.Provider>

    </>
  )
}

export default App
