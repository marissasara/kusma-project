<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Footer;
use App\Services\CommonService;


class FooterController extends Controller
{
    public function index()
    {
    
        // Fetch the footers related to the topic, paginated with 10 per page
        //$footers = Footer::defaultOrder()->paginate(10)->withQueryString();
        $footers = Footer::select('*')
                    //->orderBy('hashtag')
                    ->defaultOrder()
                    ->paginate(10)
                    ->withQueryString();

    
        return response()->json([
            'footers' => $footers
        ]);
    }
    

    public function show(Footer $footer)
    {
        return response()->json(['footer' => $footer]);
    }

    public function store(Request $request)
    {
        // validation
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'hashtag' => 'required|string',
            //'photo' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        
        if($request->has('photo')){
            //\Log::info($request);
            $footer = Footer::create([
                'user_id' =>  auth('sanctum')->user()->id,
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'hashtag' => $request->input('hashtag'),
                //'filename' => CommonService::handleStoreFile($request->file('photo'), $directory = 'footers'),
            ]);
        } else {
            $footer = Footer::create([
                'user_id' =>  auth('sanctum')->user()->id,
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'hashtag' => $request->input('hashtag'),
            ]);
        }

        return response()->json(['message' => 'Footer creation success']);
    }

    public function update(Request $request,Footer $footer)
    {

        //\Log::info($request);
        // validation
        $data = $request->validate([
            'title' => 'sometimes|string',
            'description' => 'sometimes|string',
            'hashtag' => 'sometimes|string',
            //'photo' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

       
        if($request->has('photo')){
            // Update the footer record with new data
            $footer->update([
                'user_id' => auth('sanctum')->user()->id,  // This can remain the same
                'title' => $request->input('title'),        // Update title if provided
                'description' => $request->input('description'),  // Update description if provided
                'hashtag' => $request->input('hashtag'),  // Update description if provided
                //'filename' => $request->hasFile('photo') ? CommonService::handleStoreFile($request->file('photo'), $directory = 'footers') : $footer->filename  // Update filename if new file is uploaded
            ]);
        } else {
                    // Update the footer record with new data
            $footer->update([
                'user_id' => auth('sanctum')->user()->id,  // This can remain the same
                'title' => $request->input('title'),        // Update title if provided
                'description' => $request->input('description'),  // Update description if provided
                'hashtag' => $request->input('hashtag'),  // Update description if provided
        
            ]);
        }

        return response()->json(['message' => 'footer successfully updated']);
    }

    public function delete(Request $request,Footer $footer)
    {

        $data = $request->validate([
            'acknowledge' => 'required|accepted',
        ]);

        //\Log::info($banner);
        CommonService::handleDeleteFile($footer->filename, $directory = 'footers');
        $footer->delete();
        
        return response()->json(['message' => 'Footer successfully deleted']);
      

    }

    public function ordering(Footer $footer, Request $request)
    {
        //\Log::info($request);
        // reference https://github.com/lazychaser/laravel-nestedset
        switch($request->input('direction')){
            case 'up':
                $footer->up(); // footer ordering up
                break;
            case 'down':
                $footer->down(); //  // footer ordering down
            break;
        }
        
    }

}