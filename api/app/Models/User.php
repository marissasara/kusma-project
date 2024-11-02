<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasRoles;

    protected $guarded = ['id'];

    // User hasOne UserProfile
    public function user()
    {
        return $this->hasOne(UserProfile::class);
    }

    protected $hidden = [
        'password',
        'remember_token',
    ];

  
    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i:s', // Format as datetime
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
