require('dotenv').config();
const   express = require("express"),
        app = express(),
        mongoose = require("mongoose"),
        user = require("./models/user"),
        userRouter = require("./routes/user"),
        authRouter = require("./routes/auth"),
        superHeroRouter = require("./routes/superHero"),
        port=3000;
     





    app.use(express.json());
    app.use("/users", userRouter);
    app.use("/",authRouter);
    app.use("/superHero",superHeroRouter);
    mongoose.set("debug", true); // in devolpment process
    mongoose
    .connect(
        process.env.mongoURI, 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        dbName: "superHeroesRestApi",
    })
    .then((con) => {
        console.log("DB is connected succefully");
        app.listen(port, () => {
            console.log(`Start Of The Server At : ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
    



