<?php
namespace App\Http\Controllers\Homepage; 

use App\Models\Banner;
use App\Http\Controllers\Controller; 
use Carbon\Carbon;

class BannerController extends Controller
{
    public function show()
    {

        $currentDate = Carbon::now(); 
        //\Log::info($currentDate);

        $banners = Banner::query()
            ->where('active', 1) // only show active banner
            ->where('published_start', '<=', $currentDate) 
            ->where(function ($query) use ($currentDate) {
                $query->whereNull('published_end')
                      ->orWhere('published_end', '>=', $currentDate);
            })
            ->defaultOrder()
            ->get();

        return response()->json([
            'message' => 'Banner for Homepage',
            'banners' => $banners
        ]);
    }
}