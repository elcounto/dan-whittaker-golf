import { readFile, writeFile } from 'node:fs/promises';

// Relative URLs allow the Expo web export to run under a GitHub project path.
const file = new URL('../dist/index.html', import.meta.url);
let html = await readFile(file, 'utf8');
html = html.replace(/(src|href)="\/(?!\/)/g, '$1="./');
await writeFile(file, html);
await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');
