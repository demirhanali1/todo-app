<?php

namespace App\Services;

use App\Repositories\CategoryRepository;

class CategoryService
{
    /**
     * @param CategoryRepository $repo
     */
    public function __construct(
        private CategoryRepository $repo
    ){}

    public function create(array $data)
    {
        return $this->repo->create($data);
    }

    public function index()
    {
        return $this->repo->all();
    }
}
