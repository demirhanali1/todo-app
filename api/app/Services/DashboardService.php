<?php

namespace App\Services;

use App\Repositories\StatsRepository;
use App\Repositories\TodoRepository;

class DashboardService
{
    public function index()
    {
        $statusCount = (new StatsRepository())->countByStatus();
        $priorityCount = (new StatsRepository())->countByPriority();
        $upcomingTodos = (new TodoRepository())->upcoming();

        return [
            'statusCount' => $statusCount,
            'priorityCount' => $priorityCount,
            'upcomingTodos' => $upcomingTodos
        ];
    }
}
