const mongoose = require("mongoose");
const url = 'mongodb+srv://naeema:jiRIeXqAVnmATW4f@cluster0.gcr60.mongodb.net/Daruwale?retryWrites=true&w=majority';
//connect DB HERE
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection Success');
}).catch((e) => {
  console.log(e);
})