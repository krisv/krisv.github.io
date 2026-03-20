// Common template functions for blog pages

function loadHeader() {
    return `
    <header>
        <div class="header-content">
            <a href="/" class="logo">Kris Verlaenen</a>
            <nav>
                <div class="dropdown">
                    <div class="dropdown-toggle" onclick="toggleDropdown('blogsMenu')">
                        Blogs
                    </div>
                    <div class="dropdown-content" id="blogsMenu">
                        <a href="part-1-what-is-agentic-workforce.html">Agentic Workforce</a>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="dropdown-toggle" onclick="toggleDropdown('workforceMenu')">
                        My Agentic Workforce
                        <span class="lock-icon">🔒</span>
                    </div>
                    <div class="dropdown-content" id="workforceMenu">
                        <a href="part-1-what-is-agentic-workforce.html">Learn More</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    `;
}

function loadBlogNav(activePart) {
    const parts = [
        { id: 1, title: "Part 1: What is Agentic Workforce", url: "part-1-what-is-agentic-workforce.html" },
        { id: 2, title: "Part 2: Platform Challenges", url: "part-2-platform-challenges.html" },
        { id: 3, title: "Part 3: Open Platform Principles", url: "part-3-open-platform-principles.html" }
    ];

    const links = parts.map(part =>
        `<a href="${part.url}" class="${part.id === activePart ? 'active' : ''}">${part.title}</a>`
    ).join('\n                ');

    return `
    <section class="blog-nav">
        <div class="container">
            <div class="blog-nav-title">Agentic Workforce Series</div>
            <div class="blog-nav-links">
                ${links}
            </div>
        </div>
    </section>
    `;
}

function loadFooter() {
    return `
    <footer>
        <div class="container">
            <div class="social-links">
                <a href="https://www.linkedin.com/in/krisverlaenen/" target="_blank">LinkedIn</a>
                <a href="https://github.com/krisv" target="_blank">GitHub</a>
            </div>
            <p>&copy; 2026 Kris Verlaenen. Built with curiosity and code.</p>
        </div>
    </footer>
    `;
}

function toggleDropdown(id) {
    const menu = document.getElementById(id);
    const allMenus = document.getElementsByClassName("dropdown-content");

    // Close all other menus
    for (let i = 0; i < allMenus.length; i++) {
        if (allMenus[i].id !== id) {
            allMenus[i].classList.remove("show");
        }
    }

    // Toggle the clicked menu
    menu.classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle') && !event.target.matches('.lock-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
}

// Initialize page
function initBlogPage(activePart) {
    // Insert header
    document.body.insertAdjacentHTML('afterbegin', loadHeader());

    // Insert blog navigation after header
    const header = document.querySelector('header');
    header.insertAdjacentHTML('afterend', loadBlogNav(activePart));

    // Append footer
    document.body.insertAdjacentHTML('beforeend', loadFooter());
}
