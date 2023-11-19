
import { useEffect } from "react";
import displayRazor from "./utils/paymentGateway";
function App() {

  //programatically adding the script in html

  const loadscript = (src)=>{
    return new Promise((resolve)=>{
      const script = document.createElement("script");
      script.src = src;
      script.onload = ()=>{
        resolve(true);
      }
      script.onerror = ()=>{
        resolve(false);
      }

      document.body.appendChild(script);
    })

  }

  useEffect(()=>{
  loadscript("http://checkout.razorpay.com/v1/checkout.js")
  },[])

  return(
   <>
   
   <button onClick={displayRazor}>Buy Now</button>
   
   </>
  )
  }
  


export default App
