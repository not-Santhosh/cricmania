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
        Schema::create('innings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('game_id')->constrained('games');
            $table->foreignId('team_id')->constrained('teams');
            $table->unsignedTinyInteger('innings_no');
            $table->unsignedInteger('total_runs')->default(0);
            $table->unsignedInteger('total_wickets')->default(0);
            $table->unsignedSmallInteger('total_overs')->default(0);
            $table->unsignedTinyInteger('total_balls')->default(0);
            $table->unsignedTinyInteger('total_extras')->default(0);
            $table->unsignedTinyInteger('total_byes')->default(0);
            $table->unsignedTinyInteger('total_legbyes')->default(0);
            $table->unsignedTinyInteger('total_noballs')->default(0);
            $table->unsignedTinyInteger('total_wides')->default(0);
            $table->unsignedTinyInteger('total_penalty_runs')->default(0);
            $table->unsignedTinyInteger('total_penalty_wickets')->default(0);
            $table->unsignedTinyInteger('total_maidens')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('innings');
    }
};
