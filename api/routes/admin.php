<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\{
    UserController,
    BannerController,
    DeejayController
};

// Protect all admin routes with the 'admin' role
Route::group(['middleware' => ['auth:sanctum','role:admin']], function () {

    // User Management 
    // GET /api/admin/users
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{user}', [UserController::class, 'show']);
    Route::post('/users', [UserController::class, 'store']);
    Route::put('/users/{user}', [UserController::class, 'update']);
    Route::delete('/users/{user}', [UserController::class, 'delete']);
    Route::get('/roles', [UserController::class, 'roles']);

    // Banner Management
    // GET /api/admin/banners
    Route::get('/banners', [BannerController::class, 'index']);
    Route::get('/banners/{banner}', [BannerController::class, 'show']);
    Route::post('/banners', [BannerController::class, 'store']);
    Route::put('/banners/{banner}', [BannerController::class, 'update']);
    Route::post('/banners', [BannerController::class, 'store']);
    Route::delete('/banners/{banner}', [BannerController::class, 'delete']);
    Route::get('/banners/ordering/{banner}', [BannerController::class, 'ordering']);

    // Deejay Management
    // GET /api/admin/deejays
    Route::get('/deejays', [DeejayController::class, 'index']);
    Route::get('/deejays/{deejay}', [DeejayController::class, 'show']);
    Route::post('/deejays', [DeejayController::class, 'store']);
    Route::put('/deejays/{deejay}', [DeejayController::class, 'update']);
    Route::post('/deejays', [DeejayController::class, 'store']);
    Route::delete('/deejays/{deejay}', [DeejayController::class, 'delete']);
    Route::get('/deejays/ordering/{deejay}', [DeejayController::class, 'ordering']);

});

