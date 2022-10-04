const mongoose = require("mongoose");

const CustomerSchema = {
    email: String,
    password: String,
    registeredEvents: Array,
    city: String,
};

const OrganizerSchema = {
    email: String,
    password: String,
    isVerified: Boolean,
    idProof: {
        data: Buffer,
        contentType: String,
    },
};

const AdminSchema = {
    email: String,
    password: String,
};

const EventSchema = {
    type: String,
    dateTime: Number,
    organizer: String,
    eventName: String,
    description: String,
    location: String,
    paymentAmount: Number,
    bannerImg: {
        data: Buffer,
        contentType: String,
    },
    profileImg: {
        data: Buffer,
        contentType: String,
    },
    participants: Number,
    codeOfConduct: Array,
    faqs: Array,
    sponsors: Array,
};

const Customer = mongoose.model("Customer", CustomerSchema);
const Organizer = mongoose.model("Organizer", OrganizerSchema);
const Admin = mongoose.model("Admin", AdminSchema);
const Event = mongoose.model("Event", EventSchema);

module.exports = {
    Customer: Customer,
    Organizer: Organizer,
    Admin: Admin,
    Event: Event,
};
