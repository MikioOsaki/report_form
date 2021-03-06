jQuery(document).ready(function () {

  var maxFileSize = 10000000;
  var totalFlieSize = 0;
  var input = document.querySelector('#image_uploads');
  var preview = document.querySelector('.preview');
  var imagePrevParagrapg = $('#preview');

  input.style.visibility = 'hidden';
  input.style.display = 'none';
  input.addEventListener('change', updateImageDisplay);
  $("#button_upload").prop("disabled", false);

  function updateImageDisplay() {
    for (var index = 0; index < input.files.length; index++) {
      totalFlieSize += input.files[index].size;
    }
    if (totalFlieSize > maxFileSize || input.files.length > 5) {
      imagePrevParagrapg.text("Max. 5 Dateien oder max. 10 MB Gesamtgröße überschritten.");
      imagePrevParagrapg.css({
        'color': 'red',
        'font-weight': 'bold'
      });
      $("#button_upload").prop("disabled", true);
      $("#button_upload").css({
        'color': 'red',
      });
      return;
    }

    $("#button_upload").prop("disabled", false);
    $("#button_upload").css({
      'color': '#FFFFFF'
    });

    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
    var curFiles = input.files;
    if (curFiles.length === 0) {
      var para = document.createElement('p');
      para.textContent = 'No files currently selected for upload';
      preview.appendChild(para);
    } else {
      var list = document.createElement('ol');
      preview.appendChild(list);
      for (var i = 0; i < curFiles.length; i++) {
        var listItem = document.createElement('li');
        var para = document.createElement('p');
        if (validFileType(curFiles[i])) {
          para.textContent = 'File name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) +
            '.';
          var image = document.createElement('img');
          image.src = window.URL.createObjectURL(curFiles[i]);
          listItem.appendChild(image);
          listItem.appendChild(para);
        } else {
          para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
          listItem.appendChild(para);
        }
        list.appendChild(listItem);
      }
    }
  }
  var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
  ]

  function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
      if (file.type === fileTypes[i]) {
        return true;
      }
    }
    return false;
  }

  function returnFileSize(number) {
    if (number < 1024) {
      return number + 'bytes';
    } else if (number > 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + 'KB';
    } else if (number > 1048576) {
      return (number / 1048576).toFixed(1) + 'MB';
    }
  }

});