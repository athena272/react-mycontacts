import { useState } from 'react';
import { Button } from '../Button';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Form, ButtonContainer } from './styles';

type ContactFormProps = {
    buttonLabel: string
}

type FormType = {
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

    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('🚀 ~ ContactForm ~ form:', form);
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <FormGroup>
                <Input
                    name='name'
                    placeholder='Insira seu nome'
                    value={form.name}
                    onChange={(event) => handleChange(event)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    name='email'
                    placeholder='Insira seu e-mail'
                    value={form.email}
                    onChange={(event) => handleChange(event)}
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
