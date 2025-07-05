beforeEach(() => {
    document.body.innerHTML = `
      <div id="user-links" style="display:none;"></div>
      <div id="auth-links" style="display:block;"></div>
      <div id="admin-link" style="display:none;"></div>
      <div data-page="admin"></div>
      <select id="requestSelect">
        <option value="1">Request 1</option>
      </select>
      <select id="statusSelect">
        <option value="Scheduled">Scheduled</option>
      </select>
      <button id="updateStatusBtn"></button>
      <table><tbody id="admin-tbody">
        <tr><td></td><td></td><td></td><td></td><td></td><td>Pending</td></tr>
      </tbody></table>
    `;
    localStorage.setItem('pickupRequests', JSON.stringify([{ id: '1', status: 'Scheduled' }]));
  });
  
  test('Admin status update UI doesn’t reflect localStorage change (bug)', () => {
    localStorage.setItem('currentUser', JSON.stringify({
      email: 'admin@cleancity.com',
      isAdmin: true
    }));
  
    document.getElementById('user-links').style.display = 'block';
    document.getElementById('auth-links').style.display = 'none';
    document.getElementById('admin-link').style.display = 'block';
  
    document.querySelector('[data-page="admin"]').click();
    const requestSelect = document.getElementById('requestSelect');
    requestSelect.value = '1';
    requestSelect.dispatchEvent(new Event('change'));
  
    document.getElementById('statusSelect').value = 'Scheduled';
    document.getElementById('updateStatusBtn').click();
  
    const updatedRow = document.querySelector('#admin-tbody tr:first-child');
    expect(updatedRow.cells[5].innerText).not.toBe('Scheduled'); 
  
    const updatedRequest = JSON.parse(localStorage.getItem('pickupRequests')).find(r => r.id === '1');
    expect(updatedRequest.status).toBe('Scheduled'); 
  });
  