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
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if($request->has('photo')){
            //\Log::info($request);
            $deejay = Deejay::create([
                'user_id' =>  auth('sanctum')->user()->id,
                'title' => $request->input('title'),
                'description' => $request->input('description'),
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
        ]);

        $deejay = Deejay::where('id', $deejay->id)->update($request->except(['_method','id']));

        return response()->json(['message' => 'deejay successfully created']);
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