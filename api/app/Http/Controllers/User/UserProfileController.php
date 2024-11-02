<?php
namespace App\Http\Controllers\User; // location of Controller folder

use App\Models\UserProfile; // UserProfile Model
use Illuminate\Http\Request; // HTTP Request facade
use App\Http\Controllers\Controller; 

class UserProfileController extends Controller
{

    // to show UserProfile
    public function show(Request $request)
    {
        $user = $request->user(); // Get the authenticated user
    
        // message to ReactJs
        return response()->json([
            'message' => 'User Profile',
        ]);

    }

    // to create new profile if doesn't exist
    public function store(Request $request)
    {

    }

    // to update existing profile
    public function update(Request $request, UserProfile $userProfile)
    {

    }

}