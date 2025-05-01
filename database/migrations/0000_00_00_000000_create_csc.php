<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

return new class extends Migration

{
    public function up(): void{
        $sql_dump = File::get(base_path('database/migrations/csc.sql'));
        DB::connection()->getPdo()->exec($sql_dump);
    }

    public function down(): void

    {
        Schema::dropIfExists('cities');
        Schema::dropIfExists('states');
        Schema::dropIfExists('countries');

    }

};