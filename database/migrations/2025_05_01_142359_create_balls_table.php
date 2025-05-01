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
        Schema::create('balls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('over_id')->constrained('overs');
            $table->foreignId('bowler')->constrained('players');
            $table->foreignId('batsman')->constrained('players');
            $table->unsignedInteger('ball_no');
            $table->unsignedInteger('runs');
            $table->boolean('is_wicket')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('balls');
    }
};
