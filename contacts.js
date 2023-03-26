const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db", "contacts.json");

async function readContacts() {
   try {
     const res = await fs.readFile(contactsPath, { encoding: "utf8" });
     const resParsed = JSON.parse(res);
     return resParsed;
   } catch (error) {
     console.log(error);
   }
}

async function listContacts() {
   try {
     const res = await readContacts();
 
     console.table(res);
   } catch (error) {
     console.log(error);
   }
 }
 
 async function getContactById(contactId) {
   try {
     const res = await readContacts();
     const filtredRes = res.filter((element) => element.id === contactId);
     console.log(filtredRes);
   } catch (error) {
     console.log(error);
   }
 }
 
 async function removeContact(contactId) {
   try {
     const res = await readContacts();
     const filtredRes = res.filter((element) => {
       return element.id !== String(contactId);
     });
     await fs.writeFile(contactsPath, JSON.stringify(filtredRes, null, 2));
     console.log("del", filtredRes);
   } catch (error) {
     console.log(error);
   }
 }
 
 async function addContact({ name, email, phone }) {
   try {
     const res = await readContacts();
     const id = nanoid();
     const newContact = { id, name, email, phone };
 
     res.push(newContact);
 
     await fs.writeFile(contactsPath, JSON.stringify(res, null, 2));
     console.log(res);
   } catch (error) {}
 }

 module.exports = {
   contactsPath,
   listContacts,
   getContactById,
   removeContact,
   addContact,
 };