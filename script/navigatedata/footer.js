function loadPage() {
    const box = document.getElementById('footer');
  
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage();
