
//const  GREET = require('./greeting') ;
const  EXPRESS = require('express');


// //console.log(GREET);
// //GREET.greeting();
// GREET.greeting1();

// function sayHello()
// {
//     console.log("Hello");
// }

const app = EXPRESS();

app.get('/', function myFunction(req,res)
{
    console.log(req);
    res.status(200).send('All Good Welcome');
});


app.listen(8500,()=>{console.log('lisnting at port 8500')});
