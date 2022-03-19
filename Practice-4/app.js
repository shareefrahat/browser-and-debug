//Checklist-2

const userBtn = document.getElementById("user-btn");

userBtn.addEventListener("click", function adding() {
  const value = prompt("Enter a number");
  if (value) {
    const parsedValue = parseFloat(value);
    const total = parsedValue + 200;
    if (isNaN(total)) {
      alert("Input value must be a number not a text");
      if (alert) {
        return adding();
      }
    } else {
      alert("Your Total amount is = " + total);
    }
  } else {
    alert("You have to enter a number to progress");
    if (alert) {
      return adding();
    }
  }
});

//Checklist-3

const locationBtn = document.getElementById("location-btn");

locationBtn.addEventListener("click", function () {
  const value = confirm("Do you want to see your current location?");
  if (value) {
    alert("your current location is " + window.location.href);
  } else if (!value) {
    alert("It's ok!");
  }
});
