import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    const today= new Date();
    const day = today.getDay();  
    

    //cosole.log(day);
    let type = "a weekday";
    let adv = "it's time to work harder";
    
    if (day === 6 || day === 0) {
        type = "the weekend";
        adv = "you deserve a break!";
    }
    

    res.render("index.ejs", {
        dayType: "a Weekday",
        advice: "it's time to work harder", 
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});