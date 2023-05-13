// Define an object to store user data
let users = {};

// Function to add a user to the object
function addUser(name, idNumber, country, languages) {
  // Check if any field is empty
  if (!name || !idNumber || !country || !languages) {
    alert("Please fill out all fields.");
    return;
  }

  // Add user to the object
  users[idNumber] = {
    name: name,
    idNumber: idNumber,
    country: country,
    languages: languages
  };

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("idNumber").value = "";
  document.getElementById("country").selectedIndex = 0;
  document.getElementById("languages").selectedIndex = 0;

  // Display success message
  alert("User added successfully.");
}

// Function to delete a user from the object
function deleteUser(idNumber) {
  // Remove user from the object
  delete users[idNumber];

  // Remove the user's HTML element from the page
  let userElement = document.getElementById("user_" + idNumber);
  userElement.parentNode.removeChild(userElement);

  // Display success message
  alert("User deleted successfully.");
}

// Function to create a new HTML element for a user
function createUserElement(user) {
  // Create HTML elements for user data
  let name = document.createElement("h2");
  name.className = "name";
  name.innerText = user.name;

  let idNumber = document.createElement("p");
  idNumber.className = "IDNum";
  idNumber.innerText = user.idNumber;

  let country = document.createElement("p");
  country.className = "country";
  country.innerText = user.country;

  let languages = document.createElement("p");
  languages.className = "lang";
  languages.innerText = user.languages;

  let deleteButton = document.createElement("button");
  deleteButton.className = "btn";
  deleteButton.innerText = "Delete User";
  deleteButton.addEventListener("click", function() {
    deleteUser(user.idNumber);
  });

  // Create container div and add user data elements
  let userDiv = document.createElement("div");
  userDiv.className = "containNameAndID";
  userDiv.id = "user_" + user.idNumber;
  userDiv.appendChild(name);
  userDiv.appendChild(idNumber);
  userDiv.appendChild(country);
  userDiv.appendChild(languages);
  userDiv.appendChild(deleteButton);

  return userDiv;
}

// Add existing users to the object and display them on the page
users["1234567"] = {
  name: "John Chege",
  idNumber: "1234567",
  country: "Kenya",
  languages: "English"
};

users["9034567"] = {
  name: "Mary Njoki",
  idNumber: "9034567",
  country: "Tanzania",
  languages: "Swahili"
};

for (let idNumber in users) {
  let user = users[idNumber];
  let userElement = createUserElement(user);
  document.getElementsByClassName("main")[0].appendChild(userElement);
}
function addUser(name, idNumber, country, languages) {
  // create a new div to hold the user data
  if (!name || !idNumber || !country || !languages) {
    alert("Please fill out all fields.");
    return;
  }
  var userDiv = document.createElement("div");
  userDiv.classList.add("containNameAndID");

  // create h2 element to display the name
  var nameElement = document.createElement("h2");
  nameElement.classList.add("name");
  nameElement.textContent = name;
  userDiv.appendChild(nameElement);

  // create p element to display the ID number
  var idElement = document.createElement("p");
  idElement.classList.add("IDNum");
  idElement.textContent = idNumber;
  userDiv.appendChild(idElement);

  // create p element to display the country
  var countryElement = document.createElement("p");
  countryElement.classList.add("country");
  countryElement.textContent = country;
  userDiv.appendChild(countryElement);

  // create p element to display the language
  var langElement = document.createElement("p");
  langElement.classList.add("lang");
  langElement.textContent = languages;
  userDiv.appendChild(langElement);

  // create a button to delete the user
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.textContent = "Delete User";
  deleteButton.onclick = function() {
    userDiv.remove();
    alert("User deleted successfully.");
  }
  userDiv.appendChild(deleteButton);

  // add the user div to the main container
  var mainDiv = document.querySelector(".main");
  mainDiv.appendChild(userDiv);

  // clear the form
  document.getElementById("userForm").reset();
}
