<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::get('todos/search', [TodoController::class, 'search']);
Route::apiResource('todos', TodoController::class);
Route::apiResource('categories', CategoryController::class);
