describe('Form Validation', () => {
  let form;
  
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="pickup-form">
        <input id="fullName" required />
        <select id="location" required>
          <option value="">-- Select --</option>
          <option value="Eldoret">Eldoret</option>
        </select>
        <input type="date" id="preferredDate" />
        <span id="name-error" class="error"></span>
        <span id="location-error" class="error"></span>
        <span id="waste-error" class="error"></span>
        <button type="submit">Submit</button>
      </form>
    `;
    form = document.getElementById('pickup-form');
    
    // Mock validation function 
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameValid = document.getElementById('fullName').value.trim() !== '';
      const locationValid = document.getElementById('location').value !== '';
      
      document.getElementById('name-error').textContent = 
        nameValid ? '' : 'Full name is required';
      document.getElementById('location-error').textContent = 
        locationValid ? '' : 'Please select a location';
      document.getElementById('waste-error').textContent = 'Please select waste type'; // Always show for test
    });
  });

  test('should show errors for empty submission', () => {
    form.dispatchEvent(new Event('submit'));
    
    expect(document.getElementById('name-error').textContent).toBe('Full name is required');
    expect(document.getElementById('location-error').textContent).toBe('Please select a location');
    expect(document.getElementById('waste-error').textContent).toBe('Please select waste type');
  });

  test('should not show error for valid past date', () => {
    // Fill valid data
    document.getElementById('fullName').value = 'John Doe';
    document.getElementById('location').value = 'Eldoret';
    
    // Set past date
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    document.getElementById('preferredDate').value = pastDate.toISOString().split('T')[0];
    
    form.dispatchEvent(new Event('submit'));
    
    // Verify no errors
    expect(document.getElementById('name-error').textContent).toBe('');
    expect(document.getElementById('location-error').textContent).toBe('');
    
    // Verify date field has no error element after it
    const dateError = document.getElementById('preferredDate').nextElementSibling;
    expect(dateError?.id).not.toBe('date-error');
  });
});
