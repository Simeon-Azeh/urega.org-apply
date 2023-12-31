var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n);
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        showSubmissionMessage(); // Display the submission message
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value.trim() === "") {
            // add an "invalid" class to the field:
            y[i].classList.add("invalid");
            // and show the error message:
            showError(y[i]);
            // and set the current valid status to false:
            valid = false;
        }
    }

    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].classList.add("finish");
    }

    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    //... and adds the "active" class to the current step:
    x[n].classList.add("active");
}

function showError(input) {
    var errorContainer = document.getElementById(input.id + "-error");
    if (errorContainer) {
        errorContainer.style.display = "block";
    }
}

// New function for input validation:
function validateInput(input) {
    if (input.value.trim() === "") {
        input.classList.add('invalid');
        showError(input);
    } else {
        input.classList.remove('invalid');
    }
}

// Text area
const textArea = document.getElementById('textArea');
const wordCountDisplay = document.getElementById('wordCount');

textArea.addEventListener('input', function () {
    const words = textArea.value.match(/\b\w+\b/g);
    const wordCount = words ? words.length : 0;
    wordCountDisplay.textContent = 'Word Count: ' + wordCount;

    // Check if word limit (e.g., 800) is exceeded
    if (wordCount > 800) {
        wordCountDisplay.classList.add('exceeded');
    } else {
        wordCountDisplay.classList.remove('exceeded');
    }
});

// Function to show the custom submission message
function showSubmissionMessage() {
    var submissionMessage = document.getElementById("submissionMessage");
    if (submissionMessage) {
        submissionMessage.style.display = "block";
    }
}
