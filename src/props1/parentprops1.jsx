import Child_2 from "./Childprops1";


export default function Parent1(){
         let user="Aathvikarajmohan"
         let obj={
            name:"aathvika",
            age:"3",
            place:"gobi",
            databirth:"18-4-1992"

         }
         let overalldata={user,obj}

    return(
        <div>
                <h1>parentprops file</h1>
                <Child_2  value={overalldata}/>
            </div>
       
    )
}