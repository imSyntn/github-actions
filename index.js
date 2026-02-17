const express = require("express")
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ msg: "Hello from server!", test: "Hey there!" })
})

app.listen(8080, () => { console.log("Server started.") })