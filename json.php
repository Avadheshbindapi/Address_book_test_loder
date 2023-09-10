<?php
ob_start();
include('./api/init.php');
$AddressBookController = new AddressBookController(new AddressBookModel($db));
ob_clean();
header('Content-Type: application/json; charset=utf-8');
if (isset($_POST['task'])) {
    echo $AddressBookController->dispatch($_POST);
}
$data = $AddressBookController->getjiontableAddress();

if (is_array($data)) {
    echo json_encode($data);
} else {
    echo json_encode(array("error" => "Data is not an array"));
}
