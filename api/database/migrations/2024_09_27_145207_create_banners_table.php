<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('banners', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->text('redirect_url')->nullable();
            $table->string('filename')->nullable();
            $table->date('published_start')->default(Carbon::now());  // Set default value to current date and time
            $table->date('published_end')->nullable();  // datetime
            $table->boolean('active')->default(false); // is active ?
            $table->timestamps();
            $table->nestedSet(); // Kalnoy nestedset
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
