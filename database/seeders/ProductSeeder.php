<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
          'logo' => '/assets/images/brand/brand-01.svg',
          'name' => 'Google',
          'visitors' => 3.5,
          'revenues' => '5,768',
          'sales' => 590,
          'conversion' => 4.8
        ]); 
    }
}
