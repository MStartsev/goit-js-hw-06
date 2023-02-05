const examForm = ({ form }) => {
  const formEl = document.querySelector(form);

  formEl.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
      return alert('Please fill in all the fields!');
    }

    console.table({ email: email.value, password: password.value });
    formEl.reset();
  }
};

examForm({ form: '.login-form' });
