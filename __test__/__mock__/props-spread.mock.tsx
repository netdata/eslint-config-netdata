import React from "react"

type Props = { propOne: string; propTwo: string | null }
const obj: { key: { keyTwo?: string } } = { key: { keyTwo: "test" } }
/* eslint-disable no-console */
console.log(obj.key?.keyTwo)
const Component = ({ propOne, propTwo }: Props) => (
  <>
    <div>{propOne}</div>
    <div>{propTwo}</div>
  </>
)

export const Main = () => {
  const rest = { propTwo: "propTwo" }
  return (
    <>
      <Component propOne="propOne" {...rest} />
    </>
  )
}
