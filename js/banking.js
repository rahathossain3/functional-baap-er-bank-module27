/* 
function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
 */


function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);  //input
    const inputAmountText = inputField.value;       //input value
    const amountValue = parseFloat(inputAmountText);    // convate number

    //clear input field
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);  // 3. get and update total
    const totalText = totalElement.innerText        //get deposit total inner text
    const previousTotal = parseFloat(totalText);    // convate number
    totalElement.innerText = previousTotal + amount;     //link between input and deposit
}
function getCurrentBlance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;  // balance inner text
    const previousBalanceTotal = parseFloat(balanceTotalText);     // convate number
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*    
    const balanceTotalText = balanceTotal.innerText;  // balance inner text
      const previousBalanceTotal = parseFloat(balanceTotalText);     // convate number
       */

    const previousBalanceTotal = getCurrentBlance()

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;    // link between balance & deposit input
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;    // link between balance & deposit input
    }
}




//1. handle / get  deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //button ready--------------
    // 2. get input value-------------
    /*   const depositInput = document.getElementById('deposit-input');  //input
      const depositAmountText = depositInput.value;       //input value
      // convate number-----------------
      const depositAmount = parseFloat(depositAmountText); */
    //---------------------------------


    /*  // 3. get and update deposit total
     const depositTotal = document.getElementById('deposit-total');
     //get deposit total inner text
     const depositTotalText = depositTotal.innerText
     // convate number
     const previousDepositTotal = parseFloat(depositTotalText);
 
     //link between input and deposit
     depositTotal.innerText = previousDepositTotal + depositAmount; */
    //-----------------------------------


    //update balance
    //get balance

    /*     const balanceTotal = document.getElementById('balance-total');
        // balance inner text
        const balanceTotalText = balanceTotal.innerText;
        // convate number
        const previousBalanceTotal = parseFloat(balanceTotalText);
    
        // link between balance & deposit input
        balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

    //-------------------------------------


});

//1. handle / get  withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     //get withdraw input------------------------------
        const withdrawInput = document.getElementById('withdraw-input');
        // get input value---
        const withdrawAmountText = withdrawInput.value;
        // input convate number----------------
        const withdrawAmount = parseFloat(withdrawAmountText); */



    // 3. get and update withdrawtotal


    /* //update  total-------------------------------
    const withdrawTotal = document.getElementById('withdraw-total');
    //get withdraw balacne
    const previousWithdrawTotalText = withdrawTotal.innerText;
    // convate number
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // get final withdraw
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal; */




    //update balance after withdraw------------------------------------

    /*    const balanceTotal = document.getElementById('balance-total');
       const balanceTotalText = balanceTotal.innerText;
       const previousBalanceTotal = parseFloat(balanceTotalText);
   
       balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBlance = getCurrentBlance();

    if (withdrawAmount > 0 && withdrawAmount < currentBlance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount < currentBlance) {
        console.log('you can not withdraw more then what your account');
    }
});
