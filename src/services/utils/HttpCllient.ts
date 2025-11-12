class HttpCllient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get<T = unknown>(path: string): Promise<T> {
        const response = await fetch(`${this.baseUrl}${path}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json() as Promise<T>;
    }
}

export default HttpCllient;
