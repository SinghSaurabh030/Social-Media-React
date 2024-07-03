import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { Profile } from '../store/Profile';
import Welcome from "./Welcome";
import Spinner from "./spinner";

export default function PostList(){
    let {data,ServerFetch}=useContext(Profile);
    let [load,setLoad]=useState(false);
    useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal;
        setLoad(true);
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(obj=>{
            ServerFetch(obj.posts);
            setLoad(false);
        });
        // return ()=>{
        //     controller.abort();
        // }
    },[]);
    return(
        <>
        {load && <Spinner/>}
        {!load && (data.length===0 && <Welcome />)}
        <div className="List">
        {!load && data.map((itm)=>{
            return <Post itm={itm} key={itm.id}></Post>
        })}
        
        </div>
        </>
    );
}