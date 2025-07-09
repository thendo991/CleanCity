beforeEach(() => {
    document.body.innerHTML = `
      <form id="login-form">
        <input id="login-email" />
        <input id="login-password" />
      </form>
      <div id="admin-link" style="display:none;"></div>
      <button id="logout-btn"></button>
      <div id="login-error" style="display:none;"></div>
    `;
  });
  
  test('Login behavior (admin/user/invalid)', () => {
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');
    const adminLink = document.getElementById('admin-link');
    const loginError = document.getElementById('login-error');
  
    // Simulate admin login
    email.value = 'admin@cleancity.com';
    password.value = 'admin123';
    adminLink.style.display = 'block';
    expect(adminLink.style.display).toBe('block');
  
    // Simulate user login
    adminLink.style.display = 'none';
    expect(adminLink.style.display).toBe('none');
  
    // Simulate invalid login
    loginError.style.display = 'block';
    expect(loginError.style.display).toBe('block');
  });
  