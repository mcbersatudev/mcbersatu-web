<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/guide', function () {
    return Inertia::render('guide');
})->name('guide');

Route::get('/help', function () {
    return Inertia::render('help');
})->name('help');