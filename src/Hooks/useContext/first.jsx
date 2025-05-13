import { createContext } from "react";

export const context=createContext("")
export default function FirstContext1(){

    let user="saranya devi", location="gobi";
    let obj={name:"devi",age:"34",
        cousers:[
            
                {software:"React",duration:"6month"}
            
        ]
    }
    let overall={user,location,obj}

return (
    <div>
        <context.Provider value={overall}>
            {/* <second/>
            <third/> */}
           
        </context.Provider>
    </div>
  )

}
     
