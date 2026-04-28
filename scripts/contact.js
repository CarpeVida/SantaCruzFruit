const formEl = document.getElementById('contact-form');
const noteEl = document.getElementById('contact-note');
const submitEl = document.getElementById('contact-submit');
const recipientParts = ['danielschmelter', 'gmail', 'com'];

const formAction = recipientParts.reduce((address, part, index) => {
  if (index === 0) {
    return part;
  }

  if (index === 1) {
    return `${address}@${part}`;
  }

  return `${address}.${part}`;
}, '');

if (formEl && noteEl && submitEl) {
  formEl.action = `https://formsubmit.co/ajax/${formAction}`;

  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitEl.disabled = true;
    noteEl.classList.remove('note-error');
    noteEl.textContent = 'Sending inquiry...';

    try {
      const response = await fetch(formEl.action, {
        method: formEl.method,
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(formEl),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      formEl.reset();
      noteEl.textContent = 'Inquiry sent. I will follow up soon.';
    } catch (error) {
      noteEl.classList.add('note-error');
      noteEl.textContent =
        'Inquiry could not be sent right now. Please try again in a moment.';
    } finally {
      submitEl.disabled = false;
    }
  });
}
