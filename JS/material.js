let currPage = 0;


const pages = ["material1.html", "material2.html", "material3.html", "material4.html", "CongratulationPage.html"];




function nextPage(page) {
    currPage = page;
    console.log(currPage);
    if (currPage < pages.length - 1) {
        currPage += 1;

        window.location.href = pages[currPage];

    }
}

function prevPage(page) {
    currPage = page;
    console.log(currPage);
    if (currPage > 0) {
        currPage -= 1;

        window.location.href = pages[currPage];

    }
}
