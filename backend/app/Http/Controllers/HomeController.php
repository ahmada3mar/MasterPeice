<?php
   
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Content ;
use App\Event;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function user(Request $request)
    {
        
        return $request->user();
    }
  
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return auth()->user();
    }
  
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function adminHome()
    {
        return auth()->user();
    }

    function trainee(Request $request){

        
   
            $image = $request->file('avatar');;
            $imagename = time() . '.' . $image->extension();
            $image->move(public_path('images'), $imagename);
            $user = User::create($request->all());
            $user->avatar = $imagename;
            $user->save();

        return $user;
    }
  
    function edituser(Request $request , $id){

        $user = User::find($id);
        $image = $request->file('avatar');
        $user->update($request->all());
            if($image){
                $imagename = time() . '.' . $image->extension();
                $image->move(public_path('images'), $imagename);
                $user->avatar = $imagename;
                
            }
            $user->save();

        return $user;
    }

    function getTrainees(){

        $trainees = User::all() ;
        // dd($trainees);
        return $trainees ;
    }

    function deleteUser($id){

        User::find($id)->delete() ;
        // dd($trainees);
        return "done" ;
    }

    function addContent(Request $request){

        
        $content = Content::create($request->all());
         $image = $request->file('image');
         if($image){
             $imagename = time() . '.' . $image->extension();
             $image->move(public_path('images'), $imagename);
             $content->image = $imagename;
             $content->save();
         }
         return $content ;
     }

     function addevent(Request $request){
         return Event::create($request->all());
     }
   



    
    
}