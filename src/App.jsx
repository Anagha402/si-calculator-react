import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import { useState } from 'react';


function App() {
  const[principle,setPrinciple]=useState()
  const[rate,setRate]=useState()
  const[year,setYear]=useState()
  const[isPrincipleInputValid,setIsPrincipleInputValid]=useState(false)
  const[isRateInputValid,setIsRateInputValid]=useState(false)
  const[isYearInputValid,setIsYearInputValid]=useState(false)
  const[interest,setInterest]=useState(100)
  
  const handleCalculate=(e)=>{
    e.preventDefault()
    //console.log("button clicked");
    setInterest((principle*rate*year)/100)
    
  }
  //console.log(principle);
 
  const handleValidation=(tag)=>{
    //console.log(tag);
    const{name,value}=tag;
    //console.log(name,value);
    //console.log(typeof(value));
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

    if(!!value.match(/^\d*.?\d+$/)){
      //valid
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInputValid(false)
      }else if(name=="year"){
        setYear(value)
        setIsYearInputValid(false)
      }else{
        setRate(value)
        setIsRateInputValid(false)

      }

    }else{
      //invalid
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInputValid(true)
      }else if(name=="year"){
        setYear(value)
        setIsYearInputValid(true)
      }else{
        setRate(value)
        setIsRateInputValid(true)

      }

    }

    
    
    
  }
  

  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrincipleInputValid(false)
    setInterest("")

  }


  return (
    <>
    <div style={{minHeight:"100vh",width:"100%"}}className='d-flex justify-content-center align-items-center bg-primary '>
      <div className='box bg-info p-5 rounded '>
        <h2 className='text-danger fw-bolder'style={{textDecoration:"underline"}}>Simple Interest Calculator</h2>
        <p className='text-center'>Calculate your simple interest with us</p>

        <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
           <h1 className='text-danger'>&#8377;{interest}</h1>
        </div>

        <div className="mt-5 ">
          <form className='border rounded p-3 d-flex flex-column p-3'>
          <TextField id="Principle" name="principle" value={principle} label="Principle Amount" variant="outlined" onChange={e=>handleValidation(e.target)} />
            {isPrincipleInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}

          <TextField id="Rate" name="rate" value={rate} label="Rate of Interest" variant="filled" onChange={e=>handleValidation(e.target)}  />
          {isRateInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}



          <TextField id="Year" name="year" value={year} label="Year" variant="standard"onChange={e=>handleValidation(e.target)}  />
          {isYearInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}


          </form>
        </div>

        <div className="mt-3 d-flex justify-content-between">
    
         <Button variant="contained"type='submit'onClick={handleCalculate} >Calculate</Button>
        <Button variant="outlined" onClick={handleReset}>Reset</Button>
        </div>
      </div>
    </div>
    
    





    

    </>
  )
}

export default App
