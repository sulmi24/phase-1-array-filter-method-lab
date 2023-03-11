// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, str) {
  let data = drivers.filter((ele) => {
    return ele.toUpperCase() == str.toUpperCase();
  });
  return data;
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, str) {
  let data = drivers.filter((ele) => {
    return ele.startsWith(str);
  });
  return data;
}

console.log(fuzzyMatch(drivers, "Sa"));

const driver = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(driver, str) {
  let data = driver.filter((ele) => {
    return ele.name == str;
  });
  return data;
}

console.log(matchName(driver, "Bobby"));
