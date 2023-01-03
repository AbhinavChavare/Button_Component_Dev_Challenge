
import './App.css';
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from 'react';
import Footer from "./Footer/Footer"

function App() {

const [select,setSelect]=useState("default")
const [classdata,setClassdata]=useState("btn-default")

  const handleChange=(e)=>{
    setSelect(e.target.value)
  }

  useEffect(()=>{

    switch(select){
      case "outline":setClassdata("btn-outline")
      break;
      case "text":setClassdata("btn-Text")
      break;
      case "primary":setClassdata("btn-primary ")
      break;
      case "success":setClassdata("btn-secondary")
      break;
      case "danger":setClassdata("btn-danger")
      break;
      case "smaller":setClassdata("btn-primary btn-small")
      break;
      case "larger":setClassdata("btn-primary btn-large")
      break;
      // case "default":setClassdata("btn-primary")
      // break;
      default:setClassdata("btn-default")
      break;
  
    }
  } ,[select])
 

  return (
    <>
    <div className="App button-comp ">
      <h2 className='head-border'>Welcome to Button Component</h2>
      <div className='btn-wraper'>
        <div className='btn-all-comp'>
          <div className='btn-container flex-center '>
            <h4> Button </h4>
            <button onClick={()=>alert(select)} className={`${classdata}`}>Click me</button>
          </div>
          <div className='btn-container'>
          <h4> Please select to change </h4>
            <div className='btn-data-all'>
              <h4>Variant</h4>
              <select onChange={(e)=>handleChange(e)} >
                <option value="none" >Default</option>
                <option value="outline" >Outline</option>
                <option value="text" >Text</option>
              </select>
            </div>
            <div className='btn-data-all'>
              <h4>Color</h4>
              <select onChange={(e)=>handleChange(e)}>
                <option value="default" >Default</option>
                <option value="primary" >Primary</option>
                <option value="success" >Success</option>
                <option value="danger" >Danger</option>
              </select>
            </div>
            <div className='btn-data-all'>
              <h4>Size</h4>
              <select onChange={(e)=>handleChange(e)}>
                <option value="default" >Default</option>
                <option value="larger" >Larger</option>
                <option value="smaller" >Smaller</option>
              </select>
            </div>
          </div>


        </div>
        <div className='btn-comp'>
          <section>
              <div className='btn-container'>
              <h4> Default {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-default'>Click me</button>
            </div>
            <div className='btn-container'>
              <h4> Text {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-Text'>Click me</button>
            </div>
            <div className='btn-container'>
              <h4> Outline {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-outline'>Click me</button>
            </div>
          </section>

          <section>
            <div className='btn-container'>
              <h4> Disable Box Shadow {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} >Click me</button>
            </div>
            <div className='btn-container'>
              <h4> Disabled {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} disabled={true} className="btn-disable" >Click me</button>
            </div>
          </section>

          <section>
            <div className='btn-container'>
              <h4>    {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-primary '>Click me <AiOutlineArrowUp className='iconz' /> </button>
            </div>
            <div className='btn-container'>
              <h4>  {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className="btn-primary" >Click me<AiOutlineArrowDown className='iconz' /> </button>
            </div>
            <div className='btn-container'>
              <h4>  {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className="btn-primary" >Click me<AiOutlineArrowLeft className='iconz' /> </button>
            </div>
            <div className='btn-container'>
              <h4>  {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className="btn-primary" >Click me<AiOutlineArrowRight className='iconz' /> </button>
            </div>
            <div className='btn-container'>
              <h4>  {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className="btn-primary" >Click me<AiOutlineShoppingCart className='iconz' /> </button>
            </div>
          </section>
          <section>
            <div className='btn-container'>
              <h4> Smalller {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-primary btn-small'>Click me</button>
            </div>
            <div className='btn-container'>
              <h4> Default {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-primary'>Click me</button>
            </div>
            <div className='btn-container'>
              <h4> Larger {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-primary btn-large'>Click me</button>
            </div>
          </section>
          <section>
            <div className='btn-container'>
              <h4> Primary {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-primary '>Click me</button>
            </div>
            <div className='btn-container'>
              <h4> Success {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-secondary'>Click me</button>
            </div>
            <div className='btn-container'>
              <h4> Danger {"<"}Button{">"}</h4>
              <button onClick={()=>alert("Thanks for Clicking")} className='btn-danger'>Click me</button>
            </div>
          </section>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default App;
