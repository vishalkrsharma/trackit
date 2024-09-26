var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { loadFile } from './utils/index.js';
const command = process.argv[2];
switch (command) {
  case '-v':
    (() =>
      __awaiter(void 0, void 0, void 0, function* () {
        const details = yield loadFile('./package.json', 'utf-8');
        console.log(details.version);
      }))();
    break;
  case 'init':
    console.log('Stopping the app...');
    break;
  default:
    console.log('Unknown command');
    break;
}
