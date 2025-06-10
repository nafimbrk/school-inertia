<?php

namespace App\Http\Controllers;

use App\Models\ClassRoom;
use App\Models\Student;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $totalClass = ClassRoom::get()->count();
        $totalStudent = Student::get()->count();

        return inertia('Dashboard/Index', [
            'totalClass' => $totalClass,
            'totalStudent' => $totalStudent
        ]);
    }
}
