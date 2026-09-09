// Eagerly reads every image inside src/assets/images/ that exists at
// build time. Because this uses import.meta.glob, the project keeps
// building even if a filename referenced in src/data/*.js hasn't been
// added yet — components can check `getImage(name)` and fall back to
// a placeholder instead of crashing on a missing file.
const imageModules = import.meta.glob('/src/assets/images/*', {
  eager: true,
  import: 'default',
})

export function getImage(filename) {
  if (!filename) return null
  const match = Object.entries(imageModules).find(([path]) =>
    path.endsWith(`/${filename}`),
  )
  return match ? match[1] : null
}

// Same idea as getImage, but for short clips in src/assets/videos/
// (used by the Creative Playground's motion-design slot).
const videoModules = import.meta.glob('/src/assets/videos/*', {
  eager: true,
  import: 'default',
})

export function getVideo(filename) {
  if (!filename) return null
  const match = Object.entries(videoModules).find(([path]) =>
    path.endsWith(`/${filename}`),
  )
  return match ? match[1] : null
}
