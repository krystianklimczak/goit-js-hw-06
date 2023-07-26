const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  if (input.value.length >= parseInt(input.dataset.length)) {
    input.classList.add('valid');
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }
    return;
  }
  input.classList.add('invalid');
  if (input.classList.contains('valid')) {
    input.classList.remove('valid');
  }
});
