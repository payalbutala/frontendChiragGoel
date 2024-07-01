const transactions = [
  { customerId: 1, amount: 100, type: "Credit", date: "2024-03-01" },
  { customerId: 2, amount: 150, type: "Credit", date: "2024-03-01" },
  { customerId: 1, amount: 200, type: "Credit", date: "2024-03-02" },
  { customerId: 3, amount: 50, type: "Debit", date: "2024-03-02" },
  { customerId: 2, amount: 120, type: "Credit", date: "2024-03-03" },
];

// Step1: Calculate total number of transactions
console.log(transactions.length);

// Step2: Calculate total amount of all transactions
// console.log(transactions);
let totalDebit = 0;
let totalCredit = 0;
let debitCount = 0;
let creditCount = 0;

transactions.forEach(function (item) {
  if (item.type === "Credit") {
    totalCredit += item.amount;
    creditCount++;
  } else {
    totalDebit += item.amount;
    debitCount++;
  }
});
console.log(totalCredit, totalDebit);

// Step3: Calculate average amount of  transactions
console.log(totalCredit / creditCount, totalDebit / debitCount);

// Group transactions by Date

// let res = [{ date: [item1, item2] }, { date: item }];

let res = {
  // 'date1' : [item1, item2]
};

transactions.forEach(function (item) {
  if (!res[item.date]) {
    res[item.date] = [{ item }];
  } else {
    res[item.date].push({ item });
  }
});

console.log(res);

// flatternArray

const arr = [1, [2, 3], [4, [5, 6]]];
// result = [1,2,3,4,5,6]
let result = [];

function flatternArray(arr) {
  return arr.flat(2);
}
console.log(flatternArray(arr));
