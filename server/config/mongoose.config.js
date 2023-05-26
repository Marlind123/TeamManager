const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/teamManager?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));