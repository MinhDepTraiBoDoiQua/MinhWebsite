document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    var elements = [...container.getElementsByClassName("element")];
    var previousBtn = document.getElementById("previous");
    var nextBtn = document.getElementById("next");
    var currentPage = 0;
    var elementsPerPage = 6;
    var emptyMessage = document.getElementById("empty-message");

    if (elements.length === 0) {
        emptyMessage.style.display = "block";
        previousBtn.style.display = "none";
        nextBtn.style.display = "none";
        return;
    } else {
        emptyMessage.style.display = "none";
    }

    for (var i = 0; i < elementsPerPage; i++) {
        elements[i].classList.add("active");
    }

    if (previousBtn) {
        previousBtn.onclick = function() {
            if (currentPage > 0) {
                currentPage--;
                updatePagination();
            }
        };
    }

    if (nextBtn) {
        nextBtn.onclick = function() {
            if (currentPage < Math.ceil(elements.length / elementsPerPage) - 1) {
                currentPage++;
                updatePagination();
            }
        };
    }

    function updatePagination() {
        elements.forEach((element) => element.classList.remove("active"));
        var end = (currentPage + 1) * elementsPerPage;
        var start = currentPage * elementsPerPage;
        // if there are less elements than the maximum per page, only display the elements that are there
        if (end > elements.length) {
            end = elements.length;
        }
        for (var i = start; i < end; i++) {
            if (elements[i]) elements[i].classList.add("active");
        }
        // check and set the state of the "previous" and "next" buttons
        if (currentPage === 0) {
            previousBtn.style.display = "none";
        } else {
            previousBtn.style.display = "block";
        }
        if (end === elements.length) {
            nextBtn.style.display = "none";
        } else {
            nextBtn.style.display = "block";
        }
    }
});





