export default function removeNonDigits(string: string) {
    return string.replace(/\D/g, '');
}
