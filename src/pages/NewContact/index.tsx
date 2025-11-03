import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
    return (
        <>
            <PageHeader
                title='Novo contato'
            />
            <ContactForm
                buttonLabel='Cadastrar'
            />

            {/* <Input placeholder='Insira o nome' />
            <Select>
                <option value='123'>Instagram</option>
                <option value='123'>Instagram</option>
                <option value='123'>Instagram</option>
            </Select>
            <Button type='button'>
                Salvar alterações
            </Button>
            <Button type='button' disabled>
                Salvar alterações
            </Button> */}
        </>
    );
};
