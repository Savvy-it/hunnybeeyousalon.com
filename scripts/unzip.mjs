import { execSync } from 'child_process';
import { readdirSync, existsSync } from 'fs';

// Unzip the file
console.log('Unzipping Hunny-Bee-You-Salon-PROD.zip...');
execSync('unzip -o Hunny-Bee-You-Salon-PROD.zip -d extracted', { 
  cwd: '/vercel/share/v0-project',
  stdio: 'inherit' 
});

// List extracted contents
console.log('\nExtracted contents:');
const listContents = (dir, indent = '') => {
  if (!existsSync(dir)) return;
  const items = readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    console.log(`${indent}${item.isDirectory() ? '📁' : '📄'} ${item.name}`);
    if (item.isDirectory() && indent.length < 6) {
      listContents(`${dir}/${item.name}`, indent + '  ');
    }
  }
};
listContents('/vercel/share/v0-project/extracted');
