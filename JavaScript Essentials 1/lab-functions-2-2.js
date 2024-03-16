let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "furabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0966 398 2895",
    email: "aosuere.vulputate@sed.com",
  },
  {
    name: "Zeus Xion",
    phone: "0866 398 2895",
    email: "ere.vulputate@sed.com",
  },
  {
    name: "Alpaca Real",
    phone: "0166 398 2895",
    email: "losuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

let showContact = function (contacts, i) {
  if (contacts instanceof Array && contacts[i]) {
    console.log(
      `${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`
    );
  }
};

let showAllContacts = function (contacts) {
  if (contacts instanceof Array) {
    for (contact of contacts) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  }
};

let addNewContact = function (contacts, name, phone, email) {
  if (contacts instanceof Array && name && phone && email) {
    contacts.push({
      name: name,
      phone: phone,
      email: email,
    });
  }
};

// sort comparisons
let byName = (a, b) => (a.name > b.name ? 1 : -1);
let byPhone = (a, b) => (a.phone > b.phone ? 1 : -1);
let byEmail = (a, b) => (a.email > b.email ? 1 : -1);

showAllContacts(contacts);

let choice = prompt("Please select: Sort by name, email or phone");

switch (choice) {
  case "name": {
    console.log("Sorted by Name");
    contacts.sort(byName);
    showAllContacts(contacts);
    break;
  }

  case "phone": {
    console.log("Sorted by Phone");
    contacts.sort(byPhone);
    showAllContacts(contacts);
    break;
  }

  case "email": {
    console.log("Sorted by Email");
    contacts.sort(byEmail);
    showAllContacts(contacts);
    break;
  }

  default: {
    console.log("invalid selection");
    break;
  }
}
