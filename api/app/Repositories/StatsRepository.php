<?php

namespace App\Repositories;

use App\Models\Todo;

class StatsRepository
{
    public function countByStatus(): array
    {
        return Todo::select('status')
            ->selectRaw('COUNT(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status')
            ->toArray();
    }

    public function countByPriority(): array
    {
        return Todo::select('priority')
            ->selectRaw('COUNT(*) as count')
            ->groupBy('priority')
            ->pluck('count', 'priority')
            ->toArray();
    }
}
