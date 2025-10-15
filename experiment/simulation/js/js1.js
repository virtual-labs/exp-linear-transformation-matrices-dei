function b1(){
    document.getElementById('b1btn').innerHTML=' = {(1, 1), (0, 1)}';
}
function b2(){
    document.getElementById('b2btn').innerHTML=' = {(-1, 0, 0), (0, -1, 0), (0, 0, -1)}';
}
function e1e2(){
    document.getElementById('e1e2btn').innerHTML='e<sub>1</sub> = (1, 1), e<sub>2</sub> = (0, 1) <br> T(e<sub>1</sub>) = (2, 0) = -2(-1, 0) + 0(0, -1) <br> T(e<sub>1</sub>) = ';
}


function showGeometry(imgId, newSrc) {
    document.getElementById(imgId).src = newSrc;
}

function checkAnswer1(button, correctAnswer) {
    const caseDiv = button.closest('.case');
    const resultEl = caseDiv.querySelector('.result1');
    const reasonEl = caseDiv.querySelector('.reason1');

    // Remove 'selected-btn' from both buttons in this case
    caseDiv.querySelectorAll('button').forEach(btn => btn.classList.remove('selected-btn'));

    // Add grey highlight to the clicked button
    button.classList.add('selected-btn');

    // Show Correct/Incorrect
    if (correctAnswer) {
        resultEl.innerHTML = "✅ Correct";
        resultEl.style.color = "green";
    } else {
        resultEl.innerHTML = "❌ Incorrect";
        resultEl.style.color = "red";
    }

    // Show reason
    reasonEl.style.display = "block";
}


function checkAnswer2(button, correctAnswer) {
    const caseDiv = button.closest('.case');
    const resultEl = caseDiv.querySelector('.result2');
    const reasonEl = caseDiv.querySelector('.reason2');

    // Remove 'selected-btn' from both buttons in this case
    caseDiv.querySelectorAll('button').forEach(btn => btn.classList.remove('selected-btn'));

    // Add grey highlight to the clicked button
    button.classList.add('selected-btn');

    // Show Correct/Incorrect
    if (correctAnswer) {
        resultEl.innerHTML = "✅ Correct";
        resultEl.style.color = "green";
    } else {
        resultEl.innerHTML = "❌ Incorrect";
        resultEl.style.color = "red";
    }

    // Show reason
    reasonEl.style.display = "block";
}

function checkAnswer3(button, correctAnswer) {
    const caseDiv = button.closest('.case');
    const resultEl = caseDiv.querySelector('.result3');
    const reasonEl = caseDiv.querySelector('.reason3');

    // Remove 'selected-btn' from both buttons in this case
    caseDiv.querySelectorAll('button').forEach(btn => btn.classList.remove('selected-btn'));

    // Add grey highlight to the clicked button
    button.classList.add('selected-btn');

    // Show Correct/Incorrect
    if (correctAnswer) {
        resultEl.innerHTML = "✅ Correct";
        resultEl.style.color = "green";
    } else {
        resultEl.innerHTML = "❌ Incorrect";
        resultEl.style.color = "red";
    }

    // Show reason
    reasonEl.style.display = "block";
}

function checkAnswer4(button, correctAnswer) {
    const caseDiv = button.closest('.case');
    const resultEl = caseDiv.querySelector('.result4');
    const reasonEl = caseDiv.querySelector('.reason4');

    // Remove 'selected-btn' from both buttons in this case
    caseDiv.querySelectorAll('button').forEach(btn => btn.classList.remove('selected-btn'));

    // Add grey highlight to the clicked button
    button.classList.add('selected-btn');

    // Show Correct/Incorrect
    if (correctAnswer) {
        resultEl.innerHTML = "✅ Correct";
        resultEl.style.color = "green";
    } else {
        resultEl.innerHTML = "❌ Incorrect";
        resultEl.style.color = "red";
    }

    // Show reason
    reasonEl.style.display = "block";
}

function checkAnswer5(button, correctAnswer) {
    const caseDiv = button.closest('.case');
    const resultEl = caseDiv.querySelector('.result5');
    const reasonEl = caseDiv.querySelector('.reason5');

    // Remove 'selected-btn' from both buttons in this case
    caseDiv.querySelectorAll('button').forEach(btn => btn.classList.remove('selected-btn'));

    // Add grey highlight to the clicked button
    button.classList.add('selected-btn');

    // Show Correct/Incorrect
    if (correctAnswer) {
        resultEl.innerHTML = "✅ Correct";
        resultEl.style.color = "green";
    } else {
        resultEl.innerHTML = "❌ Incorrect";
        resultEl.style.color = "red";
    }

    // Show reason
    reasonEl.style.display = "block";
}

function checkAnswer6(button, correctAnswer) {
    const caseDiv = button.closest('.case');
    const resultEl = caseDiv.querySelector('.result6');
    const reasonEl = caseDiv.querySelector('.reason6');

    // Remove 'selected-btn' from both buttons in this case
    caseDiv.querySelectorAll('button').forEach(btn => btn.classList.remove('selected-btn'));

    // Add grey highlight to the clicked button
    button.classList.add('selected-btn');

    // Show Correct/Incorrect
    if (correctAnswer) {
        resultEl.innerHTML = "✅ Correct";
        resultEl.style.color = "green";
    } else {
        resultEl.innerHTML = "❌ Incorrect";
        resultEl.style.color = "red";
    }

    // Show reason
    reasonEl.style.display = "block";
}


function checkAnswer() {
        const correctAnswers = ["{0,0}", "line", "R2"]; // correct answers
        const userAnswers = [
            document.getElementById("opt1").value,
            document.getElementById("opt2").value,
            document.getElementById("opt3").value
        ];

        const resultDiv = document.getElementById("result");

        // If any dropdown is empty
        if (userAnswers.includes("")) {
            resultDiv.innerHTML = "⚠ Please select all options.";
            resultDiv.className = "result incorrect";
            return;
        }

        // Check if user selected exactly the same set as correctAnswers
        const isCorrect =
            userAnswers.length === correctAnswers.length &&
            correctAnswers.every(ans => userAnswers.includes(ans));

        if (isCorrect) {
            resultDiv.innerHTML = "✅ Correct!.";
            resultDiv.className = "result correct";
        } else {
            resultDiv.innerHTML = `❌ Incorrect! The correct answer is:<br>A line passing through origin or {(0,0)} or R<sup>2</sup>.`;
            resultDiv.className = "result incorrect";
        }
    }