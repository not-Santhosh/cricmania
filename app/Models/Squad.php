<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Squad extends Model
{
    protected $guarded = ['id'];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

   public function player()
   {
       return $this->belongsTo(Player::class);
   }
}
