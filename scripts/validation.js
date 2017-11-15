

      
      function validateForm() {
            var valid = 1;                                                    
            var email = document.getElementById('email');
            var email_validation = document.getElementById("email_validation");
            var name = document.getElementById('name');
            var name_validation = document.getElementById("name_validation");
            var message_validation = document.getElementById("message_validation");
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;         //filter for all, some email address can include numbers or symbols, thats why I inlude everything     
            
            if (name.value === "") {                      //when started value of name is empty, it will be mistake  (if statement for validation)
              valid = 0;
              name_validation.innerHTML = "Field Required";             // message, which will appear when you will not write name
              name_validation.style.display = "block";
            } else {
              name_validation.style.display = "none";
              name_validation.parentNode.style.backgroundColor = "transparent";    //if everything ok
            }
            
            if (message.value === "") {                                    //ABSOLUTLY the same as name if statement
              valid = 0;
              message_validation.innerHTML = "Field Required";
              message_validation.style.display = "block";
            } else {
              message_validation.style.display = "none";
              message_validation.parentNode.style.backgroundColor = "transparent";
            }
            
            if (email.value === "") {
              valid = 0;
              email_validation.innerHTML = "Field Required";      // That is what happening, when you are ignoring the rules, and write smth not appropriate, so do no ignore the rule... 
              email_validation.style.display = "block";
            } else {
              email_validation.style.display = "none";
              email_validation.parentNode.style.backgroundColor = "transparent";
            }
            
            if(!filter.test(email.value)) {   //check through the filter, for some anopropriate mistakes 
              valid = 0;
              email_validation.innerHTML = "Invalid email address";
              email_validation.style.display = "block";
              email_validation.parentNode.style.padding = "5px";
            } else {
              email_validation.style.display = "none";
              email_validation.parentNode.style.backgroundColor = "transparent";
            }
            if (!valid)
              return false;
          }