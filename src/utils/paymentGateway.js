export default async function displayRazor(){

 //post request to the nodeJS server
 const data = await fetch("http://localhost:3000/razorpay", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  } 
}).then((t) => t.json());
 //option


 const option = {
  key:"rzp_test_E0wJMElVqOMW6E",
  currency:data.currency,
  amount:data.amount,
  description:"order for ghar ka jayeka",
  image:"http://localhost:3000/logo.jpg",
  handler:(res)=>{
   alert("order_id" + res.razorpay_order_id);
   alert("payment_id" + res.razorpay_payment_id);
  },
  prefill:{
    name:"Ishan",
    email:"chi.chirag@gmail.com",
    contact:"8543999604"
  }
 }

 const paymentObject = new window.Razorpay(option);
 
  paymentObject.open();

}