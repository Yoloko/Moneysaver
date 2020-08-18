const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    
    userId: {
        type: String,
    },
    income: [
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

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
