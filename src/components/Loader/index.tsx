import { createPortal } from 'react-dom';
import { Overlay } from './styles';

type LoaderProps = {
    isLoading: boolean
}

export default function Loader({ isLoading }: LoaderProps) {
    const loaderRoot = document.getElementById('loader-root');

    if (!loaderRoot) return null;

    if (!isLoading) return null;

    return createPortal(
        <Overlay>
            <div className="loader"></div>
        </Overlay>,
        loaderRoot
    );
}
