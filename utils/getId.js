const getId = (contacts) => {
    const ids = [];
    contacts.map(contact => ids.push(contact.id));
    return Math.max(...ids) + 1;
};

module.exports = getId;