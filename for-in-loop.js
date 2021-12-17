const loggedInUser = {
  name: "Jerk",
  age: 29,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]); // to access the values of each propertyName
}
