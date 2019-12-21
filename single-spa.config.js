import { registerApplication, start } from 'single-spa';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

registerApplication(
  'modal-app',
  () => import('./src/main.app.js'),
  () => true
);

start();
