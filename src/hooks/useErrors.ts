import { useState } from 'react';
import type { FormType } from '../components/ContactForm';

type ErrorObject = {
    field: keyof FormType,
    message: string
}

export default function useErrors() {
    const [errors, setErrors] = useState<ErrorObject[]>([]);

    function setError({ field, message }: ErrorObject) {
        setErrors(prev => {
            const exists = prev.some(error => error.field === field);
            return exists ? prev : [...prev, { field, message }];
        });
    }

    function removeError(fieldName: keyof FormType) {
        setErrors(prev => prev.filter(error => error.field !== fieldName));
    }

    function getErrorMessageByFieldName(fieldName: keyof FormType): string | undefined {
        return errors.find((error) => error.field === fieldName)?.message;
    }

    return {
        errors,
        setError,
        removeError,
        getErrorMessageByFieldName,
    };
}
