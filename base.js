
function setupFlipbook() {
    const pageHeight = Math.min(600, $(window).height() * 0.95);
    const pageWidth = $(window).width() * 0.95;

    let display = "single";
    let height = pageHeight;
    let width = height * 3.5/4;

    if (width > pageWidth) {
        width = pageWidth;
        height = width * 4/3.5;
    } else if (width * 2 < pageWidth) {
        width = width * 2;
        display = "double";
    } if ((pageWidth - width) > 200 && ((width / 2) * 4/3.5 < pageHeight)) {
        width = pageWidth;
        height = (width / 2) * 4/3.5;
        display = "double";
    }

    let singlePageWidth = width / 2;
    if (display === "single") {
        singlePageWidth = width;
        $(".extra").remove();
    }

    if (singlePageWidth < 300) {
        document.body.style.fontSize = "10px";
    } else if (singlePageWidth < 325) {
        document.body.style.fontSize = "10px";
    } else if (singlePageWidth < 350) {
        document.body.style.fontSize = "11px";
    } else if (singlePageWidth < 375) {
        document.body.style.fontSize = "12px";
    } else if (singlePageWidth < 400) {
        document.body.style.fontSize = "13px";
    } else if (singlePageWidth < 425) {
        document.body.style.fontSize = "15px";
    } else if (singlePageWidth < 450) {
        document.body.style.fontSize = "15px";
    } else if (singlePageWidth < 475) {
        document.body.style.fontSize = "16px";
    } else if (singlePageWidth < 500) {
        document.body.style.fontSize = "16px";
    } else if (singlePageWidth < 525) {
        document.body.style.fontSize = "16px";
    } else {
        document.body.style.fontSize = "16px";
    }

    $(".flipbook").turn({
        display,
        width,
        height
    });

    $(window).bind('keydown', function(e) {
        if (e.keyCode==37)
            $('.flipbook').turn('previous');
        else if (e.keyCode==39)
            $('.flipbook').turn('next');
    });
}