import { useNavigate } from "react-router-dom";
import logo_react from "../assets/react.svg"
import Demo from "../Redux/Demo";
export default function Afirst_file(){
    let user="Saranyadevi MCA";
    let logo="https://th.bing.com/th/id/OIP.Y2C49ZpFqa1h8RDBoM0MKQHaE8?rs=1&pid=ImgDetMain";
    let hei="100px";
    let wid="100px";
    let link="https://en.wikipedia.org/wiki/Rome";
    let obj={
        name:"Erode",
        age:200,
        location:"tamilnadu"
    }
    let page=useNavigate()
    return(
        <div>
            <button onClick={()=>page("output")}>
                Demo Output components
            </button>
            
            <h3 style={{color:"pink",fontSize:"200px"}}>
                First file created and linked
            </h3>
            <h1>
                {user}
            </h1>
            <img src={logo_react} alt=""  height={hei} width={wid}/>

            <a href={link}>
                Rome
            </a>

            <ol>
                <li>
                    {obj.location}
                </li>
                <li>
                    {Math.random()}
                </li>
            </ol>

            <Demo />
        </div>
    )
}