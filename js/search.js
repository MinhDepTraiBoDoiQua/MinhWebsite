function search() {
    if (document.querySelector("script[src='js/search.js']")) {
        // Find the script and css file to disable
        var pageCountJs = document.querySelector("script[src='js/pageCount.js']");
        var pageCountCss = document.querySelector("link[href='css/pageCount.css']");

        // Remove the script and css file from the DOM
        pageCountJs.parentNode.removeChild(pageCountJs);
        pageCountCss.parentNode.removeChild(pageCountCss);
    }

    var findNoti = document.getElementById("find-Noti");
    findNoti.style.display = "block";

    let input = document.getElementById('searchbar').value.trim().toLowerCase();
    let x = Array.from(document.getElementsByTagName("h6"));
    let filteredElements = x.filter(el => el.textContent.toLowerCase().includes(input));
    x.forEach(el => el.parentElement.parentElement.style.display = "none");
    filteredElements.forEach(el => el.parentElement.parentElement.style.display = "block");
    let noResults = document.getElementById("no-results");
    noResults.style.display = filteredElements.length ? "none" : "block";
}