<?php

namespace App\Http\Controllers;

use App\Core\ResponseFormatter;
use App\Http\Requests\CategoryCreateValidation;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * @param CategoryService $service
     */
    public function __construct(
        private CategoryService $service
    ){}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ResponseFormatter::returnOk(
            message: 'success',
            data: $this->service->index()
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryCreateValidation $request)
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
