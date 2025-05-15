<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home', [
        'name' => 'Mohamed atya',
        'app' => env('APP_NAME')
    ]);
});
