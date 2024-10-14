<?php
namespace App\Http\Controllers\Homepage; 

use App\Models\Topic;
use App\Http\Controllers\Controller; 

class TopicController extends Controller
{
    public function show()
    {
        $topic = Topic::query()
                    ->defaultOrder()
                    ->first();

        return response()->json([
            'message' => 'Topic for Homepage',
            'topic' => $topic
        ]);
    }
}