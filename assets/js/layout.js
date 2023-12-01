
// Fetch and insert header content
fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header-content').innerHTML = html;
    });

// Fetch and insert banner content
fetch('banner.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('banner-content').innerHTML = html;
    });

// Fetch and insert footer content
fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer-content').innerHTML = html;
    });