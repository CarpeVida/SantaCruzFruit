const formEl = document.getElementById('contact-form');
const noteEl = document.getElementById('contact-note');

if (formEl && noteEl) {
  formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const recipient = (formEl.dataset.recipient || '').trim();

    if (!recipient || recipient === 'your-email@example.com') {
      noteEl.textContent =
        'Contact email is not configured yet. Update the form recipient to enable inquiries.';
      noteEl.classList.add('note-error');
      return;
    }

    const formData = new FormData(formEl);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`Santa Cruz Fruit inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    noteEl.textContent = 'Opening your default mail app now.';
    noteEl.classList.remove('note-error');

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
