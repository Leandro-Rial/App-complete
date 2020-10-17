const mongoose = require('mongoose');

const dbUri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.vzdjj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Connected to Database'))
    .catch(err => console.log(err));