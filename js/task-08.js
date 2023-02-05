const formEl = document.querySelector('.login-form');

const examForm = formEl => {
  formEl.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;

    if (!(email.value.trim() || password.value)) {
      return alert('Please fill in all the fields!');
    }

    console.table({ email: email.value, password: password.value });
    formEl.reset();
  }
};

examForm(formEl);
