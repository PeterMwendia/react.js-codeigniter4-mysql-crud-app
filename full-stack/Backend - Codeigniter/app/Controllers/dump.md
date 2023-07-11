<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\ContactModel;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;

class ContactApiController extends BaseController
{
    protected $contact;

    public function __construct()
    {
        $this->contact = new ContactModel();
        $this->request = service('request');
    }

    public function create(): string
    {
        $json = $this->request->getJSON();

        if (!$json) {
            return $this->fail('Invalid JSON format', ResponseInterface::HTTP_BAD_REQUEST);
        }

        try {
            $data = [
                'first_name' => $json->first_name,
                'last_name' => $json->last_name,
                'email' => $json->email,
                'phone_number' => $json->phone_number,
                'message' => $json->message
            ];

            $this->contact->insert($data);

            $result = [
                'success' => true,
                'feedback' => 'Message inserted successfully'
            ];

            return $this->respond($result, ResponseInterface::HTTP_CREATED);
        } catch (Exception $e) {
            $response = [
                'success' => false,
                'feedback' => $e->getMessage()
            ];

            return $this->respond($response, ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}



//            $data = [
//            'first_name' => $this->request->getVar('first_name'),
//            'last_name' => $this->request->getVar('last_name'),
//            'email' => $this->request->getVar('email'),
//            'phone_number' => $this->request->getVar('phone_number'),
//            'message' => $this->request->getVar('message')
//        ];// Create data