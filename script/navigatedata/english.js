function loadPage() {
    const box = document.getElementById('english');
  
    fetch('Language/English/english.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage();
