<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    sleep(3);
    return inertia('Home', [
        'name' => 'Mohamed atya',
        'app' => env('APP_NAME')
    ]);
});
