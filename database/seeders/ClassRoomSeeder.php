<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('class_rooms')->insert([
            ['name' => 'A1'],
            ['name' => 'A2'],
            ['name' => 'A4'],
            ['name' => 'B4'],
            ['name' => 'C7']
        ]);
    }
}
