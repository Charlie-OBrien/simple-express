const port = 3001;
    express = require("express"),
    app = express();

app.get("/main2", (req, res) => {
    res.send("Alternative Hello World app");
})
// if ';' is used on line ^above^ then need to add app below before .listen
.listen(port, () => {
    console.log(`This is an alternatively written Hello World Express.js app listining on port ${port}`);
});