function activateTab(item) {
    // Remove active class from all items
    const items = document.querySelectorAll('.nav-item');
    items.forEach(i => i.classList.remove('active'));

    // Add active class to clicked item
    item.classList.add('active');

    // Show content when 'Home' tab is clicked
    if (item.textContent === "Home") {
        document.getElementById("homeContent").style.display = "flex"; // Show the home content
    } else {
        document.getElementById("homeContent").style.display = "none"; // Hide home content for other tabs
    }
}

function refreshPage() {
    location.reload(); // Refresh the page when name is clicked
}
