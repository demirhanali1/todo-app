<?php

namespace App\Http\Controllers;

use App\Core\ResponseFormatter;
use App\Services\StatsService;

class StatsController extends Controller
{
    /**
     * @param StatsService $service
     */
    public function __construct(
        private StatsService $service
    ){}

    public function todoStatusCounts()
    {
        return ResponseFormatter::returnOk(
            message: 'success',
            data: $this->service->getStatusCounts()
        );
    }

    public function todoPriorityCounts()
    {
        return ResponseFormatter::returnOk(
            message: 'success',
            data: $this->service->getPriorityCounts()
        );
    }
}
