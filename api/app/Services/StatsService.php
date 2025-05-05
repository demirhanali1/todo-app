<?php

namespace App\Services;

use App\Repositories\StatsRepository;

class StatsService
{
    /**
     * @param StatsRepository $repo
     */
    public function __construct(
        private StatsRepository $repo
    ){}

    public function getStatusCounts(): array
    {
        return $this->repo->countByStatus();
    }

    public function getPriorityCounts(): array
    {
        return $this->repo->countByPriority();
    }
}
