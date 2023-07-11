<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\CustomersModel;
use CodeIgniter\API\ResponseTrait;

class CustomerApiController extends BaseController
{
    protected $customer;
    use ResponseTrait;

    public function __construct()
    {
        $this->customer = new CustomersModel();
    }

    public function customers()
    {
        $customers = $this->customer->getAllCustomers();

        $result = [
            'status' => 1,
            'message' => 'Customers fetched successfully',
            'data' => $customers
        ];

        return $this->respond($result);
    }

    public function create()
    {
        $data = [
            'Customer_name' => $this->request->getVar('Customer_name'),
            'Account_type' => $this->request->getVar('Account_type'),
            'Active' => $this->request->getVar('Active')
        ];

        $this->customer->insert($data);

        $result = [
            'status' => 1,
            'message' => 'Customer created successfully'
        ];

        return $this->respond($result);
    }

    

    public function update($id)
    {
        $data = [
            'Customer_name' => $this->request->getVar('Customer_name'),
            'Account_type' => $this->request->getVar('Account_type'),
            'Active' => $this->request->getVar('Active')
        ];

        $this->customer->update($id, $data);

        $result = [
            'status' => 1,
            'message' => 'Customer updated successfully'
        ];

        return $this->respond($result);
    }

    public function delete($id)
    {
        $this->customer->delete($id);

        $result = [
            'status' => 1,
            'message' => 'Customer deleted successfully'
        ];

        return $this->respond($result);
    }
}
