import Child2 from "./child2"

export default function Parent2() {
  let person = "mohana"

  let array = ["html", "css", "javascript", "nodejs", "express", "monogodb", "react"]
  let arr = { array, person }

  return (
    <div>
      <h1>hai Hello</h1>
      <Child2 value={arr} />
    </div>
  )
}