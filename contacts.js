const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db", "contacts.json");

function listContacts() {
 
 }
 
 function getContactById(contactId) {
 
 }
 
 function removeContact(contactId) {

 }
 
 function addContact(name, email, phone) {

 }

 module.exports = {
   contactsPath,
   listContacts,
   getContactById,
   removeContact,
   addContact,
 };