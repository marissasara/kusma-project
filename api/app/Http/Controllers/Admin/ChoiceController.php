<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Choice;
use App\Services\CommonService;


class ChoiceController extends Controller
{
    public function index()
    {
        $choices = Choice::defaultOrder()->paginate(10)->withQueryString(); 
   
        return response()->json(['choices' => $choices]);

    }

    public function show(Choice $choice)
    {
        return response()->json(['choice' => $choice]);
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
            $choice = Choice::create([
                'user_id' =>  auth('sanctum')->user()->id,

                'description' => $request->input('description'),
                'filename' => CommonService::handleStoreFile($request->file('photo'), $directory = 'choices'),
            ]);
        
            return response()->json(['message' => 'Choice creation success']);
        }
    }

    public function update(Request $request,Choice $choice)
    {

        //\Log::info($request);
        // validation
        $data = $request->validate([

            'description' => 'sometimes|string',
        ]);

        $choice = Choice::where('id', $choice->id)->update($request->except(['_method','id']));

        return response()->json(['message' => 'choice successfully created']);
    }

    public function delete(Request $request,Choice $choice)
    {

        $data = $request->validate([
            'acknowledge' => 'required|accepted',
        ]);

        //\Log::info($banner);
        CommonService::handleDeleteFile($choice->filename, $directory = 'choices');
        $choice->delete();
        
        return response()->json(['message' => 'Choice successfully deleted']);
      

    }

    public function ordering(Choice $choice, Request $request)
    {
        //\Log::info($request);
        // reference https://github.com/lazychaser/laravel-nestedset
        switch($request->input('direction')){
            case 'up':
                $choice->up(); // choice ordering up
                break;
            case 'down':
                $choice->down(); //  // choice ordering down
            break;
        }
        
    }

}