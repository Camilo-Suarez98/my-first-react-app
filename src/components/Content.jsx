import React from 'react'
import scarecrow from '../assets/scarecrow.png';

export const Content = () => {
  return (
    <main className='body-page'>
      <div className="image-page">
        <img className='image' src={scarecrow} alt="Scarecrow" />
      </div>
      <div className="text">
        <h1>I have bad news for you</h1>
        <p>The page you are looking for might be removed or is temporally unavailable</p>
        <button type="submit">Back to homepage</button>
      </div>
    </main>
  )
}
