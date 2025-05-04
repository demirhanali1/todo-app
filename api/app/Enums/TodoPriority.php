<?php

namespace App\Enums;

enum TodoPriority: string
{
    case Low = 'low';
    case Medium = 'medium';
    case High = 'high';

    public static function values(): array
    {
        return collect(self::cases())->pluck('value')->toArray();
    }
}
