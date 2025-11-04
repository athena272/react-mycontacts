import { createPortal } from 'react-dom';
import { Overlay } from './styles';

export default function Loader() {
    const loaderRoot = document.getElementById('loader-root');

    if (!loaderRoot) return null;

    return createPortal(
        <Overlay>
            <div className="loader"></div>
        </Overlay>,
        loaderRoot
    );
}
