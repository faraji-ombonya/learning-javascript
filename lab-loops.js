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

let isRunning = true;

while (isRunning) {
  let choice = prompt(
    "What do you want to do? Select first:display first contact last:display last contact all:display all contacts new: Adding a new contact. quit:exit the program"
  );

  if (choice == "first") {
    console.log(
      `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`
    );
  } else if (choice == "last") {
    let last = contacts.length - 1;
    console.log(
      `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`
    );
  } else if (choice == "all") {
    for (let contact of contacts) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  } else if (choice == "new") {
    let name = prompt("Name");
    let phone = prompt("Phone");
    let email = prompt("Email");

    if (name && phone && email) {
      contacts.push({
        name: name,
        phone: phone,
        email: email,
      });
    } else {
      console.log("Failed to add contact. Some value(s) are missing.");
    }
  } else if (choice == "quit") {
    break;
  } else {
    console.log(
      "An error occured. Please make sure you select a valid option."
    );
  }
}
