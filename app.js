

let valueDisplays = document.querySelectorAll(".count");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


function validateForm(form) {
  const name = form.name.value;
  const email = form.email.value;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (!name || !email) {
    alert('Please fill out all required fields');
    return false;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  return true;
}

function submitForm() {
  const form = document.getElementById('myForm');
  if (!validateForm(form)) {
    return;
  }
  form.submit();
}




