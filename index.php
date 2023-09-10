<?php
ob_start();
include('./thems/header.php');
include('./api/init.php');
$AddressBookController = new AddressBookController(new AddressBookModel($db));

if (isset($_POST['task'])) {
    ob_clean();
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($AddressBookController->dispatch($_POST));
    die;
}
$data = $AddressBookController->getAddress();
include('./thems/footer.php');
?>






