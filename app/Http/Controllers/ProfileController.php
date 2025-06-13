<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function index()
    {
        $idUserLogin = Auth::user()->id;
        $profile = Profile::with('user')->where('user_id', $idUserLogin)->get();

        return inertia('Profile/Index', [
            'profile' => $profile
        ]);
    }

    public function edit()
    {
        $idUserLogin = Auth::user()->id;
        $profile = User::with('profile')->where('id', $idUserLogin)->get(['id', 'name', 'email', 'role']);
        foreach ($profile as $prf) {
            return inertia('Profile/Edit', [
                'profile' => $prf
            ]);
        }
    }

    public function update(Request $request)
{
    $request->validate([
        'image' => 'nullable|mimes:jpeg,jpg,png,gif',
        'address' => 'nullable|string|max:255',
        'contact' => 'nullable|string|max:20',
        'name' => 'required|string|max:255'
    ]);

    $idUserLogin = Auth::user()->id;

    // Gunakan first() atau find() bukan get() untuk single record
    $profile = Profile::where('user_id', $idUserLogin)->first();
    $user = User::find($idUserLogin);

    // Cek apakah profile ada, jika tidak buat baru
    if (!$profile) {
        $profile = new Profile();
        $profile->user_id = $idUserLogin;
    }

    // Handle image upload
    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = $image->hashName();
        $image->storeAs('profile', $imageName);

        // Hapus gambar lama jika ada
        if ($profile->image && Storage::exists('profile/' . $profile->image)) {
            Storage::delete('profile/' . $profile->image);
        }

        $profile->image = $imageName;
    }

    // Update profile data
    $profile->address = $request->address;
    $profile->contact = $request->contact;
    $profile->save();

    // Update user name
    if ($request->name && $user) {
        $user->name = $request->name;
        $user->save();
    }

    return redirect()->route('profile.index')->with('success', 'Profile berhasil diupdate');
}

public function deleteImage($id)
{
     $imageProfile = Profile::find($id);
     Storage::delete('profile/' . $imageProfile->image);
     $imageProfile->update([
            'image' => null
        ]);
}
}
