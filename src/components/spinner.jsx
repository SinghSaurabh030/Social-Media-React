export default function Spinner(){
    return  <div className="text-center spinner" style={{display:"flex ", justifyContent:"center", marginTop:"4rem"}}>
            <div className="spinner-border" role="status" style={{height:"4rem",width:"4rem", display:"block"}}>
            <span className="visually-hidden">Loading...</span>
            </div>
            </div>;
}