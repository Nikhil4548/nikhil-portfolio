function menuHandle() {
    document.querySelector(".navbar .menu").classList.toggle("active");
  };

    let menuList = document.querySelectorAll('.menu a');
    menuList.forEach(element => {
      element.onclick = function() {myFunction()};
    });

    function myFunction() {
      document.querySelector(".navbar .menu").classList.toggle("active");

      // Send data to Google Sheets
      const form = document.querySelector("#form")
      const submitButton = document.querySelector("#submit")
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyWZj0rDC4KoU7D-KxumWRaxe6IK1LRYKFJNwrjS6VneCep_KCPmZapzXF9S6zY7e7Hfw/exec'
   
      form.addEventListener('submit', e => {
        submitButton.disabled = true
        e.preventDefault()
        let requestBody = new FormData(form)
        fetch(scriptURL, { method: 'POST', body: requestBody})
          .then(response => {
             alert('Success!', response)
             submitButton.disabled = false
            })
          .catch(error => {
          alert('Error!', error.message)
            submitButton.disabled = false
   
          }
          )
      })

    }
