function loadPage() {
    const box = document.getElementById('marathi');
  
    fetch('Language/marathi/marathivid.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage();
