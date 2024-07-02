const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const uploadRouter = require("./upload/router");

const offerRouter = require("./offers/router");

router.use("/offers", offerRouter);

router.use("/upload", uploadRouter);
/* ************************************************************************* */

module.exports = router;
