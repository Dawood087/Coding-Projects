// Income Felder
const incomeDescriptionInput = document.getElementById("income-description");
const incomeAmountInput = document.getElementById("income-amount");

// Expense Felder
const expenseDescriptionInput = document.getElementById("expense-description");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseAmountInput = document.getElementById("expense-amount");

// Summary + Tabelle
const transactionHistory = document.getElementById("transaction-history");
const totalIncome = document.getElementById("total-income");
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("balance");

let transactions = [];

function addIncome() {
  const description = incomeDescriptionInput.value.trim();
  const amount = parseFloat(incomeAmountInput.value.trim());

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid income description and amount.");
    return;
  }

  transactions.push({
    description,
    category: "-",
    amount,
    type: "Income",
  });

  updateTransactionHistory();
  updateSummary();
  incomeDescriptionInput.value = "";
  incomeAmountInput.value = "";
}

function addExpense() {
  const description = expenseDescriptionInput.value.trim();
  const category = expenseCategoryInput.value;
  const amount = parseFloat(expenseAmountInput.value.trim());

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense description and amount.");
    return;
  }

  transactions.push({
    description,
    category,
    amount,
    type: "Expense",
  });
  updateTransactionHistory();
  updateSummary();
  expenseDescriptionInput.value = "";
  expenseAmountInput.value = "";
  expenseCategoryInput.value = "";
}

function updateTransactionHistory() {
  transactionHistory.innerHTML = "";

  transactions.forEach((transaction, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${transaction.description}</td>
        <td>${transaction.category}</td>
        <td>${transaction.amount.toFixed(2)}</td>
        <td>${transaction.type}</td>
        <td><button class="delete-btn" onclick="deleteTransaction(${index})>Delete</button></td>
    `;
    transactionHistory.appendChild(row);
  });
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateTransactionHistory();
  updateSummary();
}

function updateSummary() {
  let incomeSum = 0;
  let expenseSum = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "Income") {
      incomeSum += transaction.amount;
    } else if (transaction.type === "Expense") {
      expenseSum += transaction.amount;
    }
  });

  totalIncome.textContent = incomeSum.toFixed(2);
  totalExpenses.textContent = expenseSum.toFixed(2);
  balance.textContent = (incomeSum - expenseSum).toFixed(2);
}

function clearAll() {
  transactions = [];
  updateTransactionHistory();
  updateSummary();
}
