<?php

namespace App\Services;

use App\Models\Todo;
use App\Repositories\TodoRepository;
use Illuminate\Http\Request;

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

    public function find(int $id)
    {
        return $this->repo->find($id);
    }

    public function delete(int $id)
    {
        return $this->repo->delete($id);
    }

    public function index(Request $request)
    {
        $query = Todo::with('categories');

        // Filtreleme
        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        if ($request->filled('priority')) {
            $query->where('priority', $request->input('priority'));
        }

        // Sıralama
        $sortable = ['created_at', 'due_date', 'priority'];
        $sort = $request->input('sort', 'created_at');
        $order = $request->input('order', 'desc');

        if (in_array($sort, $sortable)) {
            $query->orderBy($sort, $order === 'asc' ? 'asc' : 'desc');
        }

        // Sayfalama
        $limit = min((int) $request->input('limit', 10), 50); // max 50

        return $query->paginate($limit);
    }
}
