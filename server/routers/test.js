const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.status(200).json({"status": "성공!"});
  } catch (error) {
    next(error);
  }
})



module.exports = router;