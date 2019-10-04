const { CLIEngine } = require("eslint")

const cli = new CLIEngine({ ignore: false })

const exportNamedSnippet = `export const DummyExport = 123
`
const exportDefaultSnippet = `export default 123
`

const strOkLength = `/* eslint-disable no-console */
const p = "00000000000000000000000000000000000000000000000000000000000000000000000000000000"
console.log(p)
`
const strBadLength = `/* eslint-disable no-console */
const p = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
console.log(p)
`

describe("ESLint should handle common rules : ", () => {
  it(" -> prefere no default export", () => {
    const { results } = cli.executeOnText(exportNamedSnippet)
    expect(results[0].messages).toHaveLength(0)
  })

  it(" -> prefere no named export", () => {
    const { results } = cli.executeOnText(exportDefaultSnippet)
    expect(results[0].messages).toHaveLength(0)
  })

  it(" -> consumes line length < 100", () => {
    const { results } = cli.executeOnText(strOkLength)
    expect(results[0].messages).toHaveLength(0)
  })

  it(" -> throw error on line length > 100", () => {
    const { results } = cli.executeOnText(strBadLength)
    expect(
      results[0].messages.some(
        ({ message }) => message === "This line has a length of 172. Maximum allowed is 100."
      )
    ).toBeTruthy()
  })
})
