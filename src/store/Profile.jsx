import { createContext,useReducer,useState } from "react";

export const Profile=createContext([]); 
function Reducer(currVal,action){
    let newData=[];
    if(action.type=="adder"){
        newData=[...currVal,action.payload];
    }
    else{
        let newArr=currVal.filter((ele)=>ele.name!=action.payload.name);
        newData=[...newArr];
    }
    return newData;
}

 const ProfileProvider=({children})=>{

    let [data,dataDipatch]=useReducer(Reducer,[{
      name:"Saurabh",
      about:"3rd Year Student"
    }]);
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
    return (
        <Profile.Provider value={
            {
              data,
            add,
            del
          }
          }>
            {children}

        </Profile.Provider>
    );
}
export default ProfileProvider;