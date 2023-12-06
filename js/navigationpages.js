document.addEventListener('DOMContentLoaded', function () {
    var navigationElement = document.getElementById('navigationElement');
    var recordingElement = document.getElementById('recording_block');
    var linksElement = document.getElementById('links_block');

    window.addEventListener('scroll', function () {
        var recordingBlockAbsolutePosition = recordingElement.offsetTop;
        var linksBlockAbsolutePosition = linksElement.offsetTop;
        var st = document.documentElement.scrollTop;

        if ((st > recordingBlockAbsolutePosition) && (st < linksBlockAbsolutePosition)){
            navigationElement.classList.add('show_nav');
        } else {
            navigationElement.classList.remove('show_nav');
            navigationElement.classList.add('hide_nav');
        }
      });
});
