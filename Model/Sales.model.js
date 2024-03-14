const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalesSchema = new Schema({
    vendorName: {
        type: String,
        required: true,
    },
    sales: {
        type: Number,
        required: true,
    },
    //   updated: { type: Date, default: Date.now },
    dateCreated: {
        type: Date,
        default: Date.now
    },
});

const Sales = mongoose.model('sales_information', SalesSchema);
module.exports = Sales;