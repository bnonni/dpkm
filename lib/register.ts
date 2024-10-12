import { register } from 'node:module';

// Register the hooks from the compiled hooks.js file
register('./hooks.js', import.meta.url);
