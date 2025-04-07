
function set_slide_display(intro: boolean, facility: boolean, news: boolean){
    const intro_fold = document.getElementById("intro_fold")
    const facility_fold = document.getElementById("facilities_fold")
    const news_fold = document.getElementById("news_fold")
    if(intro_fold != null && facility_fold != null && news_fold != null){
        intro_fold.style.display = (intro ? "initial" : "none")
        facility_fold.style.display = (facility ? "initial" : "none")
        news_fold.style.display = (news ? "initial" : "none")
    }
}

function render_slides(){
    switch(cur_slide){
        case 0:
            set_slide_display(true, false, false)
            break
        case 1:
            set_slide_display(false, true, false)
            break
        case 2:
            set_slide_display(false, false, true)
            break
        default:
            break
    }
}

function next(){
    if(cur_slide >= 2)
        return
    prev_slide = cur_slide
    cur_slide++
}

function back(){
    if(cur_slide <= 0)
        return
    prev_slide = cur_slide
    cur_slide--
}
