<?php

namespace App\Http\Requests\Account;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => [
                    'required',
                    'email',
                    // assuming id is pk
                    Rule::unique('users', 'email')->ignore($this->user->id),
                ],
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