import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [passLength, setPassLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook: to taking reference of password field to copy
  const passwordRef = useRef(null); // now, see <input ref>

  // here useCallback is not responsible for running the function, it's for memoization /optimization by storing it in cache
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "$@_%*=!#^(){}[]~`";

    for(let i = 0; i < passLength; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [passLength, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // We use passwordRef to get functionality after copy otherwise you can just copy password without it also.
    // passwordRef.current?.setSelectionRange(0, 5); // It will only select upto 5 characters.
    window.navigator.clipboard.writeText(password); // we're using 'window' because we know that when this code will run it will have access to window object as it will run on browser. But if you're using nextjs all code is rendered on server and it don't have access to window object
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passLength, numberAllowed, charAllowed, passwordGenerator]); // When things from array change then passwordGenerator() calls.
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef} />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                  onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={8}
            max={35}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setPassLength(e.target.value)}} />
            <label>Length: {passLength}</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev); // if true then false and vice versa.
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev); // if true then false and vice versa.
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
