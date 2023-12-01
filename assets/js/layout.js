
// Fetch and insert header content
fetch('header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('header-content').innerHTML = html;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

// Fetch and insert banner content
fetch('banner.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('banner-content').innerHTML = html;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });


// Fetch and insert footer content

fetch('footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('footer-content').innerHTML = html;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
