<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'players' => [
            [
                "name" => "Max Scherzer",
                "number" => 21
            ],
            [
                "name" => "Jaboc deGrom",
                "number" => 48
            ],
            [
                "name" => "Francisco Lindor",
                "number" => 12
            ],
            [
                "name" => "Luis Guillorme",
                "number" => 13
            ]
        ]
    ]);
});

Route::get('/player', function () {
    return Inertia::render('Player');
});

Route::get('/settings', function () {
    return Inertia::render('Settings', [ "time" => now()->toTimeString() ]);
});

Route::get('/login', function () {
    sleep(2.5);
    return Inertia::render('Login');
});

Route::post('/logout', function () {
    dd("Logging out...");
});
