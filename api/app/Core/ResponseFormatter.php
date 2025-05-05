<?php

namespace App\Core;

use Illuminate\Http\JsonResponse;

class ResponseFormatter
{
    /**
     * @param string $message
     * @param array $data
     * @return JsonResponse
     */
    public static function returnCreated(string $message, mixed $data = []): \Illuminate\Http\JsonResponse
    {
        $responseMetaData = [
            'status_code' => 201,
            'message' => $message,
            'data' => $data,
        ];

        return response()->json($responseMetaData, 201);
    }
}
