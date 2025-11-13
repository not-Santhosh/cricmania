<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\SquadController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TournamentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [AccountController::class, 'dashboard'])->name('dashboard');
    Route::resource('games', GameController::class);
    Route::resource('tournaments', TournamentController::class);
    Route::resource('teams', TeamController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
