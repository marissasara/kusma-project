<?php

namespace App\Http\Controllers\Admin; 

use App\Models\User;
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
            'message' => 'Users',
            'users' => $users
        ]);
    }
}
