// Define a two-dimensional array 'finances' containing monthly data of profits and losses.
// ... (data entries)
var finances = [
  // ... financial data entries (month-year, amount)
];

// Print the title for the financial analysis report.
console.log("Financial Analysis");

// Print a line separator.
console.log("----------------");

// Print the total number of months in the dataset.
console.log("Total Number of Months: " + finances.length);

// Calculate the total profit/loss over the entire period.
var sum = 0;
for (var i = 0; i < finances.length; i++) {
  sum += finances[i][1];
}
console.log("Net total amount of Profit/Losses over the entire period: $" + sum);

// Initialize variables for change, total changes, greatest increase, greatest decrease, and corresponding months.
var change = 0;
var changes = 0;
var greatest_increase = 0;
var greatest_decrease = 0;
var month_profit;
var month_loss;

// Loop through the 'finances' array starting from the second element to calculate changes and find greatest increase/decrease.
for (var i = 1; i < finances.length; i++) {
  // Calculate the change in profit/loss from the previous month.
  change = finances[i][1] - finances[i - 1][1];
  
  // Accumulate total changes.
  changes += change;

  // Check if the current change is the greatest increase or decrease.
  if (greatest_increase < change) {
    greatest_increase = change;
    month_profit = finances[i][0]; // Save the corresponding month for greatest increase.
  } else if (greatest_decrease > change) {
    greatest_decrease = change;
    month_loss = finances[i][0]; // Save the corresponding month for greatest decrease.
  }
}

// Print total change in Profit/Losses from month to month.
console.log("Total change in Profit/Losses from month to month: $" + changes);

// Print the average of the changes in Profit/Losses over the entire period.
console.log("Average of the changes in Profit/Losses over the entire period: $" + (changes / (finances.length - 1)).toFixed(2));

// Print the month and amount for the Greatest Increase in Profits/Losses.
console.log("Greatest Increase in Profits/Losses: " + month_profit + " ($" + greatest_increase + ")");

// Print the month and amount for the Greatest Decrease in Profits/Losses.
console.log("Greatest Decrease in Profits/Losses: " + month_loss + " ($" + greatest_decrease + ")");
// Define a two-dimensional array 'finances' containing monthly data of profits and losses.
// ... (data entries)
var finances = [
  // ... financial data entries (month-year, amount)
];

// Print the title for the financial analysis report.
console.log("Financial Analysis");

// Print a line separator.
console.log("----------------");

// Print the total number of months in the dataset.
console.log("Total Number of Months: " + finances.length);

// Calculate the total profit/loss over the entire period.
var sum = 0;
for (var i = 0; i < finances.length; i++) {
  sum += finances[i][1];
}
console.log("Net total amount of Profit/Losses over the entire period: $" + sum);

// Initialize variables for change, total changes, greatest increase, greatest decrease, and corresponding months.
var change = 0;
var changes = 0;
var greatest_increase = 0;
var greatest_decrease = 0;
var month_profit;
var month_loss;

// Loop through the 'finances' array starting from the second element to calculate changes and find greatest increase/decrease.
for (var i = 1; i < finances.length; i++) {
  // Calculate the change in profit/loss from the previous month.
  change = finances[i][1] - finances[i - 1][1];
  
  // Accumulate total changes.
  changes += change;

  // Check if the current change is the greatest increase or decrease.
  if (greatest_increase < change) {
    greatest_increase = change;
    month_profit = finances[i][0]; // Save the corresponding month for greatest increase.
  } else if (greatest_decrease > change) {
    greatest_decrease = change;
    month_loss = finances[i][0]; // Save the corresponding month for greatest decrease.
  }
}

// Print total change in Profit/Losses from month to month.
console.log("Total change in Profit/Losses from month to month: $" + changes);

// Print the average of the changes in Profit/Losses over the entire period.
console.log("Average of the changes in Profit/Losses over the entire period: $" + (changes / (finances.length - 1)).toFixed(2));

// Print the month and amount for the Greatest Increase in Profits/Losses.
console.log("Greatest Increase in Profits/Losses: " + month_profit + " ($" + greatest_increase + ")");

// Print the month and amount for the Greatest Decrease in Profits/Losses.
console.log("Greatest Decrease in Profits/Losses: " + month_loss + " ($" + greatest_decrease + ")");
