if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "light");
}

let toggle = document.querySelector("#toggle");
let body = document.querySelector("body");
let btn = document.querySelectorAll("button");
let svgPath = document.querySelectorAll("path");
let a = document.querySelectorAll("a");
let roundedLink = document.querySelectorAll(".link");
let line = document.querySelectorAll(".line");
let links = document.querySelector(".links");
let mode = localStorage.getItem("mode");

const lightMode = () => {
  body.classList.remove("dark");
  body.classList.add("light");
  localStorage.setItem("mode", "light");

  svgPath.forEach(function (val) {
    let svgColor = val.getAttribute("fill");
    let setColor = svgColor.replace("#fdfbf5", "rgb(25, 25, 25)");
    val.setAttribute("fill", setColor);
  });

  btn.forEach(function (val) {
    val.style.backgroundColor = "black";
    val.style.color = "#fdfbf5";
  });

  a.forEach(function (val) {
    val.style.color = "black";
  });

  roundedLink.forEach(function (val) {
    val.style.borderColor = "black";
  });

  line.forEach(function (val) {
    val.style.backgroundColor = "black";
  });

  roundedLink.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      val.style.backgroundColor = "black";
      let link = val.querySelector("a");
      if (link) link.style.color = "#fdfbf5";
    });

    val.addEventListener("mouseleave", function () {
      val.style.backgroundColor = "#fdfbf5";
      let link = val.querySelector("a");
      if (link) link.style.color = "black";
    });


    val.style.backgroundColor = "#fdfbf5";
    val.style.borderColor = "black";
    let link = val.querySelector("a");
    if (link) link.style.color = "black";
  });

  links.style.borderColor = "black";
  toggle.style.backgroundColor = "#fdfbf5";
  toggle.style.borderColor = "black";
  toggle.style.justifyContent = "flex-start";
};

const darkMode = () => {
  body.classList.remove("light");
  body.classList.add("dark");
  localStorage.setItem("mode", "dark");

  svgPath.forEach(function (val) {
    let svgColor = val.getAttribute("fill");
    let setColor = svgColor.replace("rgb(25, 25, 25)", "#fdfbf5");
    val.setAttribute("fill", setColor);
  });

  btn.forEach(function (val) {
    val.style.backgroundColor = "#fdfbf5";
    val.style.color = "black";
  });

  a.forEach(function (val) {
    val.style.color = "#fdfbf5";
  });

  roundedLink.forEach(function (val) {
    val.style.borderColor = "#fdfbf5";
  });

  line.forEach(function (val) {
    val.style.backgroundColor = "#fdfbf5";
  });

  roundedLink.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      val.style.backgroundColor = "#fdfbf5";
      let link = val.querySelector("a");
      if (link) link.style.color = "black";
    });

    val.addEventListener("mouseleave", function () {
      val.style.backgroundColor = "black";
      let link = val.querySelector("a");
      if (link) link.style.color = "#fdfbf5";
    });

    val.style.backgroundColor = "black";
    val.style.borderColor = "#fdfbf5";
    let link = val.querySelector("a");
    if (link) link.style.color = "#fdfbf5";
  });
  
  links.style.borderColor = "#fdfbf5";
  toggle.style.backgroundColor = "black";
  toggle.style.borderColor = "#fdfbf5";
  toggle.style.justifyContent = "flex-end";
};

//hovering effect

// roundedLink.forEach(function (val) {
//   val.addEventListener("mouseenter", function () {
//     if (body.classList.contains("light")) {
//       val.style.backgroundColor = "black";
//       let link = val.querySelector("a");
//       if (link) link.style.color = "#fdfbf5";
//     } else {
//       val.style.backgroundColor = "#fdfbf5";
//       let link = val.querySelector("a");
//       if (link) link.style.color = "black";
//     }
//   });

//   val.addEventListener("mouseleave", function () {
//     if (body.classList.contains("light")) {
//       val.style.backgroundColor = "#fdfbf5";
//       let link = val.querySelector("a");
//       if (link) link.style.color = "black";
//     } else {
//       val.style.backgroundColor = "black";
//       let link = val.querySelector("a");
//       if (link) link.style.color = "#fdfbf5";
//     }
//   });
// });

//when opening the website it checks the mode and call the function once to

if (mode === "dark") {
  darkMode();
} else {
  lightMode();
}

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    darkMode();
  } else {
    lightMode();
  }
});
