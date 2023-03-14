// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.



//PART - 1 

const greet = (friend1, friend2, friend3) => `Welcome ${friend1} ${friend2} ${friend3}`;
const indiGreet = (friend) => `Welcome ${friend}`;


//PART - 2

const myAge = (birthYear) => {
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - birthYear;
    return `You are ${age}`;
}


// const vinuAge = myAge(1987);
// console.log(vinuAge);


//Part3 Can use object to store data but now  I bruteforce for good grief

function getDetails(fr1,fr2,fr3,ag1,ag2,ag3) {

    return `${indiGreet(fr1)}, + ${myAge(ag1)}. ${indiGreet(fr2)}, ${myAge(ag2)}. ${indiGreet(fr3)}, ${myAge(ag3)}.`
}

const friend1 = 'Rushi';
const friend2 = 'Rani';
const friend3 = 'Riyah';
const age1 = 1998;
const age2 = 1995;
const age3 = 2004;


const getDetailsFriends = getDetails(friend1, friend2, friend3, age1, age2, age3);

console.log(getDetailsFriends);