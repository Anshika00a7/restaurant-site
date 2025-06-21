function filterItems(category) {
  const items = document.querySelectorAll('.starter-card');
  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      item.classList.contains(category) ? 
        item.style.display = 'block' : 
        item.style.display = 'none';
    }
  });
}
