const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: './config.env' });
const app = express();
const mongoose = require('mongoose');
require('./Employee');
app.use(express.json({ limit: '10kb' }));
app.use(cors());

const Employee = mongoose.model('employee');
const Login = mongoose.model("login")

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});
mongoose.connection.on('error', (err) => {
  console.log('error', err);
});

app.get('/employees', (req, res) => {
  Employee.find({})
    .then((data) => {
      res.send(data);
      console.log('Conectou-se com sucesso ao banco de respostas')
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get('/logins', (req, res) => {
  Login.find({})
    .then((data) => {
      res.send(data);
      console.log('Conectou-se com sucesso ao banco de logins')
    })
    .catch((err) => {
      console.log(err);
    });
});


app.post('/employees/send-data', (req, res) => {
  const employee = new Employee({
    //  password: req.body.password,
    // email: req.body.email,
    value1: req.body.value1,
    value2: req.body.value2,
    value3: req.body.value3,
    value4: req.body.value4,
    value5: req.body.value5,
    value6: req.body.value6,
    value7: req.body.value7,
    value8: req.body.value8,
    value9: req.body.value9,
    value10: req.body.value10,
    // valorCmt: req.body.cmt,

  });
  employee
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post('/logins/send-data', (req, res) => {
  const login = new Login({
    password: req.body.password,
    email: req.body.email,
    // valorCmt: req.body.cmt,

  });
  login
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/logins/delete', (req, res) => {
  Login.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/logins/update', (req, res) => {
  Login.findByIdAndUpdate(req.body.id, {
    password: req.body.password,
    email: req.body.email,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server running');
});
