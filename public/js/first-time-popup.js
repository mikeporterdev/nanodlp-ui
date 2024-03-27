const FIRST_TIME_LOCAL_STORAGE_KEY = "first_time_occurred"

function check_first_time_status() {
    let introOccurred = localStorage.getItem(FIRST_TIME_LOCAL_STORAGE_KEY);

    if (!introOccurred) {

        first_time_popup()
        localStorage.setItem(FIRST_TIME_LOCAL_STORAGE_KEY, true)
    }
}


function first_time_popup() {
    $('#firstTimeModal').modal('show')
}

$(function(){
    check_first_time_status();
});
