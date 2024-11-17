document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.getElementById("mySidenav");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");

    openBtn.onclick = function() {
        sidenav.style.width = "250px";
        openBtn.classList.add("active");
    };

    closeBtn.onclick = function() {
        sidenav.style.width = "0";
        openBtn.classList.remove("active");
    };

    document.querySelectorAll('.sidenav a').forEach(function(link) {
        link.onclick = function() {
            sidenav.style.width = "0";
            openBtn.classList.remove("active");
        };
    });

    // Scroll to top button
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var rootElement = document.documentElement;

    function handleScroll() {
        // Show button after scrolling down 100px
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.1) {
            // Show button
            scrollToTopBtn.classList.add("showBtn");
        } else {
            // Hide button
            scrollToTopBtn.classList.remove("showBtn");
        }
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);

    // See more / see less functionality
    var seeMoreBtn = document.getElementById('seeMoreBtn');
    var seeLessBtn = document.getElementById('seeLessBtn');
    var shortBio = document.getElementById('shortBio');
    var fullBio = document.getElementById('fullBio');

    seeMoreBtn.addEventListener('click', function() {
        shortBio.style.display = 'none';
        fullBio.style.display = 'block';
    });

    seeLessBtn.addEventListener('click', function() {
        shortBio.style.display = 'block';
        fullBio.style.display = 'none';
    });

    // Add data-title attribute to image-container divs
    document.querySelectorAll('.image-container').forEach(function(container) {
        var img = container.querySelector('img');
        var title = container.closest('div').querySelector('h3').innerText;
        container.setAttribute('data-title', title);
    });
});
