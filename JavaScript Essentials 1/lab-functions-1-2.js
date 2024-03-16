let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

function showContact(contacts, index) {
  if (contacts instanceof Array && contacts[index]) {
    let contact = contacts[index];
    console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
  } else {
    return "Error. Invalid Arguments";
  }
}

function showAllContacts(contacts) {
  if (contacts instanceof Array) {
    for (let contact of contacts) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  } else {
    return "Error. Invalid Argument";
  }
}

function addNewContact(contacts, name, phone, email) {
  if (contacts instanceof Array && name && phone && email) {
    contacts.push({
      name: name,
      phone: phone,
      email: email,
    });
  } else {
    return "Invalid Arguments";
  }
}

showContact(contacts, 0);
showAllContacts(contacts);
addNewContact(contacts, "Faraji", "0707070707", "faraji@gmail.com");
