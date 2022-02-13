//1. get  deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //button ready
    // 2. get input value
    const depositInput = document.getElementById('deposit-input');  //input
    const depositAmountText = depositInput.value;       //input value
    // convate number
    const depositAmount = parseFloat(depositAmountText);
    //---------------------------------

    // 3. get current deposit
    const depositTotal = document.getElementById('deposit-total');
    //get deposit total inner text
    const depositTotalText = depositTotal.innerText
    // convate number
    const previousDepositTotal = parseFloat(depositTotalText);

    //link between input and deposit
    depositTotal.innerText = previousDepositTotal + depositAmount;
    //-----------------------------------

    //update balance
    //get balance
    const balanceTotal = document.getElementById('balance-total');
    // balance inner text
    const balanceTotalText = balanceTotal.innerText;
    //convate number
    const previousBalanceTotal = parseFloat(balanceTotalText);

    // link between balance & deposit input
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    //-------------------------------------

    //clear input field
    depositInput.value = '';



})
