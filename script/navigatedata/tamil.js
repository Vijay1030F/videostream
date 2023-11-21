function loadPage() {
    const box = document.getElementById('Tamil');
  
    fetch('Language/tamil/tamil.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage();

  