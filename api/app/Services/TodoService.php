<?php

namespace App\Services;

use App\Repositories\TodoRepository;

class TodoService
{
    /**
     * @param TodoRepository $repo
     */
    public function __construct(
        private TodoRepository $repo
    ){}

    public function create(array $data)
    {
        return $this->repo->create($data);
    }
}
