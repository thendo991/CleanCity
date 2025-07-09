beforeEach(() => {
    document.body.innerHTML = `
      <div data-page="awareness"></div>
      <div id="awareness-page">
        <img src="1.jpg" />
        <img src="2.jpg" alt="" />
        <img src="3.jpg" />
      </div>
    `;
  });
  
  test('images are missing alt attributes (known bug)', () => {
    document.querySelector('[data-page="awareness"]').click();
    const images = document.querySelectorAll('#awareness-page img');
    let missingAltCount = 0;
  
    images.forEach(img => {
      if (!img.alt || img.alt.trim() === '') {
        missingAltCount++;
      }
    });
  
    expect(missingAltCount).toBe(images.length);
  });
  