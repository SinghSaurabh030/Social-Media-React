import { useContext } from "react";
import { Profile } from '../store/Profile';

export default function Post({itm}){
    let {data,add,del}=useContext(Profile);
    let handleDelete=()=>{
         del(itm);
    }
    return (
        <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{itm.name}</h5>
    <p className="card-text">{itm.about}</p>
    <a href="#" className="btn btn-primary" onClick={handleDelete}>Delete</a>
  </div>
</div>
    );
}