import "./ButtonBox.css";
import Button from "./Button.js";


export default function ButtonBox({buttonList}){
    return (
        <div className="button-box">
            {buttonList.map((element, index)=>{
                return <Button key={index} behavior={element.behavior}>{element.name}</Button>
            })}
        </div>
    );
}