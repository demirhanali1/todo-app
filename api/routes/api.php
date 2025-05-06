<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\StatsController;
use App\Http\Controllers\TodoController;
use App\Http\Middleware\SanitizeInputMiddleware;
use Illuminate\Support\Facades\Route;

Route::middleware([SanitizeInputMiddleware::class])->group(function () {
    Route::get('todos/search', [TodoController::class, 'search']);
    Route::apiResource('todos', TodoController::class);
    Route::apiResource('categories', CategoryController::class);

    Route::prefix('stats')->group(function () {
        Route::get('todos', [StatsController::class, 'todoStatusCounts']);
        Route::get('priorities', [StatsController::class, 'todoPriorityCounts']);
    });

    Route::apiResource('dashboard', DashboardController::class);
});
