<?php
namespace AppBundle\Model;

use Symfony\Component\Yaml\Yaml;

class RefereeRepository
{
    protected $db;

    public function __construct($db)
    {
        $this->db = $db;
    }
    public function findAll()
    {
        $sql = "SELECT * FROM referees;";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function find($id)
    {
        $sql = "SELECT * FROM referees WHERE id = :id;";
        $stmt = $this->db->prepare($sql);
        $stmt->execute(['id' => $id]);
        
        $referees = $stmt->fetchAll();
        
        return (count($referees) == 1) ? $referees[0] : null;
    }
    public function update($referee)
    {
       $sql = <<<EOT
UPDATE referees SET
    name = :name
WHERE id = :id;
EOT;
        $stmt = $this->db->prepare($sql);
        $stmt->execute($referee);
        
        return $referee;
    }
    public function insert($referee)
    {
        $sql = <<<EOT
INSERT INTO referees
       ( name)
VALUES (:name)
;
EOT;
        $stmt = $this->db->prepare($sql);
        $stmt->execute($referee);
        
        $referee['id'] = $this->db->lastInsertId();
        return $referee;
    }
}
