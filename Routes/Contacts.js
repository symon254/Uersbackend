const express = require("express");
const Contact = require("../Models/contactModel");
const {
    createNewContact,
    getContacts,
    getContact,
    deleteContact,
    updateContact,
} = require("../controlers/contactsControler");
const router = express.Router();

//GET all Contacts
router.get("/", getContacts);

//GET one Contact
router.get("/:id", getContact);

//create new contact
router.post("/", createNewContact);

//delete a contact
router.delete("/:id", deleteContact);

//update a contact
router.patch("/:id", updateContact);

module.exports = router;
