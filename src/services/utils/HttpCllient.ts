class HttpCllient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get<T = unknown>(path: string): Promise<T> {
        try {
            const response = await fetch(`${this.baseUrl}${path}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json() as Promise<T>;
        } catch (error) {
            console.log('🚀 ~ HttpCllient ~ get ~ error:', error);
            throw error;
        }
    }
}

export default HttpCllient;
