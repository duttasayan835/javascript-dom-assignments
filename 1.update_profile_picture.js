let filepicker = document.getElementById("file-picker");
      const image = document.getElementById("image");
      function changeProfile() {
        const read = new FileReader();
        read.onload = function (e) {
          image.src = e.target.result;
        };
        read.readAsDataURL(filepicker.files[0]);
      }