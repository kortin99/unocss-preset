// bump.config.ts
import { defineConfig } from 'bumpp'

export default defineConfig({
  commit: 'release: v',
  tag: true,
  push: true,
})
