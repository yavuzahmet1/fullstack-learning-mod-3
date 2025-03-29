const express=require("express");
const app=express();
const PORT=3000;

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(express.urlencoded({extended:false}));

app.use(adminRoutes)
app.use(shopRoutes)

app.listen(PORT,()=>{
    console.log(`${PORT} running`)
})