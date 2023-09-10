$(document).ready(function () {
    var ajaxUrl = 'index.php';

    
    function showDeletePopup(ContactID) {
        var deletePopup = $('#deletePopup');
        deletePopup.show();

       
        $('#confirmDelete').click(function () {
            let dataToAct = {
                task: 'delete_Address',
                contact_id: ContactID
            };

            $.ajax({
                url: ajaxUrl,
                type: "POST",
                data: dataToAct,
                dataType: "json",
                success: function (response) {
                    window.location.href = 'index.php';
                //     if (response.success) {
                //         $('[data-id="' + ContactID + '"]').remove();
                //     } else {
                //         console.error('Failed to delete entry');
                //     }
                // },
                // error: function () {
                //     console.error('Failed to delete entry');
                 }
            });

            deletePopup.hide();
        });

        $('#cancelDelete').click(function () {
            deletePopup.hide();
        });
    }

    $(document).on('click', '.delete_Address', function () {
        var ContactID = $(this).data('id');
        showDeletePopup(ContactID);
    });
});


