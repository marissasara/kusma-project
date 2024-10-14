<?php
namespace App\Http\Controllers\Homepage; 

use App\Models\Choice;
use App\Http\Controllers\Controller; 

class ChoiceController extends Controller
{
    public function index($topicId)
    {
        $choices = Choice::query()
                    ->where('topic_id', $topicId)
                    ->defaultOrder()
                    ->get();

        return response()->json([
            'message' => 'Choices for Topic',
            'choices' => $choices
        ]);
    }
}