import './App.css';
import Gallery from './Gallery';
import ButtonBox from './ButtonBox.js';
import CheckBox from "./CheckBox.js";
import {createRef, useState, useEffect, useRef} from 'react';
import './Gallery.css';

const initial_images = [ // A list with initial images
  {alt_description: "fogos de artificio", ref: createRef(), url:"https://images.unsplash.com/photo-1703451935089-a6b4b517f494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "montanhas", ref: createRef(), url:"https://images.unsplash.com/photo-1703002917693-e51692232c81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "mulher se vendo no espelho", ref: createRef(), url:"https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "um grupo de pessoas passando por uma rua ao lado de edificios altos", ref: createRef(), url:"https://images.unsplash.com/photo-1703434797402-1a557d664894?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "um homem parado no meio de um canion", ref: createRef(), url:"https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "mesa coberta com muitos biscoitos decorados", ref: createRef(), url:"https://images.unsplash.com/photo-1639610806434-ef56b7522338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "cardume de peixes", ref: createRef(), url:"https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "rosto de mulher e visto atraves de um buraco azul", ref: createRef(), url:"https://images.unsplash.com/photo-1703446485384-547d8550303c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "uma cordilheira de neve com trilhas de neve", ref: createRef(), url:"https://images.unsplash.com/photo-1703432799866-1f788053fb3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D"},
  {alt_description: "um predio muito alto elevando-se sobre uma cidade", ref: createRef(), url:"https://images.unsplash.com/photo-1703442701061-a5d0bdfdac9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D"},
];

function App() {
  const [position, setPosition] = useState(0); //
  //const checkbox = useRef(null);
  const intern_gallery = useRef(null);
  const [horizontal, setHorizontal]= useState(false);
  const [byTime, setByTime] = useState(false);
  const [imagesGallery, setImagesGallery] = useState(initial_images);
  const passByTimeRef = useRef(null);

  function passImage(position){ // Function responsible for changing or transitioning slide images.
    imagesGallery[position].ref.current.scrollIntoView({
      behavior : 'smooth', //(position != 0?'smooth':'instant')
      block : 'nearest',
      inline:'center'
    });
  }
  
  const buttonList = [ // Two buttons are placed on the page in order to make the image slide advance or rewind depending on the user's choice.
    {name: "previous", behavior: () => {
      if(position > 0) {
      setPosition(p=>p-1);
    }}},
    {name: "next", behavior: () => {
      if(position < imagesGallery.length -1) {
        setPosition(p=>p+1);
      }}}
  ];
  
  useEffect(()=>{
    passImage(position);
  }, [position]);

  useEffect(()=>{
    if(horizontal) { //Here we will make it possible for the images to transition from left to right or from top to bottom.
      intern_gallery.current.classList.add("intern-gallery-row");
      intern_gallery.current.classList.remove("intern-gallery-column");
    } else {
      intern_gallery.current.classList.add("intern-gallery-column");
      intern_gallery.current.classList.remove("intern-gallery-row");
    }
    passImage(position);
  },[horizontal]);

 useEffect(() => {
  if (byTime) { // Every time the user selects the 'pass images by time' option, an automatic image transition feature will be activated.
    passByTimeRef.current = setInterval(() => {
      setPosition(prevPosition => {
        if (prevPosition < imagesGallery.length - 1) { // If the index is smaller than the total number of images, then increase the position variable to move from slide to slide, otherwise assign zero to the position variable.
          return prevPosition + 1;
        } else {
          return 0;
        }
      });
    }, 2000);
  }
  
  return () => {
    if (byTime) {
      clearInterval(passByTimeRef.current); // A cleaning function will be performed every time the effect is stopped.
    }
  };
}, [byTime]);

  return (
    <div className="gallery-app">
      <Gallery images={imagesGallery} ref={intern_gallery} />
      <ButtonBox buttonList={buttonList} />
      <CheckBox checked={horizontal} message="Horizontal" onChange={event => setHorizontal(event.target.checked)} />
      <CheckBox checked={byTime} message="Pass images by time" onChange={event => setByTime(event.target.checked)} />
    </div>
  );
}

export default App;
