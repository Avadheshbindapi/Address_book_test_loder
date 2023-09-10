
<?php
class AddressBookController
{
    public $conn;
    protected $_actions = [
        'save_address','edit_address','delete_Address'
    ];
    public function __construct(AddressBookModel $conn)
    {
        $this->conn = $conn;
    }
    
    public function dispatch($request)
    {
        $method = implode("", array_map('ucfirst', (explode("_", $request['task'])))) . "Action";
        if (in_array($request['task'], $this->_actions) && method_exists($this, $method)) {
            $result = call_user_func_array(array($this, $method), array($request));
            return $result;
        } else {
            throw new Exception("Either $method does not exist or you do not have enough permission to access this location.");
        }
    }

    public function saveAddressAction($data)
    {
       if(isset($data['contact_id'])){
            return  $this->conn->updateAddress($data);
        }else{
            return  $this->conn->saveAddress($data);
        }
    }
    
    public function getAddress()
    {
        return $this->conn->getAddress();
    }

    public function getjiontableAddress()
    {
        return $this->conn->getjiontableAddress();
    }

    public function EditAddressAction ($data)
    {
        return  $this->conn->getAddressByid($data['contact_id']);
    } 
    public function DeleteAddressAction($data){
        return $this->conn->deleteAddress($data['contact_id']);
    }
}
