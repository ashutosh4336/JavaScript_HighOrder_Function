const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 2018 }
];

const ages = [35, 12, 20, 16, 5, 18, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for Loop
// for (let i = 0; i < companies.length; +i++) {
//   console.log(companies[i]);
// }

//forEach
// companies.forEach((company, index) => {
//   console.log(company);
// });

//Filter
//for loop
let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    canDrink.push(ages[i]);
  }
}

//filter

// const canDrink = ages.filter(age => {
//   if (age >= 18) {
//     return true;
//   }
// });

// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 18);

// filetr reatil companies

// const retailCompanies = companies.filter(
//   company => company.category === 'Retail'
// );

// console.log(retailCompanies);

//get 80's companies

// const eightCompanies = companies.filter(
//   eights => eights.start >= 1980 && eights.start < 1990
// );

// console.log(eightCompanies);

//Get comapnies lasted more then 10 years

// const lastedRenYears = companies.filter(
//   company => company.end - company.start >= 10
// );

// console.log(lastedRenYears);;

//MAP
// create array of company names
// const companyNames = companies.map(company => {
//   return company.name;
// });

// const testMap = companies.map(company => {
//   return `${company.name} lasted for ${company.end - company.start}`;
// });
// console.log(testMap);

// const agesSqure = ages.map(age => Math.sqrt(age));
// const ageTimesTwo = ages.map(age => age * age);

// console.log(agesSqure);

// console.log(ageTimesTwo);

// sort

// const storedCompanies = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

//console.log(sortedCompanies);

//sort gaes
const sortAges = ages.sort((a, b) => a - b);

//console.log(sortAges);

//reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce((total, age) => {
//   return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

// Get company Total-Years

const totalYears = companies.reduce((total, company) => {
  return total + (company.end - company.start);
}, 0);

//console.log(totalYears);

//Combine
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
