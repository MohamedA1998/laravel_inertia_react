<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    sleep(3);
    return inertia('Home', [
        'name' => 'Mohamed atya',
        'app' => env('APP_NAME')
    ]);
});

Route::resource('product', ProductController::class);
