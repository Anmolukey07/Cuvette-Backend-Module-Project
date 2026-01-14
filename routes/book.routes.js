const router = require("express").Router();
const { protect } = require("../middleware/auth.middleware");
const ctrl = require("../controllers/book.controller");

router.get("/", ctrl.getBooks);
router.get("/:id", ctrl.getBookById);
router.post("/", protect, ctrl.createBook);
router.put("/:id", protect, ctrl.updateBook);
router.delete("/:id", protect, ctrl.deleteBook);
module.exports = router;