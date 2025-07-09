beforeEach(() => {
    document.body.innerHTML = `
      <nav><button data-page="dashboard">Dashboard</button></nav>
      <select id="locationFilter">
        <option value="Nairobi">Nairobi</option>
        <option value="Eldoret">Eldoret</option>
      </select>
      <table>
        <tbody id="requests-tbody">
          <tr><td>1</td><td>User A</td><td>Nairobi</td></tr>
          <tr><td>2</td><td>User B</td><td>Nairobi</td></tr>
        </tbody>
      </table>
      <div id="filter-count">2 Nairobi requests</div>
    `;
  });
  
  test('Filter shows Nairobi instead of Eldoret (bug)', () => {
    document.querySelector('[data-page="dashboard"]').click();
    document.getElementById('locationFilter').value = 'Eldoret';
    document.getElementById('locationFilter').dispatchEvent(new Event('change'));
  
    const rows = document.querySelectorAll('#requests-tbody tr');
    let allEldoret = true;
  
    rows.forEach(row => {
      const location = row.cells[2].innerText;
      if (location !== 'Eldoret') {
        allEldoret = false;
      }
    });
  
    expect(allEldoret).toBe(false);
    expect(document.getElementById('filter-count').innerText).toContain('Eldoret');
  });
  