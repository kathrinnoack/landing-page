const express = require("express");
const cors = require("cors");

const app = express();
const uuidv1 = require("uuid/v1");

app.use(cors());
app.use(express.json());

const data = [];

app.get("/", (req, res) => {
  return res.send(JSON.stringify(data));
});

app.get("/:id", (req, res) => {
  const paste = data.find(paste => paste.id === req.params.id);
  if (!paste) {
    return res.status(404).send("Not found");
  }
  return res.send(JSON.stringify(paste));
});

app.post("/", (req, res) => {
  const { text, title } = req.body;

  if (!text || !title) {
    return res.status(400).send("Invalid Request");
  }

  const paste = {
    id: uuidv1(),
    text,
    title
  };
  data.push(paste);

  return res.send(JSON.stringify(paste));
});

app.delete("/:id", (req, res) => {
  const pasteIndex = data.findIndex(paste => paste.id === req.params.id);
  if (!pasteIndex) {
    return res.status(404).send("Not found");
  }
  data.splice(pasteIndex, 1);
  return res.send("Deleted");
});

app.listen(8080, () => console.log(`Example app listening on port 8080!`));
