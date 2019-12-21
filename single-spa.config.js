import { registerApplication, start } from 'single-spa';

registerApplication(
  'modal-app',
  () => import('./src/main.app.js'),
  () => true
);

start();
