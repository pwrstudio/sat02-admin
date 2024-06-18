import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'SAT02',

  projectId: 'q6keo3xr',
  dataset: 'production',

  plugins: [
    structureTool({ structure: deskStructure })
  ],

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      const { type } = creationContext;
      const DISABLED_TYPES = [
        'page',
        'press',
        'team',
        'landingPage',
        'contact',
        'designStore',
        'team',
        'theme'
      ];
      if (type === 'global') {
        return prev.filter((template) => !DISABLED_TYPES.includes(template.templateId));
      }
      return prev;
    },
  },

  schema: {
    types: schemaTypes,
  },
})
