const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

const updateContacts = async (updateInfo) => {
    const contactsForUpdate = JSON.stringify(updateInfo);

    await fs.writeFile(contactsPath, contactsForUpdate);
};

module.exports = updateContacts;