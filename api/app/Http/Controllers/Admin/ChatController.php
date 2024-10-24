<?php
namespace App\Http\Controllers\Admin; 

use Illuminate\Support\Facades\Auth;
use App\Models\Chat;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;

class ChatController extends Controller
{

    public function store(Request $request)
    {
        // $user_id = Auth::user()->id;
        //\Log::info($request);
        Chat::create([
            'user_id' => Auth::user()->id,
            'is_admin' => true,
            'username' => Auth::user()->name,
            'message' => $request->input('message'),
        ]);

        return response()->json(['message' => 'message received']);
    }

    public function index()
    {
        $chats = Chat::limit(50)->get();
        return response()->json(['chats' => $chats]);
    }

    public function delete(Chat $chat)
    {
        $chat->delete();
        return response()->json(['message' => 'chat deleted']);
    }
}