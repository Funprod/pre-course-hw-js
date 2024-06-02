let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

let passCopy = JSON.parse(JSON.stringify(passportWithAddress));

passCopy.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(passCopy.address.city);
