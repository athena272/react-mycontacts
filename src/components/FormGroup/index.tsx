import { Container } from './styles';

type FormGroupProps = {
    children: React.ReactNode
}

export default function FormGroup({ children }: FormGroupProps) {
    return (
        <Container>
            {children}
        </Container>
    );
};
