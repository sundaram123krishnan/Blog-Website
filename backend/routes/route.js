const express = require("express");
const router = express.Router();
const product = require("../model/product");

router.get("/", async (req, res) => {
  try {
    const blog = await product.find({});
    if (!blog) {
      return res.status(200).json({ message: "No products found" });
    }
    res.status(200).json({ blog });
  } catch (error) {
    res.status(404).send(`Oops! An error occurred, ${error}`);
  }
});

router.post("/", async (req, res) => {
  try {
    const blog = await product.create(req.body);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).send(`Oops! An error occurred, ${error}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await product.findById(id);
    if (!blog) {
      return res.status(200).json({ message: "Cannot find the blog" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    res.status(404).send(`Oops! An error occurred, ${error}`);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await product.findByIdAndUpdate(id, req.body);
    if (!blog) {
      return res.status(200).json({ message: "Cannot update the blog" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    res.status(404).send(`Oops! An error occurred, ${error}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await product.findByIdAndDelete(id);
    if (!blog) {
      return res.status(200).json({ message: "Cannot delete the user" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    res.status(404).send(`Oops! An error occurred, ${error}`);
  }
});


module.exports = router;
