
    $(".submit").on("click", function(event) {
      event.preventDefault();

      // Here we grab the form elements
      var newParent = {
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
        
        // spouseFirst: $("#fSpouse").val().trim(),
        // spouseLast: $("#lSpouse").val().trim(),
        // spouseEmail: $("#spouseEmail").val().trim(),
        // spouseNumber: $("#spouseNumber").val().trim(),
        // spouseAddress: $("#spouseAddress").val().trim(),
        // spouseCity: $("#spouseCity").val().trim(),
        // spouseState: $("#spouseState").val().trim(),
        // spouseZip: $("#spouseZip").val().trim(),
        
      };

      var newChild = {

        first_name: $("#fchild").val().trim(),
        last_name: $("#lchild").val().trim(),
        birth_date: $("#birthDate").val().trim(),
        sex: $("#sexChild").val().trim(),
        allergies: $("#allergy1").val().trim(),
        allergy1: $("#allergy2").val().trim(),
        allergy2: $("#allergy3").val().trim(),
        // parent1_id: $("#parent1_id").val().trim()

      }
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
          // $("#fSpouse").val(""),
          // $("#lSpouse").val(""),
          // $("#spouseEmail").val(""),
          // $("#spouseNumber").val(""),
          // $("#spouseAddress").val(""),
          // $("#spouseCity").val(""),
          // $("#spouseState").val(""),
          // $("#spouseZip").val(""),
          $("#fchild").val(""),
          $("#lchild").val(""),
          $("#birthDate").val(""),
          $("#sexChild").val(""),
          $("#allergy1").val(""),
          $("#allergy2").val(""),
          $("#allergy3").val('')
          $("#fchild").val(""),
          $("#lchild").val(""),
          $("#birthDate").val(""),
          $("#sexChild").val(""),
          $("#allergy1").val(""),
          $("#allergy2").val(""),
          $("#allergy3").val('')
          $("#parent1_id").val('')
           // Send the POST request.
      $.ajax("/api/register", {
        type: "POST",
        data: newParent
      }).then(
        function(data) {
          console.log("You are registered ",data);
          // Reload the page to get the updated list
          // location.reload();

            $.ajax("/api/child", {
            type: "POST",
            //spread operator
            data: {...newChild, parent1_id:data.insertId}
          }).then(
            function(data) {
              console.log("You registered child",data);
              // Reload the page to get the updated list
              // location.reload();


            }
          );

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

  
