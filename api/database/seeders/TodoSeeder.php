<?php

namespace Database\Seeders;

use App\Enums\TodoPriority;
use App\Enums\TodoStatus;
use App\Models\Category;
use App\Models\Todo;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = TodoStatus::values();
        $priorities = TodoPriority::values();
        $categoryIds = Category::pluck('id')->toArray();

        for ($i = 1; $i <= 100; $i++) {
            $todo = Todo::create([
                'title' => "Todo #$i",
                'description' => fake()->boolean ? fake()->sentence(8) : null,
                'status' => fake()->randomElement($statuses),
                'priority' => fake()->randomElement($priorities),
                'due_date' => Carbon::now()->addDays(rand(1, 30)),
            ]);

            // Attach 1-3 random categories
            $todo->categories()->attach(fake()->randomElements($categoryIds, rand(1, 3)));
        }
    }
}
