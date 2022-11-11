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

function calculate() {
  const midterm = Number(document.getElementById("vize").value);
  const final = Number(document.getElementById("final").value);

  if (midterm < 0 || midterm > 100 || final < 0 || final > 100) {
    alert("Lütfen 0 ile 100 arasında bir değer giriniz.");
    return;
  }

  const average = midterm * 0.3 + final * 0.7;
  const grade = GRADE_VALUES.find(
    (grade) => average >= grade.min && average <= grade.max
  );

  document.getElementById(
    "sonuc"
  ).innerHTML = `Ortalama : ${average} = ${grade.grade} - ${grade.message}`;
}

const calculateButton = document.querySelector("#hesapla");
calculateButton.addEventListener("click", calculate);
