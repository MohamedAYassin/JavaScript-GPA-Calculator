function calculateGPAWithIf(grades) {
           let totalScore = grades.reduce((sum, grade) => sum + parseFloat(grade), 0);
           let averageScore = totalScore / grades.length;
           let grade;
         
           if (averageScore >= 90) {
             grade = 'A';
           } else if (averageScore >= 80) {
             grade = 'B';
           } else if (averageScore >= 70) {
             grade = 'C';
           } else if (averageScore >= 60) {
             grade = 'D';
           } else {
             grade = 'F';
           }
         
           return { gpa: averageScore.toFixed(2), grade };
         }
         
         function calculateGPAWithSwitch(grades) {
           let totalScore = grades.reduce((sum, grade) => sum + parseFloat(grade), 0);
           let averageScore = totalScore / grades.length;
           let grade;
         
           switch (true) {
             case averageScore >= 90:
               grade = 'A';
               break;
             case averageScore >= 80:
               grade = 'B';
               break;
             case averageScore >= 70:
               grade = 'C';
               break;
             case averageScore >= 60:
               grade = 'D';
               break;
             default:
               grade = 'F';
           }
         
           return { gpa: averageScore.toFixed(2), grade };
         }
         
         function createInputFields() {
           let numStudentsInput = document.getElementById('numStudents');
           let numStudents = parseInt(numStudentsInput.value);
         
           if (isNaN(numStudents) || numStudents <= 0) {
             alert('Please enter a valid number of students greater than 0.');
             return;
           }
         
           let inputFieldsDiv = document.getElementById('inputFields');
           inputFieldsDiv.innerHTML = '';
         
           for (let i = 1; i <= numStudents; i++) {
             let studentContainer = document.createElement('div');
             studentContainer.classList.add('student-container');
             studentContainer.innerHTML = `<h3>Student ${i}</h3>`;
         
             for (let j = 1; j <= 6; j++) {
               let gradeInput = document.createElement('input');
               gradeInput.type = 'number';
               gradeInput.placeholder = `Enter grade for subject ${j}`;
               gradeInput.id = `grade_${i}_${j}`;
               studentContainer.appendChild(gradeInput);
             }
         
             inputFieldsDiv.appendChild(studentContainer);
           }
         
           let outputDiv = document.getElementById('output');
           outputDiv.innerHTML = '<button onclick="calculateGPA()">Calculate GPA</button>';
         }
         
         function calculateGPA() {
         let numStudentsInput = document.getElementById('numStudents');
         let numStudents = parseInt(numStudentsInput.value);
         let calculationMethod = document.getElementById('calculationMethod').value;
         
         let outputDiv = document.getElementById('output');
         let errors = [];
         
         outputDiv.innerHTML = ''; // Clear previous output
         
         for (let i = 1; i <= numStudents; i++) {
         let studentGrades = [];
         
         for (let j = 1; j <= 6; j++) {
           let gradeInput = document.getElementById(`grade_${i}_${j}`);
           let grade = parseFloat(gradeInput.value);
         
           if (isNaN(grade) || grade < 0 || grade > 100) {
             errors.push(`Student ${i}, Subject ${j}: Invalid grade! Please enter a valid number between 0 and 100.`);
           }
         
           studentGrades.push(grade);
         }
         
         if (!errors.length) {
           let result;
           if (calculationMethod === 'if') {
             result = calculateGPAWithIf(studentGrades);
           } else if (calculationMethod === 'switch') {
             result = calculateGPAWithSwitch(studentGrades);
           }
         
           outputDiv.innerHTML += `<p>Student ${i}: GPA: ${result.gpa}, Grade: ${result.grade}</p>`;
         }
         }
         
         if (errors.length) {
         alert(errors.join('\n'));
         }
 }