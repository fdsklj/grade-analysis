const {
  grades,
  calculateAverage,
  findTopStudent,
  filterFailed,
  addLetterGrade
} = require("./main");

console.log("=== Анализ успеваемости ===");
console.log("1. Средний балл группы:", calculateAverage(grades).toFixed(2));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников:", filterFailed(grades, 60));
console.log("4. Итоговый массив с оценками:");
console.log(addLetterGrade(grades));