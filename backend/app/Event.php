<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'description', 'title', 'date','timeFrom' ,'timeTo' 
    ];

    protected $casts = [
        'timeFrom' => 'array',
        'timeTo' => 'array',
    ];
}
