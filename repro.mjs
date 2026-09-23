import { build } from 'rolldown'

const result = await build({
  input: { main: 'entry.js' },
  write: false,
  output: { format: 'esm' },
})

console.log(result.output.map(({ code }) => code).join('\n'))
