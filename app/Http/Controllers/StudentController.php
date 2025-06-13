<?php

namespace App\Http\Controllers;

use App\Models\ClassRoom;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $students = Student::with('class')
                ->where('name', 'like', "%$search%")
                ->orwhere('gender', 'like', "%$search%")
                ->orwhereHas('class', function($q) use ($search) {
                    $q->where('name', 'like', "%$search%");
                })
                ->paginate(2);

        return inertia('Student/Index', [
            'students' => $students,
            'filters' => [
                'search' => $search
            ]
        ]);
    }

    public function create()
    {
        $class = ClassRoom::select('id', 'name')->get();

        return inertia('Student/Create', [
            'classRoom' => $class
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'class_room_id' => 'nullable',
            'name' => 'required',
            'gender' => 'in:L,P',
            'image' => 'nullable|mimes:jpeg,jpg,png,gif'
        ]);

       if ($request->file('image')) {
            $image = $request->file('image');
            $image->storeAs('image', $image->hashName());

            Student::create([
                'class_room_id' => $request->class_room_id,
                'name' => $request->name,
                'gender' => $request->gender,
                'image' => $image->hashName()
            ]);
       } else {
           Student::create([
               'class_room_id' => $request->class_room_id,
               'name' => $request->name,
               'gender' => $request->gender
            ]);
        }

        return redirect()->route('student.index')->with('success', 'data berhasil ditambahkan');
    }

    public function edit(string $id)
    {
        $student = Student::find($id);

        $class = ClassRoom::select('id', 'name')->get();

        return inertia('Student/Edit', [
            'student' => $student,
            'classRoom' => $class
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'class_room_id' => 'required',
            'name' => 'required',
            'gender' => 'in:L,P',
            'image' => 'nullable|mimes:jpeg,jpg,png,gif'
        ]);

        $student = Student::find($id);

        if ($request->file('image')) {
            $image = $request->file('image');
            $image->storeAs('image', $image->hashName());

            Storage::delete('image/' . basename($student->image));

            $student->update([
                'class_room_id' => $request->class_room_id,
                'name' => $request->name,
                'gender' => $request->gender,
                'image' => $image->hashName()
            ]);
        } else {
            $student->update([
                'class_room_id' => $request->class_room_id,
                'name' => $request->name,
                'gender' => $request->gender
            ]);
        }

        return redirect()->route('student.index')->with('success', 'data berhasil diubah');
    }

     public function destroy(string $id)
    {
        $student = Student::find($id);

        Storage::delete('image/' . basename($student->image));

        $student->delete();

        return redirect()->route('student.index')->with('success', 'data berhasil dihapus');
    }
}
