import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(
      on, // eslint-disable-line @typescript-eslint/no-unused-vars
      config // eslint-disable-line @typescript-eslint/no-unused-vars
    ) {
      // código de configuração que poderá usar "on" e "config" futuramente
    },
  },
})
