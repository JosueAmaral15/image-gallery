import "./Gallery.css";
import Image from "./Image.js";
import {forwardRef} from 'react';

const Gallery = forwardRef ((props, ref)=>{
    return (
        <section className="extern-gallery">
            <div className="intern-gallery" ref={ref}>{
                props.images.map(
                    (element, index) => {
                        return <Image key={index} properties={element} />
                    }
                )
            }
            </div>
        </section>
    )
});

export default Gallery;