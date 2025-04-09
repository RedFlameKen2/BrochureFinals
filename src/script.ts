function validate_string(field_name: string): boolean{
    let value = "";
    const input_field = document.forms["registration_form"][field_name];
    if(input_field != null)
        value = input_field.value;
    return !(value === "");
}

function validate_checkbox(box_name: string): boolean{
    let value = false;
    const checkbox = document.forms["registration_form"][box_name];
    if(checkbox != null)
        value = checkbox.checked;
    return value;
}

function submit_form(form_name: string){
    document[form_name].submit();
}

function write_warning(label_name: string, warning: string, valid: boolean){
    const label = document.getElementsByName(label_name);
    if(label != null){
        if(valid)
            label[0].innerHTML = " *";
        else
            label[0].innerHTML = " " + warning;
    }
}

function submit_event(){
    let first_name_valid = validate_string("first_name_field");
    let last_name_valid = validate_string("last_name_field");
    let email_valid = validate_string("email_field");
    let agreed = validate_checkbox("agree_box");

    write_warning("first_name_label", "Do not leave empty", first_name_valid);
    write_warning("last_name_label", "Do not leave empty", last_name_valid);
    write_warning("email_label", "Do not leave empty", email_valid);
    write_warning("agree_label", "You must agree", agreed);

    if(first_name_valid && last_name_valid && email_valid && agreed){
        submit_form("registration_form");
    }
}

function next(){
    if(cur_slide >= 2 || animating)
        return
    prev_slide = cur_slide;
    cur_slide++;
    animating = true;
}

function back(){
    if(cur_slide <= 0 || animating)
        return
    prev_slide = cur_slide;
    cur_slide--;
    animating = true;
}

function set_pos(slide: number){
    if(slide < 0 || slide > 2)
        return
    prev_slide = cur_slide
    cur_slide = slide;
    animating = true;
}
