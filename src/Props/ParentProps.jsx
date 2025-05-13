import Child_1 from "./ChildProps"

export default function Parent_pro(){
    let user="Saranyadevi";
    let obj={
        email:"saranya@mail.com",
        username:"sadkjfbhasuidf"
    }

    let overalldata={user,obj}
    return(
        <div>
            <h1>
                Parent File
            </h1>
            <Child_1 value={overalldata}/>
        </div>
    )
}