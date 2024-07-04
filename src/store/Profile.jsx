import { createContext,useReducer,useEffect ,useState} from "react";

export const Profile=createContext([
    {
        data:[],
        add:()=>{},
        del:()=>{},
        ServerFetch:()=>{}
    }
]); 
function Reducer(currVal,action){
    let newData=[];
    if(action.type=="adder"){
        newData=[action.payload,...currVal];
    }
    else if(action.type=="delter"){
        let newArr=currVal.filter((ele)=>ele.title!=action.payload.title);
        newData=[...newArr];
    }
    else if(action.type=="add-several-post-from-server"){
        newData=[...action.payload];
    }
    return newData;
}

 const ProfileProvider=({children})=>{
    let [data,dataDipatch]=useReducer(Reducer,[]);
    function add(obj){
        let packet={
            type:"adder",
            payload:obj
            
        };
        dataDipatch(packet);
    }
    function del(obj){
        let packet={
            type:"delter",
            payload:obj
            
        };
        dataDipatch(packet);
    }
    function ServerFetch(posts){

        let packet={
            type:"add-several-post-from-server",
            payload:posts
        };
        dataDipatch(packet);
    }
    return (
        <Profile.Provider value={
            {
              data,
            add,
            del,
            ServerFetch
          }
          }>
            {children}

        </Profile.Provider>
    );
}
export default ProfileProvider;