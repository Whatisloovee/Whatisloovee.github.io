const fs = require("fs");
const express = require('express');
const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: false }));

app.listen(PORT);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
})

app.get('/posters', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
})


app.post('/posters', (req, res) => {
    let fio = req.body.fio;
    let cinema = req.body.cinema;
    let row = req.body.row;
    let seat = req.body.seat;
    let date = req.body.date;
    let time = req.body.time;
    let email = req.body.email;
    let phone = req.body.phone;
    let payment_cash = req.body.payment_cash;
    let payment_card = req.body.payment_card;

    if (fio == "" || cinema == "" || row == "") {
        return res.redirect("/");
    } else {
       
        let data = fs.readFileSync(__dirname + "/public/ticket.xml", "utf8");
        let str_to_arr = data.split('\n');
    str_to_arr.pop();
    let dataUser = 
    `${str_to_arr.join('\n')}
    <ticket>
        <fio>${fio}</fio>
        <cinema>${cinema}</cinema>
        <row>${row}</row>
        <seat>${seat}</seat>
        <date>${date}</date>
        <time>${time}</time>
        <email>${email}</email>
        <phone>${phone}</phone>
        <payment_cash>${payment_cash}</payment_cash>
        <payment_card>${payment_card}</payment_card>
    </ticket>
</tickets>`
    fs.writeFileSync(__dirname + "/public/ticket.xml", dataUser, (error) => {
        if (error) throw error; // если возникла ошибка
        
    });
        return res.redirect("/posters");
    } }
)

app.use(express.static('public'))