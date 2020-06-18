<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SiteController extends AbstractController
{

    /**
     * @Route("/", name="site.index", methods={"GET"})
     */
    public function index()
    {
        return $this->render('site.html.twig');
    }
}
