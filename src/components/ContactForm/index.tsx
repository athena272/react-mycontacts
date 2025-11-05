import { useState } from 'react';
import isEmailValid from '../../utils/isEmailValid';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import useErrors from '../hooks/useErrors';

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
    const { setError, removeError, getErrorMessageByFieldName } = useErrors();

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

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('🚀 ~ ContactForm ~ form:', form);
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <FormGroup error={getErrorMessageByFieldName('name')}>
                <Input
                    $error={Boolean(getErrorMessageByFieldName('name'))}
                    name='name'
                    placeholder='Insira seu nome'
                    value={form.name}
                    onChange={(event) => handleChangeName(event)}
                />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName('email')}>
                <Input
                    $error={Boolean(getErrorMessageByFieldName('email'))}
                    name='email'
                    placeholder='Insira seu e-mail'
                    value={form.email}
                    onChange={(event) => handleChangeEmail(event)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    name='phone'
                    placeholder='Insira seu telefone'
                    value={form.phone}
                    onChange={(event) => handleChange(event)}
                />
            </FormGroup>
            <FormGroup>
                <Select
                    name='category'
                    value={form.category}
                    onChange={(event) => handleChange(event)}
                >
                    <option value={''} disabled>Selecione a categoria</option>
                    <option value='instagram'>Instagram</option>
                    <option value='linkedin'>LinkedIn</option>
                </Select>
            </FormGroup>
            <ButtonContainer>
                <Button type='submit'>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
};
