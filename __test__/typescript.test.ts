const { CLIEngine } = require("eslint")

const cli = new CLIEngine({ ignore: false })

const unusedVarSnippet = `const unused= "unused"
const used = 1
used + 1
`
const extraSemi = "1;"

describe("ESLint should handle typescript rules : ", () => {
  it(" -> handles `no-unused-vars` rule", () => {
    const { results } = cli.executeOnText(unusedVarSnippet)
    expect(
      results[0].messages.some(
        ({ message }) => message === "'unused' is assigned a value but never used."
      )
    ).toBeTruthy()
  })

  it(" -> fails on extra semi", () => {
    const { results } = cli.executeOnText(extraSemi)
    expect(
      results[0].messages.some(
        ({ message }) =>
          message === "Expected an assignment or function call and instead saw an expression."
      )
    ).toBeTruthy()
  })
})
