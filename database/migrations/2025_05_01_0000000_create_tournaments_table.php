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
        Schema::create('tournaments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('tournament_id')->unique();
            $table->foreignId('country_id')->constrained('countries');
            $table->foreignId('state_id')->constrained('states');
            $table->foreignId('city_id')->constrained('cities');
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status', ['upcoming', 'ongoing', 'completed'])->default('upcoming');
            $table->longText('description')->nullable();
            $table->foreignId('user_id')->constrained('users');
            $table->string('venue')->nullable();
            $table->integer('prize_money')->default(0);
            $table->integer('entry_fee')->default(0);
            $table->string('registration_deadline')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('website')->nullable();
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->string('youtube')->nullable();
            $table->string('logo')->nullable();
            $table->string('banner')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournaments');
    }
};
