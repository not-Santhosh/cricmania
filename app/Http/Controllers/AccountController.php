<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function dashboard() 
    {
        $games = Game::orderByDesc('start_time')->limit(5)->get(); 
        
        return Inertia::render('dashboard', [
            'games' => $games
        ]);
    }
}
