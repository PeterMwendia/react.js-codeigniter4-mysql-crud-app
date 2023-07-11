<?php

namespace App\Models;

use CodeIgniter\Model;
use Config\Database;

class ServicesModel extends Model
{
    protected $table = 'services';
    protected $primaryKey = 'serv_id';
    protected $allowedFields = ['service', 'cost', 'valid'];
    protected $useTimestamps = false;
    protected $db;
    protected $builder;

    public function __construct()
    {
        $this->db = Database::connect();
        $this->builder = $this->db->table('services');
    }

    public function getAllServices()
    {
        return $this->builder->get()->getResultArray();
    }

    public function insertService($data)
    {
        $this->builder->insert($data);
    }

    public function getServiceWhere($condition)
    {
        $result = $this->builder->where($condition)->get()->getResultArray();
        return count($result) > 0 ? $result[0] : 'No-Service';
    }
}
