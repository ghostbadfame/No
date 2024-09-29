import { defineConfig } from 'wxt';
import { preserveDirective } from 'rollup-preserve-directives';


const warningsToIgnore = [
  ['SOURCEMAP_ERROR', "Can't resolve original location of error"],
  ['INVALID_ANNOTATION', 'contains an annotation that Rollup cannot interpret'],
]
// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    plugins: [preserveDirective()
    ],
  }),
  
});



