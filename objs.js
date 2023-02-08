let fname = document.getElementById("fname");
let sname = document.getElementById("sname");

let firstname = "Kobina Ebo",
  surname = "Quayson",
  age = 87,
  tech = "Computer",
  dob = "";
//where = "";

let eduCredit = () => {
  student.fullname();
};

const student = {
  surname: surname,
  firstname: firstname,
  dob: dob,
  age: age,
  tech: tech,

  education: {
    basic: function (where, when, cert) {
      return [where, when, cert];
    },
    secondary: function (where, when, cert) {
      return [where, when, cert];
    },

    tertiary: function (where, when, cert) {
      return [where, when, cert];
    },
  },

  fullname: function () {
    document.getElementById("result").innerText =
      fname.value + " " + sname.value;
  },
};

//console.log(student.education.basic("Oman JHS", 2014, "BECE"));
console.log(eduCredit());
