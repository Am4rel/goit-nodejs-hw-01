const fs = require("fs").promises;
const path = require("path");
const getId = require("./utils/getId");

const contactsPath = path.join(__dirname, "/db/contacts.json");

const getListOfContacts = async () => {
    const contacts = await fs.readFile(contactsPath)
    return JSON.parse(contacts);
};

const updateContacts = async (updateInfo) => {
    const contactsForUpdate = JSON.stringify(updateInfo);

    await fs.writeFile(contactsPath, contactsForUpdate);
};

const getById = async (id) => {
    try {
        const contacts = await getListOfContacts();
        const neededContact = contacts.find(contact => contact.id === parseInt(id));
        if (!neededContact){
            throw new Error(`Contact with id ${id} not found.`);
        };
        return neededContact;
    } catch (error) {
        console.log(error.message);        
    };   
};

const removeContact = async (id) => {
    try {
        const contacts = await getListOfContacts();
        const newContacts = contacts.filter(contact => contact.id !== parseInt(id));
        await updateContacts(newContacts);
        
        console.log(`Contact with ID ${id} was removed successfully. Here's the updated list of your contacts`)
        console.table(newContacts);
    } catch (error) {
        console.log(error.message);
    };
};

const addContact = async (name, email, phone) => {
    try {
        const contacts = await getListOfContacts();
        
        const id = getId(contacts);
        const newContact = {id, name, email, phone};
        const newContacts = [...contacts, newContact];
        
        await updateContacts(newContacts);
        
        console.log(`Contact ${name} was added successfully. Here's the updated list of your contacts`)
        console.table(newContacts);
    } catch (error) {
        console.log(error.message);
    };
};

module.exports ={
    getListOfContacts,
    getById,
    removeContact,
    addContact
}