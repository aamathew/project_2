const Bike = require("../models/bike");

module.exports = {
  index,
  new: newBike,
  create,
  delete: deleteBike,
  edit,
  update
};

async function index(req, res) {
  const bikes = await Bike.find({});
  res.render("bikes/index", { bikes, title: "All Bikes" });
}

function newBike(req, res) {
  res.render("bikes/new", { errorMsg: "", title: "New Bike" });
}

async function create(req, res) {
  try {
    await Bike.create(req.body);
    res.redirect("/bikes");
  } catch (err) {
    console.log(err);
    res.render("bikes/new", { errorMsg: err.message });
  }
  console.log(await Bike.find({}));
}

async function deleteBike(req, res) {
  try {
    await Bike.findByIdAndRemove(req.params.id);
    res.redirect("/bikes");
  } catch (err) {
    res.render("/bikes", { errorMsg: err.message });
  }
}

async function edit(req, res) {
  const bike = await Bike.findById(req.params.id);
  res.render("bikes/edit", { bike, errorMsg: "", title: "New Bike" });
}

async function update(req, res) {
    try {
      await Bike.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.redirect(`/bikes`);
    }  catch (err) {
      res.render(`/bikes/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }