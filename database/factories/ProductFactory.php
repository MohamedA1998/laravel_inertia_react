<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->sentence(3);
        $slug = Str::slug($name);
        $price = rand(250, 5000);
        $discount_type = fake()->randomElement(Product::$DISCOUNT_TYPE);
        $discount = ($discount_type == 'fixed') ? rand(0,300) : rand(0,100);
        $price_after_discount = ($discount_type == 'fixed') ? $price - $discount : $price - ($price * ($discount / 100));

        return [
            'name' => $name,
            'slug' => $slug,
            'description' => fake()->sentence(),
            'price' => $price,
            'price_after_discount' => $price_after_discount,
            'discount' => rand(0,100),
            'discount_type' => $discount_type,
            'count' => rand(0, 100),
            'status' => fake()->randomElement(Product::$STATUS),
        ];
    }
}
