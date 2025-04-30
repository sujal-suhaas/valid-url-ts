import type { IncomingMessage } from 'http';
import * as http from 'http';
import * as https from 'https';

export function isUrl(text: string): boolean {
    try {
        new URL(text);
        return true;
    } catch {
        return false;
    }
}

export function isValidUrl(url: string, callback: (error: Error | null, isValid: boolean) => void): void {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res: IncomingMessage) => {
        const statusCode = res.statusCode;
        const isSuccessCode = statusCode ? statusCode >= 200 && statusCode < 400 : false;
        callback(null, isSuccessCode);
    }).on('error', (err: Error) => {
        callback(err, false);
    });
}

// Optional: Async version for modern usage
export function isValidUrlAsync(url: string): Promise<boolean> {
    const client = url.startsWith('https') ? https : http;
    return new Promise((resolve) => {
        client.get(url, (res: IncomingMessage) => {
            const statusCode = res.statusCode;
            resolve(statusCode ? statusCode >= 200 && statusCode < 400 : false);
        }).on('error', () => {
            resolve(false);
        });
    });
}

export default {
    isUrl,
    isValidUrl,
    isValidUrlAsync
};
