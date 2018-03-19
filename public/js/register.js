    
  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newCat = {
  //     name: $("#ca").val().trim(),
  //     sleepy: $("[name=sleepy]:checked").val().trim()
  //   };

  //   // Send the POST request.
  //   $.ajax("/api/cats", {
  //     type: "POST",
  //     data: newCat
  //   }).then(
  //     function() {
  //       console.log("created new cat");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
    

    $(".submit").on("click", function(event) {
      event.preventDefault();

      // Here we grab the form elements
      var newChild = {
        password: $('#password').val().trim(),
        username: $('#username').val().trim(),
        first_name: $('#fParent').val().trim(),
        last_name: $("#lParent").val().trim(),
        email: $("#parentEmail").val().trim(),
        phone: $("#parentNumber").val().trim(),
        street: $("#parentAddress").val().trim(),
        city: $("#parentCity").val().trim(),
        state: $("#parentState").val().trim(),
        zip: $("#parentZip").val().trim(),
        emergency_name: $("#femerg").val().trim(),
        emergency_last: $("#lemerg").val().trim(),
        emergency_phnum: $("#emergNumber").val().trim(),
        
        spouseFirst: $("#fSpouse").val().trim(),
        spouseLast: $("#lSpouse").val().trim(),
        spouseEmail: $("#spouseEmail").val().trim(),
        spouseNumber: $("#spouseNumber").val().trim(),
        spouseAddress: $("#spouseAddress").val().trim(),
        spouseCity: $("#spouseCity").val().trim(),
        spouseState: $("#spouseState").val().trim(),
        spouseZip: $("#spouseZip").val().trim()

      };

      console.log(newChild);

      // Send the POST request.
      $.ajax("/api/register", {
        type: "POST",
        data: newChild
      }).then(
        function() {
          console.log("You are registered");
          // Reload the page to get the updated list
          location.reload();

          $('#password').val(""),
          $('#username').val(""),
          $("#fparent").val(""),
          $("#lparent").val(""),
          $("#parentEmail").val(""),
          $("#parentNumber").val(""),
          $("#parentAddress").val(""),
          $("#parentCity").val(""),
          $("#parentState").val(""),
          $("#parentZip").val(""),
          $("#femerg").val(""),
          $("#lemerg").val(""),
          $("#emergNumber").val(""),
          $("#fSpouse").val(""),
          $("#lSpouse").val(""),
          $("#spouseEmail").val(""),
          $("#spouseNumber").val(""),
          $("#spouseAddress").val(""),
          $("#spouseCity").val(""),
          $("#spouseState").val(""),
          $("#spouseZip").val("")
        }
      );

      });


   //    $.post("/api/register", newChild,
   //      function(data) {

   //        // If a table is available... tell user they are booked.
   //        if (data) {
   //          alert("You are registered");
   //        }

   //        // If a table is available... tell user they on the waiting list.
   //        else {
   //          alert("Sorry you are not registered");
   //        }

   //        // Clear the form when submitting
			// $('#password').val(""),
			// $('#username').val(""),
			// $("#fparent").val(""),
			// $("#lparent").val(""),
			// $("#parentEmail").val(""),
			// $("#parentNumber").val(""),
			// $("#parentAddress").val(""),
			// $("#parentCity").val(""),
			// $("#parentState").val(""),
			// $("#parentZip").val(""),
			// $("#femerg").val(""),
			// $("#lemerg").val(""),
			// $("#emergNumber").val(""),
			// $("#fSpouse").val(""),
			// $("#lSpouse").val(""),
			// $("#spouseEmail").val(""),
			// $("#spouseNumber").val(""),
			// $("#spouseAddress").val(""),
			// $("#spouseCity").val(""),
			// $("#spouseState").val(""),
			// $("#spouseZip").val("")

   //      });

  
