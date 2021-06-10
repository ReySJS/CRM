const express = require('express');
const app = express();
const bodyParser = require("body-parser");


let users = [{
  "id": 1,
  "name": "Reinan Santos",
  "adress": "Castlevania",
  "complement": "Longe do Sol",
  "zipCode": 41295,
  "city": "Saldvador",
  "state": "Bahia",
  "email": "rey.filareto@outlook.com",
  "phone": "71 988 093 977"
}, {
  "id": 2,
  "name": "Filipe Queiroz",
  "adress": "Rua da Sombra Quente",
  "complement": "40° na sombra",
  "zipCode": 40040,
  "city": "Cuiabá",
  "state": "Mato Grosso",
  "email": "felipe_delas@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 3,
  "name": "Lord Vader",
  "adress": "Death Star",
  "complement": "Quadrant 253",
  "zipCode": 99999,
  "city": "Galaxy?",
  "state": "Nebula?",
  "email": "Vadão_sabres@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 4,
  "name": "Michael Jackson",
  "adress": "Moon Walk Street",
  "complement": "Au!!!",
  "zipCode": 12345,
  "city": "Neverland",
  "state": "Alive",
  "email": "mj_auuuuu@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 5,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 6,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 7,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 8,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 9,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 10,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 11,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 12,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 13,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 14,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 15,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 16,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 17,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 18,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 19,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 20,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 21,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}, {
  "id": 22,
  "name": "Aragorn",
  "adress": "Minas Tirith",
  "complement": "Middle Earth",
  "zipCode": 00000,
  "city": "Arda",
  "state": "EA",
  "email": "ara_passolargo@outlook.com",
  "phone": "00 000 000 000"
}];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname));

app.post('/user', (req, res) => {

  id = req.body.id;
  nome = req.body.nome;
  adress = req.body.adress;
  complement = req.body.complement;
  zipCode = req.body.zipCode;
  city = req.body.city;
  state = req.body.state;
  email = req.body.email;
  phone = req.body.phone;

  users.push(
    {
      "id": id,
      "name": nome,
      "adress": adress,
      "complement": complement,
      "zipCode": zipCode,
      "city": city,
      "state": state,
      "email": email,
      "phone": phone
    });

  console.log(users);
  res.json(users);
});

app.get('/user/:id', (req, res) => {

  const id = req.params.id;
  const userFilter = users.filter(value => value.id == id);

  if (id == "all") {
    res.json(users);
  }
  else {
    res.json(userFilter);
  }
});

app.put('/user/:id', (req, res) => {
  idPut = req.body.id
  nome = req.body.nome;
  adress = req.body.adress;
  complement = req.body.complement;
  zipCode = req.body.zipCode;
  city = req.body.city;
  state = req.body.state;
  email = req.body.email;
  phone = req.body.phone;

  for (let i = 0; i < users.length; i++) {
    if (idPut == users[i].id) {
      users.splice(users.indexOf(users[i]), 1, {
        "id": idPut,
        "name": nome,
        "adress": adress,
        "complement": complement,
        "zipCode": zipCode,
        "city": city,
        "state": state,
        "email": email,
        "phone": phone
      })
    }
  }
  console.log(users);
  res.json(users);
});


app.delete('/user/:id', (req, res) => {

  const idRemove = req.params.id;
  var usersStart = users;
  users = users.filter(value => value.id != idRemove);

  if (users.length != usersStart.length) {
    res.json(users);
    console.log(users);
  } return true

});

app.listen(80);