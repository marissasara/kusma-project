import React, { } from 'react'
import { InputText } from '../../../../../libs/FormInput'
import useStore from '../../../../../store'

const HtmlFormComponent = ({isLoading}) => {
    const store = useStore()

    return (
        <div>
            <InputText 
                fieldName='name' 
                placeholder='Name'  
                icon='fa-solid fa-user'
                isLoading={isLoading}
            />
            <br />
            <InputText 
                fieldName='email' 
                placeholder='E-mail'  
                icon='fa-solid fa-envelope'
                isLoading={isLoading}
                type='email'
            />
 
        </div>
    );
};

export default HtmlFormComponent;