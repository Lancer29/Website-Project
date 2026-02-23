function toggleSection(toggleEl) {
    const body = toggleEl.nextElementSibling;
    const isOpen = body.classList.contains('open');

    toggleEl.classList.toggle('open', !isOpen);
    body.classList.toggle('open', !isOpen);
}