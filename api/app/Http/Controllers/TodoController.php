<?php

namespace App\Http\Controllers;

use App\Core\ResponseFormatter;
use App\Http\Requests\TodoCreateValidation;
use App\Http\Requests\TodoUpdateValidation;
use App\Services\TodoService;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * @param TodoService $service
     */
    public function __construct(
        private TodoService $service
    ){}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return ResponseFormatter::returnOk(
            message: 'success',
            data: $this->service->index($request)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TodoCreateValidation $request)
    {
        return ResponseFormatter::returnCreated(
            message: 'success',
            data: $this->service->create($request->validated())
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return ResponseFormatter::returnOk(
            message: 'success',
            data: $this->service->find($id)
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TodoUpdateValidation $request, string $id)
    {
        return ResponseFormatter::returnCreated(
            message: 'success',
            data: $this->service->update($request->validated(), $id)
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return ResponseFormatter::returnDeleted(
            message: 'success',
            data: $this->service->delete($id)
        );
    }
}
