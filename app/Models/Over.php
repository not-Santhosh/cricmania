<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Over extends Model
{
    protected $guarded = ['id'];

    public function balls()
    {
        return $this->hasMany(Ball::class);
    }

    public function innings()
    {
        return $this->belongsTo(Inning::class);
    }
}
