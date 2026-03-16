import 'dotenv/config'

import { defineConfig } from 'orval'

export default defineConfig({
  fetch: {
    input: `${process.env.NEXT_PUBLIC_API_URL}/swagger.json`,
    output: {
      target: './src/http/api-client-generated/index.ts',
      prettier: true,
      override: {
        mutator: {
          path: './src/http/api-client.ts',
          name: 'api',
        },
      },
    },
  },
})
