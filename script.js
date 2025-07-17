function unlockApp() {
  document.getElementById('lockScreen').style.display = 'none';
  document.getElementById('mainApp').style.display = 'block';
}

function showPage(pageId) {
  const pages = ['letterPage', 'galleryPage', 'musicPage'];
  pages.forEach(id => {
    document.getElementById(id).style.display = (id === pageId + 'Page') ? 'block' : 'none';
  });
}
