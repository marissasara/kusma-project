<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Deejay;
use App\Services\CommonService;


class DeejayController extends Controller
{
    public function index()
    {
        $deejays = Deejay::defaultOrder()->paginate(10)->withQueryString(); 
   
        return response()->json(['deejays' => $deejays]);

    }

    public function show(Deejay $deejay)
    {
        return response()->json(['deejay' => $deejay]);
    }

    public function store(Request $request)
    {
        // validation
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'facebook' => 'sometimes|url',
            'instagram' => 'sometimes|url',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if($request->has('photo')){
            //\Log::info($request);
            $deejay = Deejay::create([
                'user_id' =>  auth('sanctum')->user()->id,
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'facebook' => $request->input('facebook'),
                'instagram' => $request->input('instagram'),
                'filename' => CommonService::handleStoreFile($request->file('photo'), $directory = 'deejays'),
            ]);
        
            return response()->json(['message' => 'Deejay creation success']);
        }
    }

    public function update(Request $request,Deejay $deejay)
    {

        //\Log::info($request);
        // validation
        $data = $request->validate([
            'title' => 'sometimes|string',
            'description' => 'sometimes|string',
            'facebook' => 'sometimes|url',
            'instagram' => 'sometimes|url',
        ]);

        if($request->has('photo')){
            // Update the choice record with new data
            $deejay->update([
                'user_id' => auth('sanctum')->user()->id,  // This can remain the same
                'title' => $request->input('title'),        // Update title if provided
                'description' => $request->input('description'),  // Update description if provided
                'facebook' => $request->input('facebook'), 
                'instagram' => $request->input('instagram'), 
                'filename' => $request->hasFile('photo') ? CommonService::handleStoreFile($request->file('photo'), $directory = 'deejays') : $deejay->filename  // Update filename if new file is uploaded
            ]);
        } else {
                    // Update the choice record with new data
            $deejay->update([
                'user_id' => auth('sanctum')->user()->id,  // This can remain the same
                'title' => $request->input('title'),        // Update title if provided
                'description' => $request->input('description'),  // Update description if provided
                'facebook' => $request->input('facebook'), 
                'instagram' => $request->input('instagram'), 
        
            ]);
        }

        return response()->json(['message' => 'deejay successfully updated']);
    }

    public function delete(Request $request,Deejay $deejay)
    {

        $data = $request->validate([
            'acknowledge' => 'required|accepted',
        ]);

        //\Log::info($banner);
        CommonService::handleDeleteFile($deejay->filename, $directory = 'deejays');
        $deejay->delete();
        
        return response()->json(['message' => 'Deejay successfully deleted']);
      

    }

    public function ordering(Deejay $deejay, Request $request)
    {
        //\Log::info($request);
        // reference https://github.com/lazychaser/laravel-nestedset
        switch($request->input('direction')){
            case 'up':
                $deejay->up(); // deejay ordering up
                break;
            case 'down':
                $deejay->down(); //  // deejay ordering down
            break;
        }
        
    }

}