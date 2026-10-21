document.querySelectorAll('.checkboxes').forEach(box => {
  box.addEventListener('change', () => {
    const url = box.dataset.url
    if (box.checked && url) {
      window.location.href = url
    }
  })
})