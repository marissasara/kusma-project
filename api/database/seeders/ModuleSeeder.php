<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Hash;
use App\Models\Module;

class ModuleSeeder extends Seeder
{
    public function run()
    {
        // Modules
        Module::create(['name' => 'banner']);
        Module::create(['name' => 'deejay']);
        Module::create(['name' => 'livestream']);
        Module::create(['name' => 'vote']);

    }
}