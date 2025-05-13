import { useContext } from "react";
import { context } from "./first";
export default function First1()
{
 let data=useContext(context);
 console.log(data)

return(
    <div>
        <h1>
            {data.user}{data.location}
            {data.obj.name}{
                data.obj.couser[0].software
            }
        </h1>
    </div>
)
}