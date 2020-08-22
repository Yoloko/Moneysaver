const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    
    userId: {
        type: String,
    },
    expense: [
        {
            amount: {
                type: Number
            },
            description: {
                type: String,
            },
            timeStamp: {
                type: Date,
                default: () => new Date()
            }
        }
    ]


});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
