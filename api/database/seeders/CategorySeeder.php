<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Work', 'color' => '#ff5733'],
            ['name' => 'Personal', 'color' => '#33ff57'],
            ['name' => 'Urgent', 'color' => '#3357ff'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
