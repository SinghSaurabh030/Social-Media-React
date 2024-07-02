import { useState } from "react";
import { useContext } from "react";
import { Profile } from '../store/Profile';

export default function CreatePost(){
    let {data,add,del}=useContext(Profile);
    let [name,setName]=useState("");
    let [abt,setabt]=useState("");
    function HandleOnSubmit(event){
        let dummydata={
            name:`${name}`,
            about:`${abt}`
        }
        setName(""),
        setabt("");
        add(dummydata);
    }
    return (
        <form onSubmit={HandleOnSubmit} className="formD">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">About</label>
    <input type="text" className="form-control" id="exampleInputPassword1"value={abt} onChange={(e)=>setabt(e.target.value)}/>
  </div>
  <div id="emailHelp" className="form-text">We'll never share your Details with anyone else.</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
}