<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\StatsController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::get('todos/search', [TodoController::class, 'search']);
Route::apiResource('todos', TodoController::class);
Route::apiResource('categories', CategoryController::class);

Route::prefix('stats')->group(function () {
    Route::get('todos', [StatsController::class, 'todoStatusCounts']);
    Route::get('priorities', [StatsController::class, 'todoPriorityCounts']);
});
