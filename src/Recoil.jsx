import React from 'react'
import { useRecoilState } from 'recoil'
import { recoilCount } from './State'
import RecoilTwo from './RecoilTwo'

function Recoil() {
  const handleCount = ()=>{
    setCount(count+1)
  }
    const [count ,setCount] = useRecoilState(recoilCount)
  return (
    <>
    <div  style={{
      display:'flex',
      justifyContent : 'center',
      alignItems : 'center',
      height:'30vh',
      flexDirection:'column'
    }}>
      <p className='heading '>I am from Component One</p>
  {/* any time you update in one location recoils sneaks over and updates in other location */}
      <button className='Button' onClick={handleCount}>count is :  {count}</button>
    </div>
    <RecoilTwo/>
    </>
  )
}

export default Recoil

