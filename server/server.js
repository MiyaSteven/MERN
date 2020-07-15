const express = require("express");
const port = 8000;

const app = express();

const citiesData = [
  {
    id: 1,
    name: "London",
    pop: 2000,
  },
  {
    id: 2,
    name: "Paris",
    pop: 3000,
  },
  {
    id: 3,
    name: "Seattle",
    pop: 100000,
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "Hello from Express" });
});

app.get("/api/cities", (req, res) => {
  res.json({});
});

app.get("/api/cities/:id", (req, res) => {
  res.json({
    city: {
      id: req.params.id,
    },
  });
});

app.put("/api/cities/:id", (req, res) => {
  // use map to update
  console.log(req.body);
  res.json({
    status: "success",
    msg: `Updated city id: ${req.params.id}`,
  });
});

app.post("/api/cities", (req, res) => {
  res.json({
    status: "success",
    city: req.body,
  });
});

app.delete("/api/cities/:id", (req, res) => {
  console.log(req.params);
  console.log(citiesData);

  citiesData = citiesData.filter((city) => {
    return city.id != req.params.id;
  });
  res.json({
    status: "success",
    msg: `Deleted city id: ${req.params.id}`,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} for requests to respond to`);
});
