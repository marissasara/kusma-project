<?php
namespace App\Http\Controllers\Homepage; 

use App\Models\Chat;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;

class ChatController extends Controller
{

    public function store(Request $request)
    {
        //\Log::info($request);
        Chat::create([
            'username' => $request->input('username'),
            'message' => $request->input('message'),
        ]);

        return response()->json(['message' => 'message received']);
    }

    public function index()
    {
        $chats = Chat::limit(50)->get();
        return response()->json(['chats' => $chats]);
    }
}