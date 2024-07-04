import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { Profile } from '../store/Profile';
import Welcome from "./Welcome";
import Spinner from "./spinner";
import { useLoaderData } from "react-router-dom";

export default function PostList(){
    let data=useLoaderData();

    return(
        <>
        {(data.length===0 && <Welcome />)}
        <div className="List">
        { data.map((itm)=>{
            return <Post itm={itm} key={itm.id}></Post>
        })}
        
        </div>
        </>
    );
}
export function Fetcher(){
    return fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(obj=>{
            return (obj.posts);
        });
}