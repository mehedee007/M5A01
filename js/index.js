// console.log('Index Connected')
// Toggle the View between donation and history



function toggleViewBasedOnId(id) {
    const viewControlButtons = document.getElementsByClassName('btn-view-control');
    const donationContainer = document.getElementById('donation-container');
    const historyContainer = document.getElementById('history-container');


    for (const viewControlButton of viewControlButtons) {
        viewControlButton.classList.remove('bg-greenlizard');
    }

    const activeButton = document.getElementById(id);
    activeButton.classList.add('bg-greenlizard');

    if (activeButton.id === 'btn-donation') {
        donationContainer.classList.add('flex');
        donationContainer.classList.remove('hidden');

        historyContainer.classList.add('hidden');
        historyContainer.classList.remove('flex');


    } else {
        historyContainer.classList.remove('hidden');
        historyContainer.classList.add('flex');

        donationContainer.classList.add('hidden');
        donationContainer.classList.remove('flex');
    }
}

function handleDonationClick(id) {
    const clickedId = document.getElementById(id);
    let donatedValue;
    let donatedInput;
    if (clickedId.id === 'btn-donate-noakhali-flood') {
        donatedInput = document.getElementById('noakhali-donation');
        donatedValue = donatedInput.value;
        if (checkDonationValidity(donatedValue)) {
            // updateDonation('noak', donatedValue);
            updateCategoryWiseDonation('balance-noakhali-flood', donatedValue, 'Noakhali Flood Relief');
            donatedInput.value = '';
        }
    } else if (clickedId.id === 'btn-donate-feni-relief') {
        donatedInput = document.getElementById('feni-donation');
        donatedValue = donatedInput.value;
        if (checkDonationValidity(donatedValue)) {
            // updateDonation('noak', donatedValue);
            updateCategoryWiseDonation('balance-feni-relief', donatedValue, 'Feni Flood Relief');
            donatedInput.value = '';
        }
    } else {
        donatedInput = document.getElementById('quota-donation');
        donatedValue = donatedInput.value;
        if (checkDonationValidity(donatedValue)) {
            // updateDonation('noak', donatedValue);
            updateCategoryWiseDonation('balance-quota-movement', donatedValue, 'Quota Movement');
            donatedInput.value = '';
        }
    }


}

function updateCurrentBalance(value) {
    const currentBalance = document.getElementById('current-balance').innerText;

    currentBalanceFloat = parseFloat(currentBalance);
    currentBalanceFloat -= parseFloat(value);
    console.log(currentBalance, currentBalanceFloat);
    if (currentBalanceFloat >= 0) {
        document.getElementById('current-balance').innerText = currentBalanceFloat;
        return true;
    } else {
        alert("You don't have enough money to donate!");
        return false;
    }

}

function checkDonationValidity(value) {
    let isValid = false;
    if (isNaN(value)) {
        alert("Please Provide a valid number for Donation!");
    } else if (value <= 0 || value === "") {
        alert("Donation Amount can not be empty, and less or equal 0!");
    } else {
        if (updateCurrentBalance(value)) {
            document.getElementById('notif-modal').showModal();
            isValid = true;
        }
    }
    return isValid;
}

function updateCategoryWiseDonation(category, donationAmount, msg) {
    const currentCategoryBalance = document.getElementById(category).innerText;
    currentCategoryBalanceFloat = parseFloat(currentCategoryBalance);
    currentCategoryBalanceFloat += parseFloat(donationAmount);
    document.getElementById(category).innerText = currentCategoryBalanceFloat;
    writeHistory(donationAmount, msg);
}


function writeHistory(amount, msg){
    const historyContainer = document.getElementById('history-container');
    const timeStamp = new Date().toString();
    const divElement = document.createElement('div');
    const h3Element = document.createElement('h3');
    const pElement = document.createElement('p');

    divElement.className = 'p-8 rounded-2xl border-2 flex flex-col gap-2';
    h3Element.className ='text-xl font-bold';
    pElement.className = 'text-sm opacity-75';

    h3Element.textContent = `${amount} Taka is Donated for ${msg}, Bangladesh`;
    pElement.textContent = `Date : ${timeStamp}`;
    divElement.appendChild(h3Element);
    divElement.appendChild(pElement);
    // const history = `
    //                      <div class="p-8 rounded-2xl border-2 flex flex-col gap-2">
    //                         <h3 class="text-xl font-bold">${amount} Taka is Donated for ${msg}, Bangladesh</h3>
    //                         <p class="text-sm opacity-75">
    //                             Date : ${timeStamp}
    //                         </p>
    //                     </div>
    //                 `;
    historyContainer.appendChild(divElement);
}






// document.getElementById('btn-donate-noakhali-flood').addEventListener('click', function(){
//     console.log('clicked noakhali');
// })

// document.getElementById('noakhali').addEventListener('click', function(){
//     console.log('clicked noakhali taka');
// })