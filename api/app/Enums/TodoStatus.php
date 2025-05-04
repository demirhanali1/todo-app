<?php

namespace App\Enums;

enum TodoStatus: string
{
    case Pending = 'pending';
    case InProgress = 'in_progress';
    case Completed = 'completed';
    case Cancelled = 'cancelled';

    public static function values(): array
    {
        return collect(self::cases())->pluck('value')->toArray();
    }
}
