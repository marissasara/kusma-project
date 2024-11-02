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
        $user_profile = UserProfile::firstOrCreate(
            ['user_id' => $user->id], // Check for profile with this user_id
            ['user_id' => $user->id]  // If not found, create an empty record with user_id populated
        );

        // Send message and profile data to ReactJS
        return response()->json([
            'message' => 'User Profile',
            'user_profile' => $user_profile, // Return the profile data to ReactJS
        ]);
    }


    // to update existing profile
    public function update(Request $request)
    {
        // Get the authenticated user
        $user = $request->user();
        
        // Validate the incoming request data
        $request->validate([
            'title' => 'required|string|max:255', // Example validation for title
            'name' => 'required|string|max:255', // Example validation for name
            //'email' => 'required|email|max:255',  // Example validation for email
            // Add other fields that you want to update with appropriate validation rules
        ]);

        // Retrieve the user's profile
        $profile = UserProfile::where('user_id', $user->id)->first();

        if ($profile) {
            // Update the profile with the validated data
            $profile->update($request->only([
                'title', 
                'name'
            ])); // Specify the fields to update

            // Return a success response
            return response()->json([
                'message' => 'Profile updated successfully',
                'profile' => $profile, // Return the updated profile data
            ]);
        }

        // If the profile does not exist, you can return an error response
        return response()->json([
            'message' => 'Profile not found',
        ], 404);
    }


}