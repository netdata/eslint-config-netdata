const { CLIEngine } = require("eslint")
const path = require("path")

const cli = new CLIEngine({ ignore: false })

describe("ESLint should handle react rules : ", () => {
  it(" -> parse tsx", () => {
    const { results } = cli.executeOnFiles([
      path.resolve(__dirname, "./__mock__/simple-component.mock.tsx"),
    ])
    expect(results[0].messages).toHaveLength(0)
  })
})
