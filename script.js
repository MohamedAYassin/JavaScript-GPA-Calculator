 function calculateGPA() {
     const studentName = document.getElementById('studentName').value;
     for (let i = 0; i < 6; i++) {
         const grade = parseFloat(document.getElementById(`subject${i + 1}`).value);
         if (isNaN(grade) || grade < 0 || grade > 100) {
             alert(`Please enter a valid grade for Subject ${i + 1}. Grades should be between 0 and 100.`);
             return;
         }
     }

     const grades = [];

     for (let i = 0; i < 6; i++) {
         const grade = parseFloat(document.getElementById(`subject${i + 1}`).value);
         grades.push(grade);
     }

     let totalPointsIf = 0;
     let totalPointsSwitch = 0;

     for (let i = 0; i < grades.length; i++) {
         if (grades[i] >= 90) {
             totalPointsIf += 4.0;
         } else if (grades[i] >= 80) {
             totalPointsIf += 3.0;
         } else if (grades[i] >= 70) {
             totalPointsIf += 2.0;
         } else if (grades[i] >= 60) {
             totalPointsIf += 1.0;
         }

         switch (true) {
             case grades[i] >= 90:
                 totalPointsSwitch += 4.0;
                 break;
             case grades[i] >= 80:
                 totalPointsSwitch += 3.0;
                 break;
             case grades[i] >= 70:
                 totalPointsSwitch += 2.0;
                 break;
             case grades[i] >= 60:
                 totalPointsSwitch += 1.0;
                 break;
         }
     }

     const gpaWithIf = totalPointsIf / grades.length;
     const gpaWithSwitch = totalPointsSwitch / grades.length;

     document.getElementById('resultStudentName').textContent = studentName;
     document.getElementById('resultGPAIf').textContent = gpaWithIf.toFixed(2);
     document.getElementById('resultGPASwitch').textContent = gpaWithSwitch.toFixed(2);

     document.getElementById('results').style.display = 'block';
 }

 const gradeFields = document.getElementById('gradeFields');
 for (let i = 0; i < 6; i++) {
     const fieldset = document.createElement('fieldset');
     const legend = document.createElement('legend');
     legend.textContent = `Subject ${i + 1} Grade:`;
     const label = document.createElement('label');
     label.setAttribute('for', `subject${i + 1}`);
     const input = document.createElement('input');
     input.setAttribute('type', 'number');
     input.setAttribute('id', `subject${i + 1}`);
     input.setAttribute('min', '0');
     input.setAttribute('max', '100');
     input.setAttribute('required', '');
     fieldset.appendChild(legend);
     fieldset.appendChild(label);
     fieldset.appendChild(input);
     gradeFields.appendChild(fieldset);
 }