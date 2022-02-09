function myFirstFunc (city = "Wasington DC", country = "USA") {
    console.log(city+" is the cpital of "+country);
}

myFirstFunc("Dhaka", "Bangladesh");
myFirstFunc("Islamabad", "Pakistan");
myFirstFunc("Dilli", "India");

let city = "London";
let country = "England";
myFirstFunc(city, country);
myFirstFunc();
