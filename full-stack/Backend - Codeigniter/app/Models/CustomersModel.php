<?php

namespace App\Models;

use CodeIgniter\Model;
use Config\Database;

class CustomersModel extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'cust_id';
    protected $allowedFields = ['Customer_name', 'Account_type', 'Active'];
    protected $useTimestamps = false;
    protected $db;
    protected $builder;

    public function __construct()
    {
        $this->db = Database::connect();
        $this->builder = $this->db->table('customers');
    }

    public function getAllCustomers()
    {
        return $this->builder->get()->getResultArray();
    }

    public function insertCustomer($data)
    {
        $this->builder->insert($data);
    }

    public function getCustomerWhere($condition)
    {
        $result = $this->builder->where($condition)->get()->getResultArray();
        return count($result) > 0 ? $result[0] : 'No-User';
    }
}
