const express=require("express");
const app=express();
const PORT=3000;

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(express.urlencoded({extended:false}));

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not found</h1>')
})

app.listen(PORT,()=>{
    console.log(`${PORT} running`)
})