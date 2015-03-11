<?php
namespace AppBundle\Controller;

use Symfony\Component\Yaml\Yaml;

class RefereeRepository
{
    protected $referees;

    public function __construct()
    {
        $this->referees = Yaml::parse(file_get_contents(__DIR__ . '/referees.yml'));
    }
    public function findAll()
    {
        return $this->referees;
    }
    public function findOneById($id)
    {
        foreach($this->referees as $referee)
        {
            if ($referee['id'] == $id) return $referee;
        }
        return null;
    }
    public function save($referee)
    {
        $this->referees[] = $referee;
        
        file_put_contents(__DIR__ . '/referees.yml',YAML::Dump($this->referees));
        
    }
}
