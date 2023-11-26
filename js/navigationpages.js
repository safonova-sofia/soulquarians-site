document.addEventListener('DOMContentLoaded', function () {
    var triggerElement = document.getElementById('triggerElement');
    var recordingElement = document.getElementById('recording_block');
window.addEventListener('scroll', function () {

// Проверяем, находится ли верхняя часть triggerElement в видимой области окна

    var recordingBlockAbsolutePosition = triggerElement.offsetTop;


    var st = document.documentElement.scrollTop;



    if (st > recordingBlockAbsolutePosition) {
        triggerElement.classList.add('show');
    } else {

        triggerElement.classList.add('hide');
        triggerElement.classList.remove('show');
    }

  });
  });
