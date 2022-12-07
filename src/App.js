
import React from 'react';
import './App.css';
import logo from './logo.svg';
import {useState} from 'react';



function App() {
  
  let [isResult, setIsResult]= useState(false)
    
  
  let [bill, setBill] = useState ("")
  const handleChange = event => {
    setBill(event.target.value);
    console.log (event.target.value);
  }
 
  

  let [person, setPerson]= useState("")
  const handleChange2 = event => {
    setPerson(event.target.value);
   
  }
  

  let [custom, setCustom] = useState("")
  const handleChange3 = event => {
    setCustom (event.target.value)
    console.log (event.target.value)
    
  }
 

let [redBorder, setRedBorder] = useState(false)

  
let [totalAmount, setTotalAmount] = useState (0)

 let [tipAmount,setTipAmount] = useState(0)

  let [button,setButton] = useState(0)

  const handleClick = (e)=>{
    setButton(parseInt(e.target.value))
    setIsResult(true)
   
   setTipAmount(((bill * (parseInt(e.target.value)/100))/person))
   setTotalAmount ((tipAmount + bill)/person)
   
}





  return (
    <div>
      <img className="logo" src={logo} alt="logo"/>
      <div className="main">
        <div className="section1">
          <h3>Bill</h3>
          <input id="bill" type="text" name="bill" onChange={handleChange}  value={bill}/>
          <h3> Select Tip %</h3>
          <div className="buttons">
            
            <button id="5" className="btn" onClick={handleClick} value={5}>5%</button>
            <button id="10" className="btn"onClick={handleClick} value={10}>10%</button>
            <button id="15" className="btn" onClick={handleClick} value={15}>15%</button>
            <button id="25" className="btn" onClick={handleClick} value={25}>25%</button>
            <button id="50" className="btn" onClick={handleClick} value={50}>50%</button>
            <input type="text" id="custom" onClick={handleClick} placeholder="Custom" name="custom" onChange={handleChange3} value={custom}  />
          </div>
          <div className="redbox">
          <h3>Number of People</h3>
          <span className='span'>{person === '0' ? 'Can’t be zero' : ''}</span>
          </div>
          <input className={ person === '0' ? 'redborder' : 'person'}  type="text" name="person" onChange={handleChange2}  value={person}/>
        </div>
        <div className="section2">
        <div className="tip">
                <div className="tipbox">
                    <h4>Tip Amount</h4>
                    <span>/ person</span>
                </div>
                <span className="tipamount">$<span className="tipamountspan">{isResult ? tipAmount.toFixed(2) : "0.00"}</span></span>   
            </div>
            <div className="total">
                <div className="totalbox">
                    <h4>Total</h4>
                    <span>/ person</span>
                </div>
                <span className="totalamount">$<span className="totalamountspan">{isResult ? totalAmount.toFixed(2) : "0.00"}</span></span>
            </div>
            <button className="reset" onClick={() =>{
              window.location.reload(false)
              
              
            }} >RESET</button>
        </div>

      </div>
    </div>
  ); 
 


  
}

export default App;
