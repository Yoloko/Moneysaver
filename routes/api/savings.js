const router = require("express").Router();
const ExpenseController = require("../../controllers/expenseController");
const IncomeController = require("../../controllers/incomeController");
const SavingsController = require("../../controllers/savingsController");


                        /* ********** Expenses Routes ********** */

// router.route("/")
//   .get(ExpenseController.findAll)
//   .post(ExpenseController.create);

// Matches with "/api/expense/:id"
// router
//   .route("/api/expense/:id")
//   .get(ExpenseController.findById);
  // .put(ExpenseController.update)
  // .post(ExpenseController.create)
  // .delete(ExpenseController.remove);


                        /* ********** Incomes Routes ********** */
// router
// .route(("/api/income/id")
// .get(IncomeController.findById);
// .put(IncomeController.update)
// .post(IncomeController.create)
// .delete(IncomeController.remove);

                          /* ********** Savings Routes ********** */
router
.route("/api/savings/:id")
.get(SavingsController.findById)
.put(SavingsController.update)
.post(SavingsController.create)
.delete(SavingsController.remove);

module.exports = router;
