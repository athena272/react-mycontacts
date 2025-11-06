import { useState } from 'react';
import isEmailValid from '../../utils/isEmailValid';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';
import removeNonDigits from '../../utils/removeNonDigits';

type ContactFormProps = {
    buttonLabel: string
}

export type FormType = {
    name: string,
    email: string,
    phone: string,
    category: string
}

export default function ContactForm({ buttonLabel }: ContactFormProps) {
    const [form, setForm] = useState<FormType>({
        name: '',
        email: '',
        phone: '',
        category: '',
    });
    const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

    const isFormValid = (form.name && errors.length === 0);

    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
        handleChange(event);

        if (!event.target.value) {
            setError({ field: 'name', message: 'Nome é obrigatório' });
        }
        else {
            removeError('name');
        }
    }

    function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
        handleChange(event);
        const emailInput = event.target.value;

        if (emailInput && !isEmailValid(emailInput)) {
            setError({ field: 'email', message: 'O formato do e-mail é inválido.' });
        }
        else {
            removeError('email');
        }
    }

    function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
        setForm(prev => ({
            ...prev,
            phone: formatPhone(event.target.value)
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setForm(prev => ({
            ...prev,
            phone: removeNonDigits(form.phone)
        }));

    }

    console.log('🚀 ~ ContactForm ~ form:', form);
    console.log('🚀 ~ ContactForm ~ errors:', errors);
    console.log('🚀 ~ ContactForm ~ isFormValid:', isFormValid);

    return (
        <Form onSubmit={(event) => handleSubmit(event)} noValidate>
            <FormGroup error={getErrorMessageByFieldName('name')}>
                <Input
                    $error={Boolean(getErrorMessageByFieldName('name'))}
                    name='name'
                    placeholder='Insira seu nome *'
                    value={form.name}
                    onChange={handleChangeName}
                />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName('email')}>
                <Input
                    $error={Boolean(getErrorMessageByFieldName('email'))}
                    name='email'
                    placeholder='Insira seu e-mail'
                    value={form.email}
                    type='email'
                    onChange={handleChangeEmail}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    name='phone'
                    placeholder='Insira seu telefone'
                    maxLength={15}
                    value={form.phone}
                    onChange={handlePhoneChange}
                />
            </FormGroup>
            <FormGroup>
                <Select
                    name='category'
                    value={form.category}
                    onChange={handleChange}
                >
                    <option value={''} disabled>Selecione a categoria</option>
                    <option value='instagram'>Instagram</option>
                    <option value='linkedin'>LinkedIn</option>
                </Select>
            </FormGroup>
            <ButtonContainer>
                <Button type='submit' disabled={!isFormValid}>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
};
