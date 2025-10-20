const express = require("express")

const app = express()

const port = process.env.PORT || 5006


// tanin
// password fgWeVv1XfTHHy1Iv
app.get("/",(req,res)=>{

    res.send("Hello Crud")

})


app.listen(port,()=>{

    console.log("simple Crud server running on:",port)
})


