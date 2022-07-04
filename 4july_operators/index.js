let para = document.getElementsByTagName("p");
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let result = document.getElementById("result");

function calculateMyResult() {
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);

  let op = operator.value;

  if (op === "/" && num2 == 0) {
    // alert("You cannot perform this operation!!!!!!!!!!!!");
    result.innerText = "You cannot perform this operation!";
    return;
  }

  switch (op) {
    case "+":
      result.innerText = "Ans = " + (num1 + num2);
      break;
    case "-":
      result.innerText = "Ans = " + (num1 - num2);
      break;
    case "*":
      result.innerText = "Ans = " + num1 * num2;
      break;
    case "/":
      result.innerText = "Ans = " + num1 / num2;
      break;
    default:
      break;
  }
}

function changeText() {
  para[0].innerText = "Bye";
  para[1].innerText = "Good Bye";
  para[2].innerText = "AccioJobs";
  para[3].innerText = "Cool";
  para[4].innerText = "Last para";

  para[4].style.color = "red";
}
