import { useContext } from "react";
import { Profile } from '../store/Profile';

export default function Post({itm}){
    let {data,setData}=useContext(Profile);
    let handleDelete=()=>{
        let newd=data.filter((obj)=>obj.name!=itm.name);
        setData([...newd]);    
    }
    return (
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{itm.name}</h5>
    <p class="card-text">{itm.about}</p>
    <a href="#" class="btn btn-primary" onClick={handleDelete}>Delete</a>
  </div>
</div>
    );
}