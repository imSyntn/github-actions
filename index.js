const express = require("express")
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ msg: "Hello from server!" })
})

app.listen(8080, () => { console.log("Server started.") })