import './App.css'
import Card from "./components/Card"

function App() {
  let myObj = {
    username: "V",
    age: 28
  }

  let myArr = ["Samsung", "Hyundai", "Lotte"];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card name="Taehyung" someObj={myObj} someArr={myArr} />
      <Card />
      <Card name="Suga" />
    </>
  )
}

export default App
