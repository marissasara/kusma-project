import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitButton = ({isLoading, value = 'Submit'}) => {
    return (
        <Button disabled={isLoading} variant="primary" type="submit">
            {isLoading ? 'loading...' : value}
        </Button>
    );
};

export default SubmitButton;