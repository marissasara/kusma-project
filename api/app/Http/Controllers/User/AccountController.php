<?php
namespace App\Http\Controllers\User; 

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller; 
use App\Http\Requests\Account\UpdateRequest;
use App\Http\Requests\Account\changePasswordRequest;

class AccountController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user(); // Get the authenticated user
    
        // Retrieve the user's role using Spatie
        $role = $user->roles->pluck('name')->first();
    
        return response()->json([
            'message' => 'Logged user info',
            'user' => $user,
            'role' => $role,
        ]);

    }

    public function update(UpdateRequest $request)
    {

    }

    public function changePassword(ChangePasswordRequest $request)
    {

    }
}