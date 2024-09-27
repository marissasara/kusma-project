<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'acknowledge' => 'required',
           
        ];
    }

    public function messages(): array
    {
        return [
            //'role_id.required' => 'Please select a role.', // Custom error message for role_id field
        ];
    }
}