import express from "express";


const app = express();
const PORT = 5000;

app.use(express.json());

// test route
app.get("/",(req,res)=>{
  res.send("backend is running");
});


app.listen(PORT, () => {
  console.log('Server running on http://localhost:${port}');
});
