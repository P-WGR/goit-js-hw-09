const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
form.elements.email.value = savedState.email ?? '';
form.elements.message.value = savedState.message ?? '';

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  const state = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
  state[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(state));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const { email, message } = form.elements;
  const trimmedEmail = email.value.trim();
  const trimmedMessage = message.value.trim();

  if (trimmedEmail && trimmedMessage) {
    console.log({ email: trimmedEmail, message: trimmedMessage });
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill in both email and message fields.');
  }
});
