const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelector('.no-of-notes');

const avilableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener('click', function validateBillAmount(){

    if(billAmount.value > 0){
        if(cashGiven.value >=  billAmount.value)
        {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Do you want to wash plates ?")
        }

    }else{
        showMessage("Invalid Bill Amount")
   }
});

function calculateChange(amountToBeReturned){
    
    for(let i = 0; i < avilableNotes.length; i++){
        
        const numberOfNotes = Math.trunc(
        amountToBeReturned / avilableNotes[i]);

        amountToBeReturned %= avilableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";    
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
    

}