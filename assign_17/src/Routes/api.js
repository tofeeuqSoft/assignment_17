const express = require("express");
const { CreateUser } = require("../Controllers/UserController");
const { CreateProduct } = require("../Controllers/ProductController");

const router = express.Router();

router.post("/CreateUser", CreateUser);
router.post("/CreateProduct", CreateProduct);
module.exports = router;
