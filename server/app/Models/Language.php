<?php

namespace App\Models;

use App\Models\Offer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    public function offer(){
        return $this->belongsTo(Offer ::class);
}}
    