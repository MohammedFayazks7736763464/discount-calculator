import { useState } from 'react'
import './App.css'



function App() {
 
  const[amount,setAmount]=useState()
  const[discount,setdiscount]=useState()
  const[counter,setcounter]=useState(0)
  const[fpay,setfpay]=useState(0)




  const submitted=()=>{

const ouput=(amount*discount/100).toFixed(0)
    
    setcounter(ouput)


    const final=(amount-ouput).toFixed(0)
    setfpay(final)


   

  }
  const clear=()=>{
    setcounter(0)
    setfpay(0)
  }

  return (
    <>
    <section className='color'>
    <div className='main'>
      <div className='head'>
      <h5 className='tt'>Discount Calculator</h5>

      <div className='ff'>
        <label  className='bill' htmlFor="nn">Enter bill amount :</label>
        <input o onChange={(e)=>setAmount(e.target.value)} className='gg' type="text" placeholder='enter ' id='nn' />
      </div>
      <div className='ff'>
        <label className='bill' htmlFor="nn">Select discount   :</label>
        <input className='gf' onChange={(e)=>setdiscount(e.target.value)} type="text" placeholder='enter ' id='nn' />
      </div>


     <div className='result'>
     <h4 className='p'> Discount Amount : {counter}</h4>
      <h4 className='p'> Final pay : {fpay}</h4>


     </div>
     
      


      <div className='butt'>
    <button style={{margin:"10px"}} onClick={()=>submitted()} className='btn btn-info'>submit</button>
    <button style={{margin:"10px"}} onClick={()=>clear()} className='btn btn-info'>clear all</button>

   
      </div>
    


      



    </div>
   

   
    
     






    </div>
    </section>







    
    
    </>
  )
}

export default App
