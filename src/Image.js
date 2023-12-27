import "./Image.css";

export default function Image({properties}){
    //const [img, setImg] = useState(image);
    return (
            <img src={properties.url} alt={properties.alt_description} ref={properties.ref} className="image" />
        );
}