/* ### Transformar notas escolares
Crie um algoritmo que transforme as notas do sistema numério para sistema de notas em caracteres tipo A B C

* de 90 para cima -  A
* entre 80 - 89   -  B
* entre 70 - 79   -  C
* entre 60 - 69   -  D
* menor que 60    -  E
*/

let studentsGrade = 63;
let finalGrade;

const gradeA = studentsGrade >= 90;
const gradeB = studentsGrade < 90 && studentsGrade >= 80;
const gradeC = studentsGrade < 80 && studentsGrade >= 70;
const gradeD = studentsGrade < 70 && studentsGrade >= 60;

if (gradeA) {
    finalGrade = 'A';
    console.log('Congratulations! You got an ' + finalGrade);
} else if (gradeB) {
    finalGrade = 'B';
    console.log('Congratulations! You got a ' + finalGrade);
}else if (gradeC) {
    finalGrade = 'C';
    console.log('You got a ' + finalGrade);
}else if (gradeD) {
    finalGrade = 'D';
    console.log('Oh, bummer! You got a ' + finalGrade);
}else{
    finalGrade = 'F';
        console.log('You\' ve failed completely! You got a ' + finalGrade);
};