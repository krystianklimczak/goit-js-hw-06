const form = document.querySelector('.login-form');
// console.log(form);
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill all the fields!');
  } else {
    const inputData = {
      email: email.value,
      password: password.value,
    };
    console.log(inputData);
    form.reset();
  }
}
