import { useState } from "react";
import { useContext } from "react";
import { Profile } from '../store/Profile';
import { useNavigate } from "react-router-dom";

export default function CreatePost(){
    let {data,add,del}=useContext(Profile);
    const navigate=useNavigate();
    let [name,setName]=useState("");
    let [abt,setabt]=useState("");
    let [userId,setuserId]=useState("");
    function HandleOnSubmit(event){
      event.preventDefault();
        let dummydata={
            title:`${name}`,
            body:`${abt}`,
            userId:userId
        }
        fetch('https://dummyjson.com/posts/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dummydata)
        })
        .then(res =>{
          
          let ans=res.json();
          return ans;
        })
        .then(obj=>{
          add(obj);
          setName("");
          setabt("");
          setuserId("");
          navigate("/");
          
      });
        

    }
  

    return (
        <form onSubmit={HandleOnSubmit} className="formD">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}placeholder="Enter Title"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Body</label>
    <textarea type="textarea" rows="4"className="form-control" id="exampleInputPassword1"value={abt} onChange={(e)=>setabt(e.target.value)} placeholder="how are you feeling today..."/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">UserId</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userId} onChange={(e)=>setuserId(e.target.value)}placeholder="Enter Id"/>
   
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
}