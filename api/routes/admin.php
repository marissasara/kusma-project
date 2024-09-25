<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\{
    UserController,
};

// GET /api/admin/users
Route::get('/users', [UserController::class, 'index']);

