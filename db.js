const mongoose = require("mongoose");
const url = process.env.DB_URL;
//connect DB HERE
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection Success');
}).catch((e) => {
  console.log(e);
})
