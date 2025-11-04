import { Container } from './styles';

type FormGroupProps = {
    children: React.ReactNode
    error?: string | null
}

export default function FormGroup({ children, error = null }: FormGroupProps) {
    return (
        <Container>
            {children}
            {
                error && (
                    <small>{error}</small>
                )
            }
        </Container>
    );
};
