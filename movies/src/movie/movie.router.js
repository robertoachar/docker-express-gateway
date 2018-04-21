const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const {
  check,
  create,
  list,
  remove,
  update,
  view
} = require('./movie.controller');

router
  .route('/')
  .get(catchErrors(list))
  .post(catchErrors(create));

router
  .route('/:id')
  .get(catchErrors(check), catchErrors(view))
  .put(catchErrors(check), catchErrors(update))
  .delete(catchErrors(check), catchErrors(remove));

module.exports = router;
