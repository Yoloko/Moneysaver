const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savingsSchema = new Schema({
    
    userId: {
        type: String,
    },
    savings: {
            goal: {
                type: Number
            },
            saved: {
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
});

const Savings = mongoose.model("Savings", savingsSchema);

module.exports = Savings;
