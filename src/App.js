import React from 'react';
import {images} from './images'
import {useState,useEffect} from 'react';

const App = () => {
 const [cars,setCars] = useState(images);
 const [index,setIndex] = useState(0);

 useEffect(()=>{
   const lastIndex = cars.length -1;
  if(index < 0){
      setIndex(lastIndex)
  }
  if(index > lastIndex){
   setIndex(0);
  }

 },[index,cars])

  useEffect(()=>{
      let imageSlider = setInterval(()=>{
         setIndex(index + 1)
      },3000)
      return ()=> clearInterval(imageSlider);
  },[index])
  return (
    
   <section>
    {
     cars.map((car,carIndex)=>{
      const {id,make,image,location} = car;
      let placement = 'nextSlide';

      if(carIndex === index){
       placement = 'activeSlide';
      }
      if(carIndex === index -1 || (index === 0 && carIndex === cars.length -1)){
       placement = 'lastSlide';
      }
      
    
      return<article key={id} className={placement}>
       <figure>
               <img src={image} alt={make} style={{height:'400px',width:'500px'}} />
       </figure>
     
       <h3>{make}</h3>
       <h4>{location}</h4>
       <h2>Cell Phone : +254 776 557 035</h2>
       <h4>{`This is car number ${index +1}`}</h4>
      </article>
     })
    }


    <div className='btn-container'>
           <button onClick={()=>setIndex(index - 1)}>PREV</button>
           <button onClick={()=>setIndex(index + 1)}>NEXT</button>
    </div>

  

   
   

   </section>
  )
}

export default App
