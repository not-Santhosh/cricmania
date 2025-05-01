<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $guarded = ['id'];

    protected static function booted()
    {
        static::creating(function($model){
            $model->player_id = self::generatePlayerID();
        });
    }

    public function generatePlayerID() 
    {
        do {
            $code = mt_rand(10000000, 99999999);
        } while(self::where('team_id', $code)->exists());

        return $code;
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function balls()
    {
        return $this->hasMany(Ball::class);
    }
}
