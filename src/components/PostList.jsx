import Post from "./Post";
import { useContext } from "react";
import { Profile } from '../store/Profile';

export default function PostList(){
    let {data}=useContext(Profile);
    return(
        <>
        {data.map((itm)=>{
            return <Post itm={itm} ></Post>
        })}
        </>
    );
}