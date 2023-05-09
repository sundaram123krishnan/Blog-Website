const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
