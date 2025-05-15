<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home', [
        'name' => 'Mohamed',
        'app' => env('APP_NAME')
    ]);
});
