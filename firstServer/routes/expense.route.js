const router = require("express").Router();
const {
  addExpense,
  getExpenseByUser,
  deleteAnExpense,
} = require("../controllers/expense.controller");
const { authentification } = require("../middlewares/authMiddleware");
const { validateMiddleware } = require("../middlewares/validateMiddleware");

router.post("/", addExpense);

router.get("/:id", authentification, validateMiddleware, getExpenseByUser);

router.delete("/:id", deleteAnExpense);

module.exports = router;

// localhot:3000/expenses
