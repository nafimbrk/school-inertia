<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentEkskul extends Model
{
    /**
     * Get the user that owns the StudentEkskul
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }
    public function student_ekskul(): BelongsTo
    {
        return $this->belongsTo(Ekskul::class);
    }
}
