// get the values from the Page
function getValues() {
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        //call displayNumbers
        displayNumbers(numbers);

    } else {
        alert('You must enter a number')
    }
}

// generate numbers from the start value to the end value
function generateNumbers (startValue, endValue) {

    let numbers = [];

    // Get all numbers from start to end
    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);   
    }
    
    return numbers;
}

// display the numbers and mark even numbers bold
function displayNumbers (numbers) {

    let className = "even"

    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {
        
        let number = numbers[i];

        if(number % 2 == 0) {
            className = "even"
        } else {
            className = "odd";
        }
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}