<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Topic;
use App\Services\CommonService;


class TopicController extends Controller
{
    public function index()
    {
        $topics = Topic::defaultOrder()->paginate(10)->withQueryString(); 
   
        return response()->json(['topics' => $topics]);

    }

    public function show(Topic $topic)
    {
        return response()->json(['topic' => $topic]);
    }

    public function store(Request $request)
    {
        // validation
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
        ]);

        $topic = Topic::create([
            'user_id' =>  auth('sanctum')->user()->id,
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);
    }

    public function update(Request $request,Topic $topic)
    {

        //\Log::info($request);
        // validation
        $data = $request->validate([
            'description' => 'sometimes|string',
        ]);

        $topic = Topic::where('id', $topic->id)->update($request->except(['_method','id']));

        return response()->json(['message' => 'topic successfully created']);
    }

    public function delete(Request $request,Topic $topic)
    {

        $data = $request->validate([
            'acknowledge' => 'required|accepted',
        ]);

        //\Log::info($banner);
        //CommonService::handleDeleteFile($topic->filename, $directory = 'topics');
        $topic->delete();
        
        return response()->json(['message' => 'Topic successfully deleted']);
      

    }

    public function ordering(Topic $topic, Request $request)
    {
        //\Log::info($request);
        // reference https://github.com/lazychaser/laravel-nestedset
        switch($request->input('direction')){
            case 'up':
                $topic->up(); // topic ordering up
                break;
            case 'down':
                $topic->down(); //  // deejay ordering down
            break;
        }
        
    }

}