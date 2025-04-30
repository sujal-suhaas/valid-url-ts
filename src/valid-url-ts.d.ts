declare module "valid-url-ts" {
  export function isUrl(text: string): boolean;
  export function isValidUrl(
    url: string,
    callback: (error: Error | null, isValid: boolean) => void
  ): void;
}
