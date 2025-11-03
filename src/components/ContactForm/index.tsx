import { Button } from '../Button';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Form, ButtonContainer } from './styles';

type ContactFormProps = {
    buttonLabel: string
}

export default function ContactForm({ buttonLabel }: ContactFormProps) {
    return (
        <Form>
            <FormGroup>
                <Input placeholder='Insira seu nome' />
            </FormGroup>
            <FormGroup>
                <Input placeholder='Insira seu e-mail' />
            </FormGroup>
            <FormGroup>
                <Input placeholder='Insira seu telefone' />
            </FormGroup>
            <FormGroup>
                <Select>
                    <option value='instagram'>Instagram</option>
                </Select>
            </FormGroup>
            <ButtonContainer>
                <Button type='button'>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
};
