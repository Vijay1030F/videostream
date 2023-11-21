function loadPage() {
    const box = document.getElementById('dance');
  
    fetch('toprated/Dance.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage();
