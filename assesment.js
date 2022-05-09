
/*status would be a variable id use to trash online or offline, for this I assume everyones online for design focus */

var Contact = function (name, email, phone, status) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.status = status;
}

/*Pushes contacts into a vector holding information on each user*/
var contacts = [];
contacts.push(new Contact("Christain", "christain@yahoo.com", "973-562-1234"));
contacts.push(new Contact("Rich", "rich@tripod.com", "302-123-4523"));
contacts.push(new Contact("Scott", "scott@mailinator.com", "201-292-7211"));
contacts.push(new Contact("Danny", "danny@hotmail.com", "443-123-4523"));
contacts.push(new Contact("Taka", "taka@myspace.com", "410-568-7211"));
contacts.push(new Contact("Tim", "tim@netscape.com", "803-123-4523"));


/* Function to display the contacts when the page intially loads
Takes in: n/a
Returns: Each contacts email and name
 */
var listContacts = function() {
  document.getElementById("displayContacts").innerHTML = " ";
  for (var i = 0; i < contacts.length; i++) {
    document.getElementById("displayContacts").innerHTML +=
      '<tr><td id="name' + +i + '">' + '<span class="logged-in" >●</span>' + contacts[i].name +
      '</td><td id="email' + i + '">' + contacts[i].email

  }
};




/* Used to switch between number and email using the selectors
Takes in:/N/a
Returns: Contact name and number/email based on selection
*/
var changetoNumber = function() {
  document.getElementById("displayContacts").innerHTML = " ";
  for (var i = 0; i < contacts.length; i++) {
    document.getElementById("displayContacts").innerHTML +=
      '<tr><td id="name' + i + '">' + '<span class="logged-in" >●</span>' + contacts[i].name +
      '</td><td id="email' + i + '">' + contacts[i].phone;

  }
  if (document.getElementById('contactopt').value == "email") {
    document.getElementById("displayContacts").innerHTML = " ";
    for (var i = 0; i < contacts.length; i++) {
      document.getElementById("displayContacts").innerHTML +=
        '<tr><td id="name' + i + '">' + '<span class="logged-in" >●</span>' + contacts[i].name +
        '</td><td id="email' + i + '">' + contacts[i].email

    }

  }
};

listContacts();
