const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((acc, totalBalance) => totalBalance.balance + acc, 0);
};
// when I try to use variable allUsers in console show: Uncaught SyntaxError: Identifier 'allUsers' has already been declared (at task-4.js:1:1)
console.log(
  getTotalBalanceByGender(
    [
      {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811,
      },
      {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821,
      },
      {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793,
      },
      {
        name: "Elma Head",
        gender: "female",
        balance: 2278,
      },
      {
        name: "Carey Barr",
        gender: "male",
        balance: 3951,
      },
      {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498,
      },
      {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764,
      },
    ],
    "male"
  )
); // 12053

console.log(
  getTotalBalanceByGender(
    [
      {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811,
      },
      {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821,
      },
      {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793,
      },
      {
        name: "Elma Head",
        gender: "female",
        balance: 2278,
      },
      {
        name: "Carey Barr",
        gender: "male",
        balance: 3951,
      },
      {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498,
      },
      {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764,
      },
    ],
    "female"
  )
); // 8863
