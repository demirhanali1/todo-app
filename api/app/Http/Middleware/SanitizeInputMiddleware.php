<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SanitizeInputMiddleware
{
    /**
     * Handle an incoming request.
     *
     * Bu middleware input içinde birden fazla boşluk varsa tek bir boşluk haline getirir.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $sanitized = collect($request->all())->map(function ($value) {
            return is_string($value) ? trim(preg_replace('/\s+/', ' ', $value)) : $value;
        });

        $request->merge($sanitized->toArray());

        return $next($request);
    }
}
