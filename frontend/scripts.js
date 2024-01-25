class States {
    constructor(bird, flower, tree, significant_event) {
        this.bird = bird;
        this. flower = flower;
        this.tree = tree;
        this.significant_event = significant_event;
    }
}

const { response } = require("express");

const Alabama = new States();
const Alaska = new States();
const Arizona = new States();
const Arkansas = new States();




// -------------  ----------  -------  function to handle API call
function fetchData(option) {
    // make API call
    const apiURL = `https://http://stateinf.s3-website.us-east-2.amazonaws.com/stateinfo/?option=${option}`;
}

// use fetch method to get from the API
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        //displaying fetched data
        document.getElementById(`infoBlurb`).innerText = JSON.stringify(States);
    })
    .catch(error => console.error('error gathering info', error));


// event listener for drop down change
document.getElementById('statSel').addEventListener('selected', (displayValue) => {
    const displayValue = this.value;
});

fetchData(displayValue);

// function displayValue() {
//     document.getElementById('infoBlurb').innerHTML = document.getElementById("option", "")
// }

// // for loop to compare and find the key : value match
// for (let i = 0; i < 5; i++) {
//     if (val1 == i) {
//         // returning the matched key : value as a <p> with requested input
//         const infoBlurb = document.createElement('span')
//         document.body.appendChild(document.getElementById(infoBlurb));
//         el.innerText = val2
//     }
// }
