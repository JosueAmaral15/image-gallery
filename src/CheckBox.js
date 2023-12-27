import "./CheckBox.css";
import {forwardRef} from 'react';

 const CheckBox = forwardRef((props, ref)=> {
    return (
        <div className="checkbox-structure">
            <input className="checkbox" type="checkbox" {...props} ref={ref} />
            <span className="text-checkbox">{props.message}</span>
        </div>
        
    );
});

export default CheckBox;