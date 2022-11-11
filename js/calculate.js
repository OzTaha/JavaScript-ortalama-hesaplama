const GRADE_VALUES = [
  {
    min: 0,
    max: 30,
    grade: "FF",
    message: "Kaldınız",
  },
  {
    min: 45,
    max: 54,
    grade: "DC",
    message: "Koşullu Geçtiniz",
  },
  {
    min: 55,
    max: 69,
    grade: "CC",
    message: "Geçtiniz",
  },
  {
    min: 70,
    max: 84,
    grade: "BB",
    message: "Geçtiniz",
  },
  {
    min: 85,
    max: 100,
    grade: "AA",
    message: "Geçtiniz",
  },
];

/**
 * Calculate the grade of the student
 * @param {Number} midterm Midterm grade
 * @param {Number} final Final grade
 * @returns {String} Grade of the student
 */
function calculate(midterm, final) {
  if (midterm < 0 || midterm > 100 || final < 0 || final > 100) {
    alert("Lütfen 0 ile 100 arasında bir değer giriniz.");
    return;
  }

  const average = midterm * 0.3 + final * 0.7;
  const grade = GRADE_VALUES.find(
    (grade) => average >= grade.min && average <= grade.max
  );

  return `Ortalama : ${average} = ${grade.grade} - ${grade.message}`;
}

/**
 * Display the grade of the student
 * @param {String} result Result of the calculation
 */
function showResult(result) {
  document.getElementById("result").innerHTML = result;
}

document.querySelector("#calculateForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const midterm = e.target.elements.midterm.value;
  const final = e.target.elements.final.value;

  const result = calculate(midterm, final);
  showResult(result);
});
