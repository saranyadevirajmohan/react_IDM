export default function (data){
    return(
     <div>
        <h1>
        {data.value.user}
        <br />
        {data.value.obj.place}
        </h1>
     </div>
    )
}