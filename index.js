const contactsOper = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const contacts = await contactsOper.listContacts();
        console.table(contacts);
      break;

    case 'get':
        const contact = await contactsOper.getById(id);
        console.log(contact);
      break;

    case 'add':
        await contactsOper.addContact(name, email, phone);
      break;

    case 'remove':
        await contactsOper.removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);