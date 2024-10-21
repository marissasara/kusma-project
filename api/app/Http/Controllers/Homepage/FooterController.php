<?php
namespace App\Http\Controllers\Homepage; 

use App\Models\Footer;
use App\Http\Controllers\Controller; 

class FooterController extends Controller
{


    /*
    * Content for Footer ( Address, single content )
    */
    public function hashtag($hashtag)
    {
        $footers = Footer::query()
                    ->where('hashtag', $hashtag)
                    ->defaultOrder()
                    ->get();

        return response()->json([
            'message' => 'Footer for Homepage',
            'footers' => $footers
        ]);
    }

    /*
    * Content for Footer ( Address, single content )
    * search by hashtag address and use the latest one
    * as single content
    */
    public function address()
    {
        $address = Footer::query()
                    ->where('hashtag', 'footer-address')
                    ->defaultOrder()
                    ->first();

        return response()->json([
            'message' => 'Address for Homepage',
            'address' => $address
        ]);
    }

    
    /*
    * Content for Footer ( Show, $footer is ID )
    */
    public function show($footer)
    {
        $footer = Footer::query()
                    ->where('id', $footer)
                    ->first();

        return response()->json([
            'message' => 'Footer for Homepage',
            'footer' => $footer
        ]);
    }
}