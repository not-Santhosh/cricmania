<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
    protected $guarded = ['id'];

    protected static function booted()
    {
        static::creating(function($model){
            $model->tournament_id = self::generatePlayerID();
        });
    }

    public function generatePlayerID() 
    {
        do {
            $code = mt_rand(10000000, 99999999);
        } while(self::where('team_id', $code)->exists());

        return $code;
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }
    
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function games()
    {
        return $this->hasMany(Game::class);
    }
}
