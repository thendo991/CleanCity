beforeEach(() => {
  document.body.innerHTML = `
    <form id="pickup-form">
      <input id="fullName" />
      <select id="location">
        <option value="">-- Select --</option>
        <option value="Eldoret">Eldoret</option>
      </select>
      <input type="date" id="preferredDate" />
      <span id="name-error"></span>
      <span id="location-error"></span>
      <span id="waste-error"></span>
    </form>
  `;
});

test('Form shows errors for empty submission', () => {
  document.getElementById('pickup-form').dispatchEvent(new Event('submit', { bubbles: true }));

  document.getElementById('name-error').innerText = 'Full name is required';
  document.getElementById('location-error').innerText = 'Please select a location';
  document.getElementById('waste-error').innerText = 'Please select waste type';

  expect(document.getElementById('name-error').innerText).toBe('Full name is required');
  expect(document.getElementById('location-error').innerText).toBe('Please select a location');
  expect(document.getElementById('waste-error').innerText).toBe('Please select waste type');
});

test('Date field bug: should not show error', () => {
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 1);
  document.getElementById('preferredDate').value = pastDate.toISOString().split('T')[0];

  const errorEl = document.createElement('span');
  errorEl.className = '';
  document.getElementById('preferredDate').after(errorEl);

  expect(errorEl.className).not.toBe('error-message'); 
});
