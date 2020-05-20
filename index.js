let express = require('express')

let app = express()

let data = require('./public/students.json')

app.get('/test', (req, res) => {

        res.send("hello world")

})

app.get('/students', function(req, res){

    if(!data){
        res.status(404).send(`Couldn't find the students`);
    }else{
        res.send(data);
    }
})

app.get('/students/:id', (req, res) => {
    const sData = data.students.find((student) => {
        console.log(student.id)

        return parseInt(req.param.id) === student.id
    })

    if(!sData){
        res.status(404).send(`Couldn't find the student id`);
    }
   
        res.send(sData);
    
})


const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})





