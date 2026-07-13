const vehicleSearch = document.getElementById("vehicleSearch");

vehicleSearch.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const query = vehicleSearch.value.trim();
        
        if (query !== "") {
            const targetUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
            window.open(targetUrl, '_blank');
        }
    }
});
