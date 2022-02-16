const myInfo = ["Asif Abir", "Male", "Dhaka", 35];
myInfo.push("Daffodil");
myInfo.unshift("Mr");
/* for (let i = 0; i < myInfo.length; i++) {
    console.log(myInfo[i]);
} */
for (const i of myInfo){
    console.log(i);
}