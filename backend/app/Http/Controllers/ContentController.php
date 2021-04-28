<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;

class ContentController extends Controller
{
    function index(){

       $content = Content::all();
        
        return $content ;
    }
}
