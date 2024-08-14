
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




