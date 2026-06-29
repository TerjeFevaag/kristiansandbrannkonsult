import sharp from 'sharp'

const src = 'public/images/icon-uavhengig-kontroll.jpg'

const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true })

const w = info.width, h = info.height, ch = info.channels

// Replace checkered background pixels (light gray or white with low saturation) with white
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const i = (y * w + x) * ch
    const r = data[i], g = data[i + 1], b = data[i + 2]
    if (r > 180 && g > 180 && b > 180 && Math.max(r, g, b) - Math.min(r, g, b) < 30) {
      data[i] = 255; data[i + 1] = 255; data[i + 2] = 255
    }
  }
}

await sharp(data, { raw: { width: w, height: h, channels: ch } })
  .trim({ background: { r: 255, g: 255, b: 255 }, threshold: 5 })
  .extend({ top: 40, bottom: 40, left: 40, right: 40, background: { r: 255, g: 255, b: 255 } })
  .png()
  .toFile('public/images/icon-uavhengig-kontroll.png')

console.log('Done')
