import { Container } from './styles';

type FormGroupProps = {
    children: React.ReactNode
    error?: string | undefined
}

export default function FormGroup({ children, error = undefined }: FormGroupProps) {
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
