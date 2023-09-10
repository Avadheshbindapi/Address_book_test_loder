
<button id="AddAddressBook">Add Entries</button>
<form action="" id="AddressBook">
<div class="addLocationModal" id="addLocationModal" style="display: none;">
    <div id="modal-content">
        <h2>Add new Entry</h2>
        <label for="first_name">first Name:</label>
        <input type="text" id="first_name" name="" required><br>

        <label for="last_name">last Name:</label>
        <input type="text" id="last_name" name="" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="" required><br>

        <label for="street">Street:</label>
        <input type="text" id="street" name="" required><br>

        <label for="zip_code">Zip Code:</label>
        <input type="text" id="zip_code" name="" required><br>

        <label for="city">City:</label>
        <select class="" name="" id="city_id">
            <option value="">--Select city--</option>
            <?php
                foreach ($data as $city) {
                    echo '<option value="' . $city['city_id'] . '">' . $city['city_name'] . '</option>';
                    }
            ?>
        </select><br>

        <button type="button" id="save_Addresss">Save Address</button>
        <button id="closeModalBtn">Close</button>
    </div>
</div>

</form>


<div id="addressTable"></div>
<div id="app"></div>


<div class="overlay" id="overlay"></div>


<div class="popup" id="deletePopup">
    <h2><i class="fas fa-trash-alt"></i>Delete Confirmation</h2>
    <p>Are you sure you want to delete this entry?</p>
    <button id="confirmDelete">Yes</button>
    <button id="cancelDelete">No</button>
</div>