const express = require('express');
const fs = require('fs');
const app = express();

app.get('', (req, res) => {
    res.send('Hello World!')
})

app.get('/file', (req, res) => {
    let presentDay = new Date();
    let date = presentDay.getFullYear() + '-' + (presentDay.getMonth() + 1) + '-' + presentDay.getDate();
    let time = presentDay.getHours() + "-" + presentDay.getMinutes() + "-" + presentDay.getSeconds();
    let name = `${date}-${time}`;
    fs.writeFileSync(`folder/${name}.txt`, `Current date-time: Date: ${date} and Time: ${time}`)
    res.send("File Created")
       
})



app.get('/ret', (req, res) => {
    let lst = []
    fs.readdir('C:/Users/sigma/Desktop/task/folder', (err,data) => {
      data.forEach((i) => {
        lst.push(i)
      })  
      res.send(lst)
    })
})


app.listen(3000, () => {
    console.log('server is up! @ port - 3000')
})