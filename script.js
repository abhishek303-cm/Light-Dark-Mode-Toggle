const toggleCheckbox = document.getElementById('toggle-checkbox');
const body = document.body;

toggleCheckbox.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});
