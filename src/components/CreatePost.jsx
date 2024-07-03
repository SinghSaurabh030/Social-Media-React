import { useState } from "react";
import { useContext } from "react";
import { Profile } from '../store/Profile';

export default function CreatePost(){
    let {data,add,del}=useContext(Profile);
    let [name,setName]=useState("");
    let [abt,setabt]=useState("");
    function HandleOnSubmit(event){
        let dummydata={
            title:`${name}`,
            body:`${abt}`,
            id:new Date()
        }
        setName(""),
        setabt("");
        add(dummydata);
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
  <div id="emailHelp" className="form-text">We'll never share your Details with anyone else.</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
}