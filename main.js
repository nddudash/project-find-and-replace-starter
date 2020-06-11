// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceFirstButton = document.querySelector(".replace-first-button");
const documentBody = document.querySelector(`body`);
const caseInsensitivityCheck = document.querySelector('.case-insensitivity-checkbox');
const userInteractivityBox = document.querySelector(`fieldset`);


// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE

//Replace All Button Functionality
replaceAllButton.addEventListener(`click`, function() {
   
    //Store User Input into Variables
    let currentFindInput = findInput.value;
    let currentReplaceInput = replaceInput.value;
    let matchesFound = 0

    //Outer For Loop to work through the Row Elements
    for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex ++) {
        let currentRowElement = rowElements[rowIndex];
        let currentRowCells = getCellElements(currentRowElement);
        
        //Inner For Loop to work through the Current Row's Cells
        for (let cellIndex = 0; cellIndex < currentRowCells.length; cellIndex++) {
            let currentCellElement = currentRowCells[cellIndex];
            let currentCellHTML = (currentCellElement.innerHTML);

            //Case Insensitivity Box Check and String Conversion
            if (caseInsensitivityCheck.checked === true) {
                console.log(`THE CHECKBOX IS CHECKED`)
                currentFindInput = currentFindInput.toLowerCase();
                console.log(`%c LOWER CASE FIND INPUT: ${currentFindInput}`, `color:red`)
                currentCellHTML = currentCellHTML.toLowerCase();
                console.log(`%c LOWER CASE CELL HTML: ${currentCellHTML}`, `color:red`)
            }

            //If Statement to replace the HTML of a cell matching the Search
            if (currentCellHTML.includes(currentFindInput)) {
                matchesFound ++;
                let replacedHTML = currentCellHTML.replace(currentFindInput, currentReplaceInput);
                console.log(`%c ${replacedHTML}`, 'background: #222;')
                currentCellElement.innerHTML = replacedHTML;
            }
        }
    }

    //Matches Found Functionality
    console.log(matchesFound);
    if (matchesFound > 0) {
        let matchesDiv = document.createElement(`div`);
        matchesDiv.id = "matchesFoundBox"
        matchesDiv.innerHTML = `${matchesFound} Matches Found and Replaced!`
        userInteractivityBox.appendChild(matchesDiv);

    } else if (matchesFound === 0) {
        findInput.value = "";
        window.alert(`No Matches Found! Try Another Search!`);
    }
})


//Replace First Match Button Functionality
replaceFirstButton.addEventListener(`click`, function() {

    //There's probably a more elegant solution than copy/pasting
    //but hey, as long as it works.

    //Store User Input into Variables
    let currentFindInput = findInput.value;
    let currentReplaceInput = replaceInput.value;
    let matchesFound = 0

    //Outer For Loop to work through the Row Elements
    Yo_I_did_not_know_about_labels:
    for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex ++) {
        let currentRowElement = rowElements[rowIndex];
        let currentRowCells = getCellElements(currentRowElement);
        //Inner For Loop to work through the Current Row's Cells
        for (let cellIndex = 0; cellIndex < currentRowCells.length; cellIndex++) {
            let currentCellElement = currentRowCells[cellIndex];
            let currentCellHTML = (currentCellElement.innerHTML);
            //If Statement to replace the HTML of a cell matching the Search
            if (currentCellHTML.includes(currentFindInput)) {
                matchesFound ++;
                let replacedHTML = currentCellHTML.replace(currentFindInput, currentReplaceInput);
                console.log(`%c ${replacedHTML}`, 'background: #222;')
                currentCellElement.innerHTML = replacedHTML;
                break Yo_I_did_not_know_about_labels
            }
        }
    }
   
    if (matchesFound === 0) {
        findInput.value = "";
        window.alert(`No Matches Found! Try Another Search!`);
    }
    
})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
