<?php

namespace App\Controllers;
use App\Models\CustomersModel;

class Home extends BaseController
{

    protected $modelName = CustomersModel::class;

    public function __construct()
    {
        $this->model = new CustomersModel();
    }

    public function index()
    {
        return view('welcome_message');
    }

    public function demo1()
    {
       $customers = $this->model->findAll();

        return $this->respond($customers);
    }
}
