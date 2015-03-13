<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\DependencyInjection\ContainerInterface; 
        
class RefereeController extends Controller
{
    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
        $this->refereeRepository = $container->get('cerad__referee__repository');
    }
    /**
     * @Route("/referees/{id}", name="referee-update")
     * @Method({"PUT"})
     */
    public function updateAction(Request $request, $id)
    {
        $referee = $this->refereeRepository->find($id);
        
        $content = json_decode($request->getContent(),true);
      //print_r($content); die();
        
        $referee['name'] = $content['name'];
        
        $referee = $this->refereeRepository->update($referee);
        
        return new JsonResponse($referee);
    }
    /**
     * @Route("/referees/{id}", name="referee")
     * @Method({"GET"})
     */
    public function getOneAction($id)
    {
        $referee = $this->refereeRepository->find($id);
        
        return new JsonResponse($referee);
    }
    /**
     * @Route("/referees", name="referees")
     * @Method({"GET"})
     */
    public function getAllAction()
    {
        $referees = $this->refereeRepository->findAll();
        
        return new JsonResponse($referees);
        
    }
    /**
     * @Route("/referees", name="referees-insert")
     * @Method({"POST"})
     */
    public function insertAction(Request $request)
    {
        $referee1 = json_decode($request->getContent(),true);
        
        $referee2 = $this->refereeRepository->insert($referee1);
        
        return new JsonResponse($referee2);
    }
}
