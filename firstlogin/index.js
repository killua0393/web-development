import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

function logger (req, res, next) {
  console.log(req.body);
  next();
};
app.use(logger);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
   

});

app.post("/submit", (req,res) =>
  {
    console.log(req.body);
    if(req.body.email==='hello@gmail.com' && req.body.password==='hello')
    {res.sendFile(__dirname + "/public/paymentform.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
   
    }
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
