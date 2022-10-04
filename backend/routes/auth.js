const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const CustomerSchema = {
    email: String,
    password: String,
    registeredEvents: Array,
    city: String,
};

const Customer = mongoose.model("Customer", CustomerSchema);

router.post("/", async (req, res) => {
    const newCustomer = new Customer({
        email: req.body.email,
        password: req.body.password,
    });
    Customer.findOne(
        { email: newCustomer.email },
        function (err, foundCustomer) {
            if (foundCustomer) {
                if (foundCustomer.password === newCustomer.password) {
                    res.send("success");
                } else {
                    res.send("emailalreadyexists");
                }
            } else {
                newCustomer.save(function (err) {
                    if (!err) {
                        res.send("success");
                    } else {
                        res.send("fail");
                        return;
                    }
                });
            }
        }
    );
});

module.exports = router;

// https://glenn-mendonca-39-nope-js-hackover3-0-rx9j56g76qghrjj-3000.githubpreview.dev/auth
