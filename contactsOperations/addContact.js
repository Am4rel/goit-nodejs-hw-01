const getAll = require("./getAllContacts");
const updateContacts = require('./updateContactsList');

const addContact = async (id, name, email, phone) => {
    try {
        const newContact = {id, name, email, phone};
        const contacts = await getAll();
        const newContacts = contacts.push(newContact);
        await updateContacts(newContacts);
    } catch (error) {
        console.log(error.message);
    };
};

module.exports = addContact;