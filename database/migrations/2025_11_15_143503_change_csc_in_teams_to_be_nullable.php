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
        Schema::table('teams', function (Blueprint $table) {
            $table->dropColumn(['country_id', 'state_id', 'city_id']);
        });
        Schema::table('teams', function (Blueprint $table) {
            $table->foreignId('country_id')->nullable()->after('team_id')->constrained('countries');
            $table->foreignId('state_id')->nullable()->after('team_id')->constrained('states');
            $table->foreignId('city_id')->nullable()->after('team_id')->constrained('cities');
            $table->boolean('is_banned')->default(0)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('be_nullable', function (Blueprint $table) {
            //
        });
    }
};
