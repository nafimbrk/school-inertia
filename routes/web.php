<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;

Route::get('/register', [RegisterController::class, 'index'])->name('register')->middleware('guest');
Route::post('/register', [RegisterController::class, 'store'])->name('register.store');
Route::get('/', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/login', [LoginController::class, 'store'])->name('login.store');
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth')->name('logout');
Route::get('/dashboard', DashboardController::class)->middleware('auth')->name('dashboard');
Route::inertia('/admin', 'Admin')->middleware(['auth', 'admin'])->name('admin');

Route::middleware('auth')->group(function () {
    Route::prefix('class')->group(function () {
        Route::name('class.')->group(function () {
            Route::get('/', [ClassController::class, 'index'])->name('index');
            Route::get('/create', [ClassController::class, 'create'])->name('create')->middleware('admin');
            Route::post('/', [ClassController::class, 'store'])->name('store');
            Route::get('/{id}/edit', [ClassController::class, 'edit'])->name('edit')->middleware('admin');
            Route::put('/{id}', [ClassController::class, 'update'])->name('update');
            Route::delete('/{id}', [ClassController::class, 'destroy'])->name('destroy');
        });
    });
});
Route::middleware('auth')->group(function () {
    Route::prefix('student')->group(function () {
        Route::name('student.')->group(function () {
            Route::get('/', [StudentController::class, 'index'])->name('index');
            Route::get('/create', [StudentController::class, 'create'])->name('create')->middleware('admin');
            Route::post('/', [StudentController::class, 'store'])->name('store');
            Route::get('/{id}/edit', [StudentController::class, 'edit'])->name('edit')->middleware('admin');
            Route::put('/{id}', [StudentController::class, 'update'])->name('update');
            Route::delete('/{id}', [StudentController::class, 'destroy'])->name('destroy');
        });
    });
});


