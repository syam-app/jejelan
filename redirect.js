    function checkDomain() {
        const currentDomain = window.location.hostname;
        if (currentDomain !== "bharatainternasional.store") {
            setTimeout(() => {
                window.location.href = "https://bharatainternasional.store";
            }, 5000);
        }
    }
    window.onload = checkDomain;
