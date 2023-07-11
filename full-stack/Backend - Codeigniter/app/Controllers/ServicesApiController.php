<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\ServicesModel;
use CodeIgniter\API\ResponseTrait;

class ServicesApiController extends BaseController
{
    protected $service;
    use ResponseTrait;

    public function __construct()
    {
        $this->service = new ServicesModel();
    }

    public function services()
    {
        $services = $this->service->getAllServices();

        $result = [
            'status' => 1,
            'message' => 'Services fetched successfully',
            'data' => $services
        ];

        return $this->respond($result);
    }

    public function create()
    {
        $data = [
            'service' => $this->request->getVar('service'),
            'cost' => $this->request->getVar('cost'),
            'valid' => $this->request->getVar('valid')
        ];

        $this->service->insertService($data);

        $result = [
            'status' => 1,
            'message' => 'Service created successfully'
        ];

        return $this->respond($result);
    }

    public function update($id)
    {
        $data = [
            'service' => $this->request->getVar('service'),
            'cost' => $this->request->getVar('cost'),
            'valid' => $this->request->getVar('valid')
        ];

        $this->service->update($id, $data);

        $result = [
            'status' => 1,
            'message' => 'Service updated successfully'
        ];

        return $this->respond($result);
    }

    public function delete($id)
    {
        $this->service->delete($id);

        $result = [
            'status' => 1,
            'message' => 'Service deleted successfully'
        ];

        return $this->respond($result);
    }
}
