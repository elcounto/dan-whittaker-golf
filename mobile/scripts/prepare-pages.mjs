import { readFile, writeFile, readdir } from 'node:fs/promises';

// Relative URLs allow the Expo web export to run under a GitHub project path.
const file = new URL('../dist/index.html', import.meta.url);
let html = await readFile(file, 'utf8');
html = html.replace(/(src|href)="\/(?!\/)/g, '$1="./');
await writeFile(file, html);
await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');

// Metro also emits root-relative image URLs inside its JavaScript bundles.
const bundles = new URL('../dist/_expo/static/js/web/', import.meta.url);
for (const name of await readdir(bundles)) {
  if (!name.endsWith('.js')) continue;
  const path = new URL(name, bundles);
  const source = await readFile(path, 'utf8');
  await writeFile(path, source.replace(/uri:"\/assets\//g, 'uri:"./assets/'));
}
