<?php

namespace App\Http\Controllers\Admin; 

use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 

class UserController extends Controller
{
    public function index()
    {
        $users = User::query()
                        ->with('roles')
                        ->orderBy('id','DESC')
                        ->paginate(10)
                        ->withQueryString();

        return response()->json([
            'message' => 'Registered users',
            'users' => $users
        ]);
    }

    public function roles()
    {

        $roles = Role::all();
        return response()->json([
            'message' => 'Available roles',
            'roles' => $roles
        ]);
    }
}
