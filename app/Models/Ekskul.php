<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ekskul extends Model
{
    /**
     * Get all of the comments for the Ekskul
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ekskul_student(): HasMany
    {
        return $this->hasMany(Ekskul::class);
    }
}
