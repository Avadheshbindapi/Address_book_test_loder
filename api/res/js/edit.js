$(document).on('click', '.edit_Address', function () {
    var ajaxeurl = 'index.php';
   var ContactID = $(this).data('id')
   $(".addLocationModal").css("display", "block");
 
   let dataToAct = {
     task: 'edit_address',
     contact_id: ContactID
   };
   $.ajax({
     url: ajaxeurl,
     type: "POST",
     data: dataToAct,
     success: function (response) {
       $('[id="first_name"]').val(response.first_name)
       $('[id="last_name"]').val(response.last_name)
       $('[id="email"]').val(response.email)
       $('[id="street"]').val(response.street)
       $('[id="zip_code"]').val(response.zip_code)
       $('[id="city_id"]').val(response.city_id)
       $("[name='contact_id']").remove()
       $('#modal-content').append("<input type='text' name='contact_id' value='" + response.contact_id + "'>")
     }
   })
  
})
 