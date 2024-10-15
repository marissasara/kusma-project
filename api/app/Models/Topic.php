<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Topic extends Model
{
    use HasFactory;
    use NodeTrait;

    protected $guarded = ['id'];
    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i:s', // Format as datetime
    ];

    public function choices()
    {
        return $this->hasMany(Choice::class);
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }
}