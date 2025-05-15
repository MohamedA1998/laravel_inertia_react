<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
Route::get('/', fn() => to_route('product.index'));

Route::resource('product', ProductController::class);
