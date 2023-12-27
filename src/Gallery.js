import "./Gallery.css";
import Image from "./Image.js";

export default function Gallery({images}){
    return (
        <section className="extern-gallery">
            <div className="intern-gallery">{
                images.map(
                    (element, index) => {
                        return <Image key={index} properties={element} />
                    }
                )
            }
            </div>
        </section>
    );
}