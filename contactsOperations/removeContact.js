const getAll = require("./getAllContacts");
const updateContacts = require('./updateContactsList');

const removeContact = async (id) => {
    try {
        const contacts = await getAll();
        const newContacts = contacts.filter(contact => contact.id !== id);
        await updateContacts(newContacts);
    } catch (error) {
        console.log(error.message);
    };
};

module.exports = removeContact;