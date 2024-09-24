// console.log('Index Connected')

function toggleViewBasedOnId(id){
    const viewControlButtons = document.getElementsByClassName('btn-view-control');
    const donationContainer = document.getElementById('donation-container');
    const historyContainer = document.getElementById('history-container');


    for(const viewControlButton of viewControlButtons){
        viewControlButton.classList.remove('bg-greenlizard');
    }

    const activeButton = document.getElementById(id);
    activeButton.classList.add('bg-greenlizard');

    if(id === 'btn-donation'){
        donationContainer.classList.add('flex');
        donationContainer.classList.remove('hidden');
        
        historyContainer.classList.add('hidden');
        historyContainer.classList.remove('flex');


    }else{
        historyContainer.classList.remove('hidden');
        historyContainer.classList.add('flex');

        donationContainer.classList.add('hidden');
        donationContainer.classList.remove('flex');
    }
}