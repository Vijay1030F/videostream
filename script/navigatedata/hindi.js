function loadPage() {
    const box = document.getElementById('hindi');
  
    fetch('Language/hindi/hindi.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage();
