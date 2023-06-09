import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { recoilCount , recoilSelector , modifier} from './State'

function RecoilTwo() {
  const handleCount = ()=>{
    setCount(count+1)
  }
    const [count ,setCount] = useRecoilState(recoilCount)
    const [mod ,setMod] = useRecoilState(modifier)
    const ModifiedCount = useRecoilValue(recoilSelector)
  return (
    <div  style={{
      display:'flex',
      justifyContent : 'center',
      alignItems : 'center',
      flexDirection:'column'
    }}>
      <input type="number" onChange={(e)=>setMod(e.target.value)}/>
      <p className='heading '>I am from Component Two</p>
      <button className='Button' onClick={handleCount}>count is :  {count}</button>
      <button className='Button'>Modify-Count is :  {ModifiedCount}</button>
    </div>
  )
}

export default RecoilTwo

