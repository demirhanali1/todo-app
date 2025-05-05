<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{
    public function create(array $params)
    {
        return Category::create($params);
    }
}
