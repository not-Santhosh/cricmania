<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inning extends Model
{
    protected $guarded = ['id'];

    public function overs()
    {
        return $this->hasMany(Over::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
