/**
 * @author Kulman, Sawyer (@Kulmans@student.ncmich.edu)
 *@version 0.0.1
 *@summary midterm code Created by sawyer on 11/7/2016
 *@todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let withdrawAmount, depositAmount, transferAmount, cardNumber, counter, PinNumb, balence, transferFunds;
let inquire, cardHolderName, whichOption;

const CHECKINGS = 1000
const SAVINGS = 1000
const PIN = 1999
const MAX_TRIES = 3
const CARD_HOLDER_NAME = `Sawyer Kulman`

function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse == 1);
    setCardHolderName();
    if (whichOption == 1) {
        setWithdraw();}
    else if (whichOption == 2) {
        setDeposit();}
    else if (whichOption == 3) {
        setTransfer();}
    else if (whichOption == 4) {
        setInquire();}
    else {
        printGoodbye();}
}

main();

function setCardHolderName(){
    prompt.question(`\nWhat is your full Name?`) !== cardHolderName;
}
function SetPinNumb() {
    let pinNumb;
    while (typeof pinNumb == `undefined` || isNaN(pinNumb) || counter < MAX_TRIES || pinNumb !== PIN) {
        pinNumb = Number(prompt.question`\n\tPlease enter youre pin number:`);
        counter++}
    if (pinNumb !== PIN) {
        console.log(`\nPIN is invalid.`);
        return main();
    } else if (pinNumb == PIN) {
    }
}
function setWhichOption() {
    whichOption = prompt.question(`\n\twould you like to withdraw funds (press 1), deposit funds (press 2), transfer funds (press 3), or inquire on the balance of your account (press 4), or quit (press 5)?`);
}
function setWithdraw() {
    let withdrawAmount;
    withdrawAmount = prompt.question(`\n\ttWould you like to withdraw funds from your checking account(press 1) or savings account(press 2)?`);
    if (Withdraw == 1)
        console.log(`\nchecking Balance = \$${balence}`);
        withdrawAmount = PROMPT.question(`How much would you like to withdraw?`);
        balence = CHECKINGS - withdrawAmount;
        console.log(`New checking balance is \$${balence}`);}

    setWhichOption();{
        else {console.log(`\nsavings = \$${SAVINGS}`);
        withdrawAmount = PROMPT.question(`How much would you like to withdraw?`);
        balence = SAVINGS - withdrawAmount;
        console.log(`New savings balance is \$${balence}`);
        setWhichOption();
    }
}
function setdeposit() {
    let depositAmount;
    depositAmount = prompt.question(`\n\ttWould you like to deposit into your checking account(press 1) or savings account(press 2)?`);
    if (deposit == 1)
        console.log(`\nchecking Balance = \$${balence}`);
    depositAmount = PROMPT.question(`How much would you like to deposit?`);
    balence = CHECKINGS + depositAmount;
    console.log(`New checking balance is \$${balence}`);

    setWhichOption();
else {console.log(`\nsavings = \$${SAVINGS}`);
        depositAmount = PROMPT.question(`How much would you like to deposit?`);
        balence = SAVINGS + withdrawAmount;
        console.log(`New savings balance is \$${balence}`);
        setWhichOption();
    }
}
  function setTransferFunds() {
      transferFunds = prompt.question(`\n would you like to transfer to your checkings (press 1) or to your saveings(press 2)`)
      transferAmount = prompt.question(`\n how much would you like to transfer`)
      if transferFunds = 1 {
          balence = CHECKINGS + transferAmount }
      }
      else if
          transferAmount = prompt.question(`\nhow much would you like to transfer`)
      { balence = SAVINGS + transferAmount }

      function setInquireMoney() {
          console.log(`Checking balance is \$${balence}`);
          console.log(`Savings balance is \$${balence}`);
      }

      function printGoodbye() {
          console.log(`Thank you, ${cardHolderName}`) }





