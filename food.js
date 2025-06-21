function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  const buttons = document.querySelectorAll('.filter-btn');

  // Highlight active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
