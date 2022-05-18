const port = 3001;
    express = require("express"),
    app = express();

app.get("/main2", (req, res) => {
    res.send("Alternative Hello World app");
});

app.listen(port, () => {
    console.log(`this is an alternatively written Hello World Express.js app listining on port ${port}`);
});