
import { redirect, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";

export default function CreatePost(){
  

    return (
        <Form method="post" className="formD" action="/create-post">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label> 
    <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Body</label>
    <textarea type="textarea" rows="4"className="form-control" id="body" name="body"  placeholder="how are you feeling today..."/>
  </div>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">UserId</label>
    <input type="text" className="form-control" id="userId"  name="userId" placeholder="Enter Id"/>
   
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</Form>
    );
}

export async function createAction(data){
  let fdata=await data.request.formData();
  let ent=Object.fromEntries(fdata);
  
  console.log(ent);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ent)
  })
  .then(res =>{
    
    let ans=res.json();
    return ans;
  })
  .then(obj=>{
    console.log(obj);
    
});
return 0;
}