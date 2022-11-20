import fs from 'fs'
import path from 'path'

import { db } from 'api/src/lib/db'
import papaparse from 'papaparse'

export default async () => {
  try {
    const result = fs.readFileSync(path.join(__dirname, './pokemons.csv'))
    const pokemons = papaparse.parse(String(result), { header: true })

    const simplified = pokemons.data.map((d) => ({
      no: d['#'],
      name: d['Name'],
      speed: d['Speed'] || '0',
      type: d['Type 1'],
    }))

    const results = await Promise.allSettled(
      simplified.map((p) =>
        db.pokemon.create({
          data: {
            name: p.name,
            no: Number(p.no),
            speed: Number(p.speed),
            type: p.type,
          },
        })
      )
    )

    const resultCount = results.reduce(
      (acc, item) => {
        if (item.status === 'fulfilled') {
          acc.ok++
        } else {
          console.log(item)
          acc.failed++
        }
        return acc
      },
      { ok: 0, failed: 0 }
    )

    console.log(resultCount)
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
