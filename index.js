const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
	res.send("Howdy Ags!");
});

app.listen(PORT, () => {
	console.log(`Nodejs - Express app listening at http://localhost:${PORT}`);
});
