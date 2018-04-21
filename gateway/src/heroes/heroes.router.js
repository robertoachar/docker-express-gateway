const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const { create, list, remove, update, view } = require('./heroes.service');

router
  .route('/')
  .get(catchErrors(list))
  .post(catchErrors(create));

router
  .route('/:id')
  .get(catchErrors(view))
  .put(catchErrors(update))
  .delete(catchErrors(remove));

module.exports = router;
