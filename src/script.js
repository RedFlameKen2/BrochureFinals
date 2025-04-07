var cur_slide = 0;
function set_slide_display(intro, facility, news) {
    var intro_fold = document.getElementById("intro_fold");
    var facility_fold = document.getElementById("facilities_fold");
    var news_fold = document.getElementById("news_fold");
    if (intro_fold != null && facility_fold != null && news_fold != null) {
        intro_fold.style.display = (intro ? "initial" : "none");
        facility_fold.style.display = (facility ? "initial" : "none");
        news_fold.style.display = (news ? "initial" : "none");
    }
}
function render() {
    switch (cur_slide) {
        case 0:
            set_slide_display(true, false, false);
            break;
        case 1:
            set_slide_display(false, true, false);
            break;
        case 2:
            set_slide_display(false, false, true);
            break;
        default:
            break;
    }
}
function next() {
    if (cur_slide >= 2)
        return;
    cur_slide++;
    render();
}
function back() {
    if (cur_slide <= 0)
        return;
    cur_slide--;
    render();
}
