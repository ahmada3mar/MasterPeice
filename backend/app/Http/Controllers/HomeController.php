<?php
   
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

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
           
            
           
            // $user->mobile = $request->mobile;
            // $user->orange_mobile = $request->orange_mobile;
            // $user->education_level = $request->education_level;
            // $user->field = $request->field;
            // $user->date_of_birth = $request->date_of_birth;
            // $user->address = $request->address;
            // $user->english_level = $request->mame;
            // $user->refrences_1 = $request->mame;
            // $user->refrences_2 = $request->mame;
            // $user->gender = $request->mame;

        return $user;
    }

    function getTrainees(){

        $trainees = User::where('is_admin' , 0)->get() ;
        // dd($trainees);
        return $trainees ;
    }

    
    
}