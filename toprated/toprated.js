function loadPage() {
    const box = document.getElementById('toprated');
  
    fetch('toprated/toprated.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage();
