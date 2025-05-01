<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->foreignId('team_id')->nullable();
            $table->foreignId('user_id')->constrained('users');
            $table->string('name');
            $table->string('player_id')->unique();
            $table->string('jersey_no');
            $table->enum('prefered_role', ['batsman', 'bowler', 'all-rounder', 'wicker-keeper']);
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->foreignId('country_id');
            $table->foreignId('state_id');
            $table->foreignId('city_id');
            $table->boolean('is_banned');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('players');
    }
};
