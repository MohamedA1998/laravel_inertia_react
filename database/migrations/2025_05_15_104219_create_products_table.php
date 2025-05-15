<?php

use App\Models\Product;
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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('description');
            $table->unsignedSmallInteger('price')->default(1);
            $table->unsignedSmallInteger('price_after_discount')->default(1);
            $table->unsignedSmallInteger('discount')->default(0);
            $table->enum('discount_type', Product::$DISCOUNT_TYPE)->default('fixed');
            $table->unsignedSmallInteger('count')->default(0);
            $table->enum('status', Product::$STATUS)->default('active');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
