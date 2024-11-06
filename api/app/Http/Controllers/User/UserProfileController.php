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
            'title' => 'required|string|max:255', 
            'name' => 'required|string|max:255', 'first_name' => 'sometimes|string|max:255',
            'last_name' => 'sometimes|string|max:255',
            'gender' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:user_profiles,email,' . $user->id . ',user_id',
            'phone_number' => 'sometimes|string|max:20',
            'mykad_number' => 'sometimes|string|unique:user_profiles,mykad_number,' . $user->id . ',user_id',
            'bumiputera_status' => 'sometimes|boolean',
            'birthdate' => 'sometimes|date',
            'address' => 'sometimes|string',
            'city' => 'sometimes|string',
            'postcode' => 'sometimes|string|max:10',
            'state' => 'sometimes|string',
            'oku_card' => 'sometimes|boolean'
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