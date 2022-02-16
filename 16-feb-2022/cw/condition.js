const age = 20;
if (age < 20) {
  console.log("Sorry, you are not allowed for this website");
} else {
  console.log("Welcome to our website");
}

const gender = "Female";
const religion = "Islam";

if (gender == "Male" || religion == "Islam") {
  console.log("Asslamuwalaikum");
} else {
  console.log("Hello");
}

switch (age) {
  case 10:
    console.log("You are a baby");
    break;
  case 20:
    console.log("You are a young person");
    break;
  case 30:
    console.log("You are a middle aged person");
    break;
  default:
    break;
}

if (age < 0) {
  console.log("You are not in this world");
} else if (age < 12) {
  console.log("You are a baby");
} else if (age < 20) {
  console.log("You are a teenager");
} else if (age < 30) {
  console.log("You are a young boy");
} else if (age < 50) {
  console.log("you are a middle aged person");
} else if (age >= 50 && age <= 200) {
  console.log("You are an old person");
} else {
  console.log("Biday Prithibi");
}
