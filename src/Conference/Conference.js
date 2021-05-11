import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

const Conference = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const [room, setRoom] = useState('Online Doctor Nepal')
  const [name, setName] = useState('Usename ' + num.toString())
  const [call, setCall] = useState(true)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
    <Jutsu
      roomName={room}
      displayName={name}
      password={password}
      onMeetingEnd={() => console.log('Meeting has ended')}
      loadingComponent={<p>Loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>} 
      configOverwrite={{
        prejoinPageEnabled: false //Auto Join Meeting
    
    }}
    
      interfaceConfigOverwrite={ {
        MOBILE_APP_PROMO: false // For disabling Mobile app promo in the mobile broswers, however failed.
     }}
    containerStyles={{ width: '1200px', height: '1200px' }}/>
  ) : (
    <form>
      <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
      <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick} type='submit'>
        Start / Join
      </button>
    </form>
  )
}

export default Conference;