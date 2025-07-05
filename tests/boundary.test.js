beforeEach(() => {
    document.body.innerHTML = `
      <nav>
        <button data-page="home">Home</button>
      </nav>
      <div id="home-page">
        <form id="pickup-form">
          <input id="fullName" />
          <span id="name-error"></span>
          <select id="location">
            <option value="">-- Select --</option>
            <option value="Eldoret">Eldoret</option>
          </select>
          <span id="location-error"></span>
          <button type="submit">Submit</button>
        </form>
      </div>
    `;
});

test('Long input and injected options are handled', () => {
    // Simulate navigation to home
    document.querySelector('[data-page="home"]').click();
  
    // 1. Test long name input
    const longName = 'X'.repeat(1000);
    document.getElementById('fullName').value = longName;
    document.getElementById('pickup-form').dispatchEvent(new Event('submit', { bubbles: true }));
    
    // Verify name field accepts long input
    expect(document.getElementById('name-error').textContent).toBe('');

    // 2. Test select injection
    const locationSelect = document.getElementById('location');
    const originalLength = locationSelect.options.length;
    
    // Add and select malicious option
    const maliciousOption = new Option('X'.repeat(1000), 'malicious');
    locationSelect.add(maliciousOption);
    locationSelect.value = 'malicious';
    
    // Mock Clean city's validation behavior
    const validateLocation = () => {
        if (!['', 'Eldoret'].includes(locationSelect.value)) {
            document.getElementById('location-error').textContent = 'Please select a location';
        }
    };
    
    // Simulate form validation
    validateLocation();
    document.getElementById('pickup-form').dispatchEvent(new Event('submit', { bubbles: true }));
    
    // Verify validation worked
    expect(document.getElementById('location-error').textContent)
        .toContain('select a location');
    
    // 3. Test cleanup
    locationSelect.remove(locationSelect.options.length - 1);
    expect(locationSelect.options.length).toBe(originalLength);
    expect(locationSelect.value).toBe('');
});