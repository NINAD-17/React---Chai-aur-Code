import { useState } from "react"

function App() {
  const [bgColor, setBgColor] = useState("blue");

  // to generate random color
  const numToHex = (num) => {
    switch(num) {
      case 10: return 'A'
      case 11: return 'B'
      case 12: return 'C'
      case 13: return 'D'
      case 14: return 'E'
      case 15: return 'F'
      default: return ''
    }
  }

  const getRandomColor = () => {
    let color = "#";
    for(let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 16);
      if(randomNum >= 10 && randomNum <= 15) {
        randomNum = numToHex(randomNum);
      }
      color += randomNum;
    }
    return color;
  }

  const newBgColor = () => {
    let color = getRandomColor();
    setBgColor(color);
  }

  return (
    <>
      {/* for animation: duration-200 */}
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: bgColor}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor: "red"}}
                      onClick={() => setBgColor("red")}>RED</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor: "blue"}}
                      onClick={() => setBgColor("blue")}>BLUE</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor: "green"}}
                      onClick={() => setBgColor("green")}>GREEN</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor: "#fc46aa"}}
                      onClick={() => setBgColor("#fc46aa")}>PINK</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor: "purple"}}
                      onClick={() => setBgColor("purple")}>PURPLE</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor: "black"}}
                      onClick={() => setBgColor("black")}>BLACK</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor: "brown"}}
                      onClick={() => setBgColor("brown")}>BROWN</button>
              <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
                      style={{backgroundColor: "yellow"}}
                      onClick={() => setBgColor("yellow")}>YELLOW</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor: bgColor}}
                      onClick={() => newBgColor()}>Random</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
