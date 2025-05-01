<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $guarded = ['id'];

    protected static function booted()
    {
        static::creating(function($model){
            $model->team_id = self::generateTeamID();
        });
    }

    public function generateTeamID() 
    {
        do {
            $code = mt_rand(10000000, 99999999);
        } while(self::where('team_id', $code)->exists());

        return $code;
    }
}
