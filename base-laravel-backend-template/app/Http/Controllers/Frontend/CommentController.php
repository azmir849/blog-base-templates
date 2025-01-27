<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function store(Request $request, $id)
    {
        $validation = Validator::make($request->all(), [
            'name' => ['required'],
            'email' => ['required', 'email'],
            'comment' => ['required']
        ]);
        if ($validation->fails()) {
            return response()->json([
                'success' => true,
                'message' => $validation->errors()->all(),
            ]);
        } else {
            $result = Comment::create([
                'post_id' => $id,
                'parent_id' => $request->parent_id,
                'name' => $request->name,
                'email' => $request->email,
                'comment' => $request->comment,
            ]);
            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Comment create Successfully.Your comment will be enlisted very soon...'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Some Problem'
                ]);
            }
        }
    }

    public function getComments()
    {
        try {
            $comments = Comment::orderBy('id', 'desc')->get();
            return response()->json([
                'success' => true,
                'comments' => $comments
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'comments' => $e->getMessage(),
            ]);
        }
    }
}
