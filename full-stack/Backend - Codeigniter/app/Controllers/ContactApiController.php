<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\ContactModel;
use CodeIgniter\API\ResponseTrait;

class ContactApiController extends BaseController
{
    protected $contact;
    use ResponseTrait;

    public function __construct()
    {
        $this->contact = new ContactModel();
        $this->request = \Config\Services::request();


    }

    public function create()
    {
        try {
            $data = [
                'first_name' => $this->request->getVar('first_name'),
                'last_name' => $this->request->getVar('last_name'),
                'email' => $this->request->getVar('email'),
                'phone_number' => $this->request->getVar('phone_number'),
                'message' => $this->request->getVar('message')
            ];

            $this->contact->insertMessage($data); // Changed this line

            $result = [
                'status' => 1,
                'message' => 'Message inserted successfully'
            ];

            return $this->respond($result);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }

    public function viewMessages() {
        $services = $this->contact->getAllMessages();

        $result = [
            'status' => 1,
            'message' => 'Services fetched successfully',
            'data' => $services
        ];

        return $this->respond($result);
    }

}
