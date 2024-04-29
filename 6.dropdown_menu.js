const options = ["Javascript", "Java", "Python", "C++"];
const container = document.querySelector(".container");
const heading = document.createElement("h2");
heading.innerText = "Which is your favorite language";
// const renderedText = htmlElement.innerText;
const span = document.createElement("span");
const select = document.createElement("select");
options.map((data) => {
  const option = document.createElement("option");
  option.innerText = data;
  option.value = data;
  select.appendChild(option);
});
span.appendChild(select);
heading.appendChild(span);
container.appendChild(heading);
