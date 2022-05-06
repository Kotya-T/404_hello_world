function terry_click() {
    if (!win6 || win6.closed) {
        win6 = window.open('https://www.google.com/', '_blank', "width=320,height=240");
        } else {
        win6.focus();
        }
}