<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $guarded = ['id'];

    public function innings()
    {
        return $this->hasMany(Inning::class);
    }

    public function overs()
    {
        return $this->hasManyThrough(Over::class, Inning::class);
    }

    public function tournament()
    {
        return $this->belongsTo(Tournament::class);
    }

    public function teams()
    {
        return $this->belongsToMany(Team::class);
    }
}
