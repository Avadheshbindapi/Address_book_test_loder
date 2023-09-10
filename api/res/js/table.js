$(document).ready(function () {
    var ajaxurl = 'json.php';

    $.ajax({
        url: ajaxurl,
        type: "GET",
        dataType: 'json',
        success: function (data) {
            renderAddressTable(data);
            // console.log(data);
        }

    })

    function renderAddressTable(data) {
        var table = $("<table>")
        var tr = $("<tr>")
        tr.append("<th>First Name</th>")
        tr.append("<th>Last Name</th>")
        tr.append("<th>Email</th>")
        tr.append("<th>Street </th>")
        tr.append("<th>Zip Code </th>")
        tr.append("<th>City Name </th>")
        tr.append("<th>Edit</th>")
        tr.append("<th>Delet</th>")
      
    
        table.append(tr)
    
        for (var i = 0; i < data.length; i++) {
            var tr = $("<tr>")
            tr.append($("<td>").html(data[i].first_name))
            tr.append($("<td>").html(data[i].last_name))
            tr.append($("<td>").html(data[i].email))
            tr.append($("<td>").html(data[i].street))
            tr.append($("<td>").html(data[i].zip_code))
            tr.append($("<td>").html(data[i].city_name))
            tr.append($("<td>").append('<button class="fa fa-edit edit_Address" data-id="' + data[i].contact_Id + '"></button>'));
            tr.append($("<td>").append('<button class="fa fa-trash  delete_Address" data-id="' + data[i].contact_Id + '"></button>')); // Use .append() here
            table.append(tr)
        }
    
        $('#addressTable').html(table)
    }
});