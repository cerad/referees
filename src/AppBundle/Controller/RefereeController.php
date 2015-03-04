<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class RefereeController extends Controller
{
    /**
     * @Route("/referees/{id}", name="referees")
     */
    public function findAction($id = null)
    {
        $referees = array(
          array('name' => 'Art H'),
          array('name' => 'Ted Q'),
          array('name' => 'Ted B'),
        );
        if ($id == 42)
        {
            $referees = array('name' => 'Art 42');
        }
        return new JsonResponse($referees);
    }
}
