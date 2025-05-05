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

    /**
     * @param string $message
     * @param mixed $data
     * @return JsonResponse
     */
    public static function returnOk(string $message, mixed $data = []): \Illuminate\Http\JsonResponse
    {
        $responseMetaData = [
            'status_code' => 200,
            'message' => $message,
            'data' => $data,
        ];

        return response()->json($responseMetaData, 200);
    }

    /**
     * @param string $message
     * @param mixed $data
     * @return JsonResponse
     */
    public static function returnDeleted(string $message, mixed $data = []): \Illuminate\Http\JsonResponse
    {
        $responseMetaData = [
            'status_code' => 204,
            'message' => $message,
            'data' => $data,
        ];

        return response()->json($responseMetaData, 204);
    }
}
