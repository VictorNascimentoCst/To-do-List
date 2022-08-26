const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/todo-list')
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.log(err))