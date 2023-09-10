<?php
class AddressBookModel
{
    public $model;
    public function __construct(PDO $model)
    {
        $this->model = $model;
    }
    public function saveAddress($data)
    {
        $sql = "INSERT INTO contacts (
            first_name,
            last_name,
            email,
            street,
            zip_code,
            city_id) 
            VALUES(?,?,?,?,?,?);";

        $stmt = $this->model->prepare($sql);
        return  $stmt->execute([
            $data['first_name'],
            $data['last_name'],
            $data['email'],
            $data['street'],
            $data['zip_code'],
            $data['city_id']]);
    }
    
    public function getAddress()
    {
        $sql = "SELECT * FROM cities";
        $stmt = $this->model->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO ::FETCH_ASSOC);
    }

    public function getjiontableAddress(){
        $sql = "SELECT
        contacts.contact_id AS contact_Id,
        contacts.first_name,
        contacts.last_name,
        contacts.email,
        contacts.street,
        contacts.zip_code,
        cities.city_name
    FROM
    contacts
    INNER JOIN
    cities
    ON
    contacts.city_id = cities.city_id;";

    $pdo = $this->model->prepare($sql);

    $pdo->execute();

    return $pdo->fetchAll(PDO::FETCH_ASSOC);
}

    public function getAddressByid($ContactID)
    {
        $pdo = $this->model->prepare("SELECT * FROM contacts WHERE contacts.contact_id = ?;");
        $pdo->execute([$ContactID]);
        return $pdo->fetch(PDO::FETCH_ASSOC);
    }
    
    public function updateAddress($data)
    {
        $sql = "UPDATE contacts SET first_name=?,last_name=?, email=?, street=?, zip_code=?, city_id=? WHERE contact_id=?";
        $stmt= $this->model->prepare($sql);
        return  $stmt->execute([
                $data['first_name'],
                $data['last_name'],
                $data['email'],
                $data['street'],
                $data['zip_code'],
                $data['city_id'],
                $data['contact_id']]);
    }
    public function deleteAddress($ContactID)
    {
        $sql = "DELETE FROM contacts WHERE contacts.contact_id = ?;";
        $stmt= $this->model->prepare($sql);
        return  $stmt->execute([$ContactID]);
    }
} 