const getAll = require("./getAllContacts");

const getById = async (id) => {
    try {
        const contacts = await getAll();
        const neededContact = contacts.find(contact => contact.id === id);
        if (!neededContact){
            throw new Error(`Contact with id ${id} not found.`);
        };
        return neededContact;
    } catch (error) {
        console.log(error.message);        
    }
    
}

module.exports = getById;