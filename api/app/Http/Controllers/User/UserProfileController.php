<?php
namespace App\Http\Controllers\User; // location of Controller folder

use App\Models\UserProfile; // UserProfile Model
use Illuminate\Http\Request; // HTTP Request facade
use App\Http\Controllers\Controller; 

class UserProfileController extends Controller
{

    // Show UserProfile
    public function show(Request $request)
    {
        $user = $request->user(); // Get the authenticated user

        // Check in the database for the existing user profile
        $profile = UserProfile::firstOrCreate(
            ['user_id' => $user->id], // Check for profile with this user_id
            ['user_id' => $user->id]  // If not found, create an empty record with user_id populated
        );

        // Send message and profile data to ReactJS
        return response()->json([
            'message' => 'User Profile',
            'profile' => $profile, // Return the profile data to ReactJS
        ]);
    }


    // to create new profile if doesn't exist
    public function store(Request $request)
    {

        \Log::info($request);

    }

    // to update existing profile
    public function update(Request $request)
    {
        \Log::info($request);
    }

}