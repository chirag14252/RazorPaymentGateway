
import express from "express";
import path from "path";
import cors from "cors";
import shortid from "shortid";
import razorpay from "razorpay";
import { fileURLToPath } from "url";
import { dirname } from "path";
const PORT = 3000;

const app = express();
app.use(cors());
//initialize the credentials

const razorpayInstance = new razorpay({
  key_id: "rzp_test_E0wJMElVqOMW6E",
  key_secret: "4ABDibxnXOz1X2WFktlIcRaq"
});





app.get("/logo.png", async (req, res) => {
  try {
    // Use import.meta.url to get the current file's URL,
    // then convert it to the file path using fileURLToPath.
    const currentFilePath = fileURLToPath(import.meta.url);
    
    // Get the directory name using the dirname function.
    const currentDir = dirname(currentFilePath);

    // Create the path to the logo.png file.
    const imagePath = path.join(currentDir, "logo.png");

    // Send the file as a response
    res.sendFile(imagePath);
  } catch (error) {
    console.error("Error serving logo.png:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/razorpay",async (req,res)=>{
  const payment_capture = 1;
  const amount = 2;
  const currency = 'INR';
const option = {
  amount: amount *100,
  currency:currency,
  receipt: shortid.generate(),
  payment_capture
};
  try{
   const response = await razorpayInstance.orders.create(option);
   console.log(response);
     res.json({
      id:response.id,
      currency:response.currency,
      amount:response.amount
     })
  }
  catch(error){
   console.log (error);
  }

})


app.listen(PORT,()=>{
  console.log("app is listening at "+ PORT);
})