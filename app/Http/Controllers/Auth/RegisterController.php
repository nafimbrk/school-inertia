<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function index()
    {
        return inertia('Auth/Register');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        /**
         * validate request
         */
        $request->validate([
            'name'      => 'required',
            'email'     => 'required|unique:users',
            'password'  => 'required'
        ]);

        /**
         * create user
         */
        User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => bcrypt($request->password)
        ]);

        //redirect
        return redirect()->route('login')->with('status', 'Register Berhasil!');
    }
}
