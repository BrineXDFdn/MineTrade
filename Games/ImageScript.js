const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const downloadLink = document.getElementById('download-link');

function openPopup(src) {
  popup.style.display = 'flex';
  popupImg.src = src;
  downloadLink.onclick = () => forceDownload(src);
}

function closePopup() {
  popup.style.display = 'none';
  popupImg.src = '';
}

function forceDownload(src) {
  const link = document.createElement('a');
  link.href = src;
  link.download = src.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});


