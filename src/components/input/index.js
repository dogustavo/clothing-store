import React from 'react';

const FormInput = ({ handleChange, label, ...props }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...props} />
        {
            label 
            ?
                (<label className={`${props.value.length ? 'srhink' : ''} form-input-label`}>
                    {label}
                </label>)
            :
                null
        }
    </div>
);

export default FormInput;