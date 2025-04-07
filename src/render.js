var frame = 0;
var animating = false;
var prev_slide = 0;
var cur_slide = 0;
var brochure_pos = 0;
function update() {
    if (animating) {
        move_brochure();
    }
}
function render() {
    if (animating) {
        render_brochure();
    }
}
function run() {
    if (frame >= 60) {
        frame = 0;
    }
    update();
    render();
    frame++;
    window.requestAnimationFrame(run);
}
window.requestAnimationFrame(run);
function render_brochure() {
    var brochure = document.getElementById("brochure");
    if (brochure != null) {
        brochure.style.transform = "translateX(" + brochure_pos + "vw)";
    }
}
// TODO: when the slide step is greater than the distance to target_pos, use
// that distance instead
function move_brochure() {
    var target_pos = (cur_slide * FOLD_WIDTH) * -1;
    if (brochure_pos != target_pos) {
        var direction = get_slide_diretion();
        if (direction == Direction.LEFT) {
            if (brochure_pos >= target_pos)
                brochure_pos = target_pos;
            else
                brochure_pos += SLIDE_STEP;
        }
        else if (direction == Direction.RIGHT) {
            if (brochure_pos <= target_pos)
                brochure_pos = target_pos;
            else
                brochure_pos -= SLIDE_STEP;
        }
    }
    else {
        animating = false;
    }
}
function get_slide_diretion() {
    switch (prev_slide) {
        case 0:
            return Direction.RIGHT;
        case 1:
            if (cur_slide == 0)
                return Direction.LEFT;
            else if (cur_slide == 2)
                return Direction.RIGHT;
        case 2:
            return Direction.LEFT;
        default:
            return Direction.RIGHT;
    }
}
function slide_folds() {
    switch (cur_slide) {
        case 0:
            to_info_fold();
            break;
        case 1:
            to_facilities_fold();
            break;
        case 2:
            to_news_fold();
            break;
    }
}
function to_info_fold() {
    var brochure = document.getElementById("brochure");
    if (brochure != null) {
        brochure.style.transform = "translateX(0vw)";
    }
}
function to_news_fold() {
    var brochure = document.getElementById("brochure");
    if (brochure != null) {
        brochure.style.transform = "translateX(-160vw)";
    }
}
function to_facilities_fold() {
    var brochure = document.getElementById("brochure");
    if (brochure != null) {
        brochure.style.transform = "translateX(-80vw)";
    }
}
