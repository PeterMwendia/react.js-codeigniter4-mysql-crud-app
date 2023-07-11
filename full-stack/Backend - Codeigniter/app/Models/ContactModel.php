<?php

namespace App\Models;

use CodeIgniter\Model;
use Config\Database;

class ContactModel extends Model
{
    
    protected $table = 'contact';
    protected $primaryKey = 'id';
    protected $allowedFields = ['first_name', 'last_name', 'email', 'phone_number', 'message'];
    protected $useTimestamps = false;
    protected $db;
    protected $builder;

    public function __construct()
    {
        $this->db = Database::connect();
        $this->builder = $this->db->table('contact');
    }

    public function insertMessage($data)
    {
        $this->builder->insert($data);
    }

    public function getAllMessages()
    {
        return $this->builder->get()->getResultArray();

    }

}
