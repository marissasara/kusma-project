<?php
namespace App\Http\Controllers\Homepage; 

use App\Models\Vote;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function store(Request $request)
    {
        \Log::info($request);
        Vote::create([
            'topic_id' => $request->input('topic_id'),
            'choice_id' => $request->input('choice_id')
        ]);

        return response()->json(['message' => 'Successfully voted']);
    }
}