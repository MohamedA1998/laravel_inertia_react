<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home', [
        'name' => 'Mohamed Atya',
        'app' => env('APP_NAME')
    ]);
});
