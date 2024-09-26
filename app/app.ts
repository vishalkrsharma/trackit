import { loadFile } from './utils/index';

const command = process.argv[2];

switch (command) {
  case '-v':
    (async () => {
      const details = await loadFile('./package.json', 'utf-8');
      console.log(details.version);
    })();

    break;
  case 'init':
    console.log('Stopping the app...');
    break;
  default:
    console.log('Unknown command');
    break;
}
