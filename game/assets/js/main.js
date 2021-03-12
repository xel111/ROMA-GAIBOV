let game = {
    game: []
}
let panel = 'start';
let nav = () => {
    document.onclick = (e) => {

        e.preventDefault();
        switch (e.path[0].id) {
            case "startGame":
                go('game', 'd-block');
                break;
            case "restart":
                go('game', 'd-block');
                $(`.elements`).remove();
                $("#game").append(`<div class="elements"></div>`);
                break;
        }
    }
}
let go = (page, attribute) => {
    let pages = ['start', 'game', 'end'];
    panel = page;
    $(`#${page}`).attr('class', attribute);
    pages.forEach(e => {
        if (page !== e) {
            $(`#${e}`).attr('class', 'd-none')
        }
    })
}
let checkStorage = () => {
    if(localStorage.getItem('userName') != null){
        $(`#nameInput`).val(localStorage.getItem('userName'));
    }
}
let checkName = () => {
    name = $(`#nameInput`).val().trim();
    if (name != "") {
        localStorage.setItem('userName', name);
        $(`#startGame`).attr('disabled', false);
    } else {
        $(`#startGame`).attr('disabled', true);
    }
}
let startLoop = () => {
    let inter = setInterval(() => {
        if (panel !== "start") {
            clearInterval(inter);
        }
        checkName();
    }, 100);
}


