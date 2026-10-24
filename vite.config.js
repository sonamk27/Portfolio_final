import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Copy generated project images into public/projects
const sourceDir = 'C:/Users/sonam/.gemini/antigravity-ide/brain/5206656f-37d0-4a57-9fdd-888b9f30f718'
const targetPublicDir = path.resolve(__dirname, 'public/projects')
const targetSrcDir = path.resolve(__dirname, 'src/assets/projects')

const images = {
  'project_maitri_1789914891829.jpg': 'maitri.jpg',
  'project_viraat_1789914914674.jpg': 'viraat.jpg',
  'project_privacy_agent_1789914932350.jpg': 'privacy.jpg',
  'project_ui_fixer_1789914948246.jpg': 'ui-fixer.jpg',
  'project_studymate_1789914967840.jpg': 'studymate.jpg',
}

function syncProjectImages() {
  try {
    for (const dir of [targetPublicDir, targetSrcDir]) {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    }

    for (const [srcFile, destName] of Object.entries(images)) {
      const srcPath = path.join(sourceDir, srcFile)
      if (fs.existsSync(srcPath)) {
        const pubDest = path.join(targetPublicDir, destName)
        const srcDest = path.join(targetSrcDir, destName)
        if (!fs.existsSync(pubDest)) fs.copyFileSync(srcPath, pubDest)
        if (!fs.existsSync(srcDest)) fs.copyFileSync(srcPath, srcDest)
      }
    }
  } catch (err) {
    console.warn('Image sync error:', err.message)
  }
}

syncProjectImages()

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'sync-project-images',
      buildStart() {
        syncProjectImages()
      },
    },
  ],
})

