<?php
namespace App\Http\Controllers\Homepage; 

use App\Models\Deejay;
use App\Http\Controllers\Controller; 

class DeejayController extends Controller
{
    public function show()
    {

        $deejays = Deejay::query()
            ->defaultOrder()
            ->get();

        return response()->json([
            'message' => 'Deejay for Deejay',
            'deejays' => $deejays
        ]);
    }
}