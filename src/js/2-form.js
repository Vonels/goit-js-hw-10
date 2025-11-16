const form = document.querySelector('.feedback-form');
const defKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};
const savedData = localStorage.getItem(defKey);
if (savedData) {
  formData = JSON.parse(savedData);

  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(defKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.email.value.trim() || !form.message.value.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  form.reset();
  localStorage.removeItem(defKey);
  formData = { email: '', message: '' };
});
