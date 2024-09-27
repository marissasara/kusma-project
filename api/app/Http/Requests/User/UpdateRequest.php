<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'role' => 'sometimes|required',
            'email' => [
                    'required',
                    'email',
                    // assuming id is pk
                    Rule::unique('users', 'email')->ignore($this->user->id),
                ],
            'password' => 'required_if:password_present,true|min:6|confirmed',
            'name' => 'sometimes|required',    
        ];
    }

    public function messages(): array
    {
        return [
            //'role_id.required' => 'Please select a role.', // Custom error message for role_id field
        ];
    }
}