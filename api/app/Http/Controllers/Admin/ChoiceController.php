<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Topic;
use App\Models\Choice;
use App\Services\CommonService;


class ChoiceController extends Controller
{
    public function index($topicId)
    {
        // Fetch the topic by its ID
        $topic = Topic::find($topicId);
    
        // Check if the topic exists
        if (!$topic) {
            return response()->json([
                'message' => 'Topic not found.'
            ], 404);
        }
    
        // Fetch the choices related to the topic, paginated with 10 per page
        $choices = Choice::withCount('votes')->where('topic_id', $topicId)->defaultOrder()->paginate(10)->withQueryString();
    
        return response()->json([
            'topic' => $topic,
            'choices' => $choices
        ]);
    }
    

    public function show(Choice $choice)
    {
        return response()->json(['choice' => $choice]);
    }

    public function store(Request $request)
    {
        // validation
        $request->validate([
            'topic_id' => 'required|integer|exists:topics,id',  // Ensure topic_id exists in the 'topics' table
            'title' => 'required|string',
            'description' => 'required|string',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'songfile' => 'required|mimes:mp3|max:10048'
        ]);

        if($request->has('photo') && $request->has('songfile') ){
            //\Log::info($request);
            $choice = Choice::create([
                'user_id' =>  auth('sanctum')->user()->id,
                'topic_id' => $request->input('topic_id'),
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'filename' => CommonService::handleStoreFile($request->file('photo'), $directory = 'choices'),
                'songfile' => CommonService::handleStoreFile($request->file('songfile'), $directory = 'songfiles'),
            ]);
        
            return response()->json(['message' => 'Choice creation success']);
        }
    }

    public function update(Request $request,Choice $choice)
    {

        //\Log::info($request);
        // validation
        $data = $request->validate([

            'title' => 'sometimes|string',
            'description' => 'sometimes|string',
            'photo' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            //'songfile' => 'sometimes|mimes:mp3|max:10048'
        ]);

       
        if($request->has('photo')){
            // Update the choice record with new data
            $choice->update([
                'user_id' => auth('sanctum')->user()->id,  // This can remain the same
                'title' => $request->input('title'),        // Update title if provided
                'description' => $request->input('description'),  // Update description if provided
                'filename' => $request->hasFile('photo') ? CommonService::handleStoreFile($request->file('photo'), $directory = 'choices') : $choice->filename  // Update filename if new file is uploaded
            ]);
        } else {
                    // Update the choice record with new data
            $choice->update([
                'user_id' => auth('sanctum')->user()->id,  // This can remain the same
                'title' => $request->input('title'),        // Update title if provided
                'description' => $request->input('description'),  // Update description if provided
        
            ]);
        }

        return response()->json(['message' => 'choice successfully updated']);
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