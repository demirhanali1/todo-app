<?php

namespace App\Repositories;

use App\Models\Todo;
use Illuminate\Support\Facades\DB;

class TodoRepository
{
    public function create(array $data)
    {
        DB::beginTransaction();

        try {
            $todo = Todo::create([
                'title' => $data['title'],
                'description' => $data['description'],
                'status' => $data['status'],
                'priority' => $data['priority'],
                'due_date' => $data['due_date'],
            ]);

            $todo->categories()->sync($data['category_ids']);

            DB::commit();

            return $todo->load('categories');

        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function find(int $id)
    {
        return Todo::with('categories')->where('id', $id)->firstOrFail();
    }
}
