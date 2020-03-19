function updatePreview() {
    let clean = document.getElementById('editor').value;
    clean = DOMPurify.sanitize(clean);
    // console.log(clean);
    document.getElementById('preview').innerHTML =   marked(clean, {gfm:true, breaks:true, sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false});

}


document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    var area = document.querySelector('textarea');
    if (area.addEventListener) {
        area.addEventListener('input', function() {
            // event handling code for sane browsers
            updatePreview();
        }, false);
    } else if (area.attachEvent) {
        area.attachEvent('onpropertychange', function() {
            // IE-specific event handling code
            console.log("onPropertyChange()...");
            updatePreview();
        });
    }
    console.log("call update");
    updatePreview();
})
