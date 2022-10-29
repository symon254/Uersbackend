const Contact = require("../Models/contactModel");
const mongoose = require("mongoose");

//GET all Contacts/
const getContacts = async (req, res) => {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.status(200).json(contacts);
};

//GET a single Contact
const getContact = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such contact" });
    }

    const contact = await Contact.findById(id);

    if (!contact) {
        return res.status(404).json({ error: "no such contact" });
    }
    res.status(200).json(contact);
};

//POST a new Contact
const createNewContact = async (req, res) => {
    const { firstName, lastName, phone } = req.body;

    //adding doc to db
    try {
        const contact = await Contact.create({ firstName, lastName, phone });
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//DELETE all Contacts
const deleteContact = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such contact" });
    }

    const contact = await Contact.findOneAndDelete({ _id: id });

    if (!contact) {
        return res.status(404).json({ error: "no such contact" });
    }
    res.status(200).json(contact);
};

//UPDATE all Contacts
const updateContact = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such Contact" });
    }

    const contact = await Contact.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!contact) {
        return res.status(404).json({ error: "no such Contact" });
    }
    res.status(200).json(contact);
};

module.exports = {
    createNewContact,
    getContacts,
    getContact,
    deleteContact,
    updateContact,
};
