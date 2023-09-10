
// $(document).ready(function () {
//   $("#AddAddressBook").click(function () {
//     $("#addLocationModal").css("display", "block");
// });

//  var ajaxurl = 'index.php';
//   $('#save_Addresss').click(function () {
//     //Validate input box
//     var first_name = $('#first_name').val().trim();
//     var last_name = $('#last_name').val().trim();
//     var email = $('#email').val().trim();
//     var street = $('#street').val().trim();
//     var zip_code = $('#zip_code').val().trim();
//     var city_id = $('#city_id').val().trim();
    

//     if (first_name === '' || last_name === '' || email === '' || street === '' || zip_code === '' | city_id === '') {
//       alert('Please fill in all fields');
//       return;
//     }

//     // Validate email format
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert('Invalid email format');
//       return;
//     }    
//     //Validate zip_code format
//     var zip_codeRegex = /^[0-5]{6}$/;
//     if (!zip_codeRegex.test(zip_code)) {
//       alert('Invalid zip_code');
//       return;
//     }
//     //close the validate stape
     
//     // start data post Method
//     $first_name = $('#first_name').val();

//     $last_name = $('#last_name').val();

//     $email = $('#email').val();

//     $street = $('#street').val();

//     $zip_code = $('#zip_code').val();

//     $city_id = $('#city_id').val();

//     $ContactID = $("[name='contact_id']").val();



//     $("#first_name,#last_name,#email,#street,#zip_code,#city_id").val(['']);

//     let dataToAct = {

//       task: 'save_address',

//       first_name: $first_name,

//       last_name: $last_name,

//       email: $email,

//       street: $street,

//       zip_code: $zip_code,

//       city_id: $city_id,

//       contact_id: $ContactID
//     };
//     $.ajax({

//       url: ajaxurl,

//       type: "POST",

//       data: dataToAct,

//       success: function (response) {

//         let returnedData = JSON.parse(response);
//       }

//     })
//   })
//   $("#closeModalBtn").click(function () {
//     $("#addLocationModal").css("display", "none");
//   });
// });
 
let ajaxUrl = "index.php";

$(document).ready(function () {
    $("#AddAddressBook").click(function () {
        $("#addLocationModal").css("display", "block");
    });

    function removeErrorClassWhileEditing($field) {
        $field.on('input', function () {
            if ($(this).val() !== '') {
                $(this).removeClass('error-form');
            }
        });
    }

    removeErrorClassWhileEditing($('#name'));
    removeErrorClassWhileEditing($('#first_name'));
    removeErrorClassWhileEditing($('#street'));
    removeErrorClassWhileEditing($('#city_id'));
    removeErrorClassWhileEditing($('#zip_code'));
    removeErrorClassWhileEditing($('#email'));

    function isValidEmail(email) {
        const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailPattern.test(email);
    }

    $('#save_Addresss').click(function () {
        let $first_name = $('#first_name').val();
        let $last_name = $('#last_name').val();
        let $email = $('#email').val();
        let $street = $('#street').val();
        let $zip_code = $('#zip_code').val();
        let $ContactID = $("[name='contact_id']").val();
        let $city_id = $('#city_id').val();

        if ($first_name === '' || $first_name === '' || $street === '' || $city_id === '' || $zip_code === '' || $email === '') {
            $('#first_name').addClass('error-form');
            $('#last_name').addClass('error-form');
            $('#street').addClass('error-form');
            $('#city_id').addClass('error-form');
            $('#zip_code').addClass('error-form');
            $('#email').addClass('error-form');

            $("#result").text("Please fill in all required fields.");
            return;
        }

        if ($zip_code !== '' && !/^\d{1,8}$/.test($zip_code)) {
            $('#zip_code').addClass('error-form');
            $("#result").text("Zip code should contain up to 8 digits.");
            return;
        }

        if (!isValidEmail($email)) {
            $('#email').addClass('error-form');
            $("#result").text("Please enter a valid email address.");
            return;
        }

        let dataToAct = {
            task: 'save_address',
            contact_id: $ContactID,
            first_name: $first_name,
            last_name: $last_name,
            email: $email,
            street: $street,
            zip_code: $zip_code,
            city_id: $city_id
        };

        $.ajax({
            url: ajaxUrl,
            type: "POST",
            data: dataToAct,
            success: function (response) {

            }
        })

        $("#addLocationModal").css("display", "none");
    });

    $("#closeModalBtn").click(function () {
        $("#addLocationModal").css("display", "none");
    });

});

