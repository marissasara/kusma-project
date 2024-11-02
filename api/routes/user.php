<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\{
    AccountController,
    UserProfileController,
};

/*
    This route already protected with role = user
*/

// UserProfile Routes
// GET http://localhost:8000/api/users/user_profile
Route::get('/user_profiles', [UserProfileController::class, 'show']);
Route::put('/user_profiles', [UserProfileController::class, 'update']);


