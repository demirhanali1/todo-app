<?php

namespace App\Http\Controllers;

use App\Core\ResponseFormatter;
use App\Services\DashboardService;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * @param DashboardService $service
     */
    public function __construct(
        private DashboardService $service
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
    public function store(Request $request)
    {
        //
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
