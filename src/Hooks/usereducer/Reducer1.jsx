import { useReducer } from "react"
export default function Reduce(){
    let [a,b]=useReducer(function(a,action){
        if 

    },{count:0})
    console.log(a)
    

return(

    <div>
        <h1>
            count{a.count}
        </h1>
 <button onClick={()=>b({operation:"+"})}>
    plus(+)
 </button>
 <button onClick={()=>b({opetation:"-"})}>
   minus(-)
 </button>
    </div>
)
}