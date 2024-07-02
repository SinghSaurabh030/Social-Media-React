import { useState } from "react";
import { useContext } from "react";
import { Profile } from '../store/Profile';

export default function CreatePost(){
    let {data,setData}=useContext(Profile);
    let [name,setName]=useState("");
    let [abt,setabt]=useState("");
    function HandleOnSubmit(event){
        let dummydata={
            name:`${name}`,
            about:`${abt}`
        }
        setName(""),
        setabt("");
        setData((obj)=>[...obj,dummydata]);
    }
    return (
        <form onSubmit={HandleOnSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" class="form-control" id="exampleInputPassword1"value={abt} onChange={(e)=>setabt(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    );
}