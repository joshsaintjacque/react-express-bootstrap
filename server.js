const express = require("express");

const app = express();

app.get('/api/examples', (req, res) => {
  const examples = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
    { id: 3, name: "baz" }
  ];

  res.json(examples);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));