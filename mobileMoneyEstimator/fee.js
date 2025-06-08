function estimateTransactionFee(amountToSend) {
  const feeRate = 0.015;
  let fee = amountToSend * feeRate;

  if (fee < 10) fee = 10;
  else if (fee > 70) fee = 70;

  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}`);
  console.log("Send Money Securely!");
}

const amount = parseFloat(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);
