import React, { } from 'react'
import { InputText } from '../../../../../libs/FormInput'
import useStore from '../../../../../store'

const PasswordFormComponent = ({isLoading}) => {
    const store = useStore()

    return (
        <div>
            <InputText 
                fieldName='password' 
                placeholder='Password'  
                icon='fa-solid fa-lock'
                isLoading={isLoading}
                type='password'
            />
            <br />
            <InputText 
                fieldName='password_confirmation' 
                placeholder='Confirm Password'  
                icon='fa-solid fa-lock'
                isLoading={isLoading}
                type='password'
            />
 
        </div>
    );
};

export default PasswordFormComponent;