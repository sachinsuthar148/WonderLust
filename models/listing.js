const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    default : "https://unsplash.com/photos/a-https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D-scubas-over-a-colorful-coral-reef-jTxhUMyPTrE",
    type: String,
    set: (v) => (v === "" ? "https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v),
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
