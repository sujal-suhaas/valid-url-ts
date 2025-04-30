# valid-url-ts

A simple TypeScript utility to check if a string is a valid URL and if the URL is reachable (via HTTP/HTTPS request).

## ✨ Features

- Type-safe and minimal
- Works with both HTTP and HTTPS
- Supports CommonJS and ES modules
- Includes both format validation and URL reachability check

## 📦 Installation

```bash
npm install valid-url-ts
```

## 🔧 Usage

### 1. Check if string is a valid URL format

```typescript
import { isUrl } from 'valid-url-ts';

console.log(isUrl('https://google.com')); // true
console.log(isUrl('not a url'));          // false
```

### 2. Check if URL is reachable (callback-based)

```typescript
import { isValidUrl } from 'valid-url-ts';

isValidUrl('https://google.com', (err, isValid) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Is reachable:', isValid);
  }
});
```

### 3. Check if URL is reachable (Promise-based)

```typescript
import { isValidUrlAsync } from 'valid-url-ts';

(async () => {
  const valid = await isValidUrlAsync('https://google.com');
  console.log(valid); // true or false
})();
```

## 🛠️ Development

### Building the package

```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/sujal-suhaas/valid-url-ts/issues).

## ⭐ Support

If you find this package helpful, please consider giving it a star on [GitHub](https://github.com/sujal-suhaas/valid-url-ts)!