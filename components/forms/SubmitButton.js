import React from 'react';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';


function SubmitButton({ title, isValid }) {
    const { handleSubmit } = useFormikContext();
    
    return (
        <AppButton
              onPress={handleSubmit}
              title={title}
              
            />
    );
}

export default SubmitButton;