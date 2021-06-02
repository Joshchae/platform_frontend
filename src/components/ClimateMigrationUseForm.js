import React, { useState, useEffect } from 'react'

function ClimateMigrationUseForm() {
    const [values, setValues] = useState({
        region: '',
        country: '',
        location: '',
        title: '',
        story: '',
        picture: '',
        email: '',
        nickname: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    }

    return { handleChange, handleSubmit, values }
}

export default ClimateMigrationUseForm
