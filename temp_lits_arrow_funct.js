// TODO: Create a multiline string using template literals 

const person = `
Owam 
Gobinca
from Khayelitsha`

console.log(person)


// TODO: Create a function that uses template literals for HTML generation 

function RegisterUser(name, lastName, IDnumber, address) {
  return `
    <div class="register-user">
      <h2>${name} ${lastName}</h2>
      <p>ID Number: ${IDnumber}</p>
      <p>Address: ${address}</p>
    </div>
  `;
}
console.log(RegisterUser("Owam", "Gobinca", "1234567890", "LC 595 Nkanini Khayelitsha 7784"))


// TODO: Convert regular functions to arrow functions 

function getAverage(x ,y) {
  return (x + y) / 2;
}
getAverage(17, 24);

//conversion to arrow function

const getAverageArrow = (x, y) => (x + y) / 2;
console.log(getAverageArrow(17, 24));

// Another function
function isEven(num) {
  return num % 2 === 0;
}
isEven(9);

//conversion to arrow function

const isEvenArrow = (num) => num % 2 === 0;
console.log(isEvenArrow(9));



// TODO: Use arrow functions with array methods 

const voters = ["Owam Gobinca" , "Okuhle Tshabalala", "Thina Mthembu", "Endinako Ndlovu", "Sipho Langa"]  

const votedBefore = voters.filter(voter => voter.includes("Owam Gobinca") || voter.includes("Okuhle Tshabalala"))
console.log(votedBefore)

const AddVoter = (newVoter) => {
             voters.push(newVoter);
};
AddVoter("Sibongile Thabethe");
console.log(voters)
