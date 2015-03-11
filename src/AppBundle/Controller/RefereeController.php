<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class RefereeController extends Controller
{
    /**
     * @Route("/referees/{id}", name="referee-put")
     * @Method({"PUT"})
     */
    public function putOneAction(Request $request, $id)
    {
        $refereeRepository = new RefereeRepository();
        
        $referee = $refereeRepository->findOneById($id);
        
        $content = json_decode($request->getContent(),true);
      //print_r($content); die();
        
        $referee['name'] = $content['name'];
        
        $refereeRepository->save($referee);
        
        return new JsonResponse($referee);
    }
    /**
     * @Route("/referees/{id}", name="referee")
     * @Method({"GET"})
     */
    public function getOneAction($id)
    {
        $refereeRepository = new RefereeRepository();
        
        return new JsonResponse($refereeRepository->findOneById($id));
    }
    /**
     * @Route("/referees", name="referees")
     * @Method({"GET"})
     */
    public function getAllAction($id = null)
    {
        $refereeRepository = new RefereeRepository();
        
        return new JsonResponse($refereeRepository->findAll());
        
    }
    /**
     * @Route("/referees", name="referees-post")
     * @Method({"POST"})
     */
    public function postOneAction(Request $request)
    {
        $referee = json_decode($request->getContent(),true);
        print_r($referee); die();
        $referee['id'] = 4;
        
        $refereeRepository = new RefereeRepository();
        $refereeRepository->save($referee);
        
        return new JsonResponse($referee);
        
    }
}
