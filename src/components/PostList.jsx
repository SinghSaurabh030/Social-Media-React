import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { Profile } from '../store/Profile';
import Welcome from "./Welcome";
import Spinner from "./spinner";

export default function PostList(){
    let {data,load}=useContext(Profile);

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