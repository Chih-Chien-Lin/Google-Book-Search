const router = require("express").Router();

const {getSavedBooks, saveBook, removeBook} = require('../../controllers/booksController')


// GET and POST at /api/books
router.route('/').get(getSavedBooks).post(saveBook)

// DELETE at /api/books/:id
router.route('/:id').delete(removeBook)

module.exports = router




// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;
