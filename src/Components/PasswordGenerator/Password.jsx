import { useCallback, useState,useEffect, useRef } from 'react'


function Password() {
const [length , setLength] =useState(8)
const [pasword , setPasword ]=useState("");
const [numberAllowed , setNumberAllowed] = useState(false);
const [charAllowed , setCharAllowed]=useState(false);
useEffect(()=>{
  passWordGenerator()
},[length , numberAllowed ,charAllowed])
const passWordGenerator= useCallback(()=>{
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(numberAllowed) str += "1234567890"
if(charAllowed) str += "!@#$%^&*(){}[]"
for (let i = 1; i <= length; i++) {
  let char = Math.floor(Math.random() *str.length +1)
  pass += str.charAt(char)
  }
  setPasword(pass)

},[length , charAllowed , numberAllowed ,setPasword])

const passwordRefrence = useRef(null)


const copytoclipbord =useCallback(()=>{
  window.navigator.clipboard.writeText(pasword)
  passwordRefrence.current?.select()
},[pasword])

return (
<>
<div className='bg-black flex justify-center'>
<div className=' mr-36 items-center w-1/2 max-w-auto max-auto bg-gray-600 rounded-lg px-4 my-8 text-orange-400 text-center'>
<div className='text-center'>
  <h1 className='text-2xl'>
    PasswordGenerator
  </h1>
  <div className="flex shadow-md rounded-lg overflow-hidden mb-4 ">
    <input
     type="text" 
     value={pasword}
     className='outline-none w-full px-3 py-3 rounded-xl'
     readOnly 
     ref={passwordRefrence}
     />

     <button onClick={copytoclipbord}
      className='bg-blue-800 text-white rounded-lg w-fit p-2 m-1 hover:bg-yellow-400'>
      copy
     </button>
  </div>
  <div className="flex flex-wrap text-sm gap-x-2 mb-8" >
    <input type="range"
    min={8}
    max={100}
    value={length} 
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    />
    <label >Length :{length}</label>
  
    <div className="flex items-center gap-x-2 ">
      <input type="checkbox"   id="numberInput"
      defaultChecked={numberAllowed}
      onChange={()=>{
        setNumberAllowed((prev)=> !prev);
      }}
      />
      <label >Number</label>

<input type="checkbox"  id="charecterInput"
      defaultChecked={charAllowed}
      onChange={()=>{
        setCharAllowed((prev)=> !prev);
      }}
      />
      <label >Charecter</label>
      </div>
    </div>
</div>
</div>
</div>
</>
)
}

export default Password