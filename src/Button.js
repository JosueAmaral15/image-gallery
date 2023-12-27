import "./Button.css";

export default function Button({children, behavior}){
    return (<button className="button" onClick={behavior}>{children}</button>);
}