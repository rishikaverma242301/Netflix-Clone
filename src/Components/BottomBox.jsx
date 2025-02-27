import React from 'react'
import downloadicon from '/BottomBox/downloadicon.png'
import smarttv from '/BottomBox/smarttv.png'
import torch from '/BottomBox/torch.png'
import smiley from '/BottomBox/smiley.png'

const BottomBox = () => {
  return (
    <div>
      <h1 className='ml-15 mb-10 text-2xl'>More reasons to join</h1>

      <div className='flex ml-24 gap-3 mr-24 '>
        <div className='border-4 p-4 h-80 w-85 '><h2><b>Enjoy on your TV</b></h2>
          <p className='mt-4'>Watch on smart TVs, PlayStation,<br/> Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          <img src={smarttv} className='h-15 mt-16 ml-20' alt="" />
        </div>

        <div className='border-4 p-4 h-80 w-85'><h2><b>Download your shows to watch offline</b></h2>
          <p className='mt-4'>Save your favourites easily and always have something to watch.</p>
          <img src={downloadicon} className='h-15 mt-18 ml-20' alt="" />
          </div>

        <div className='border-4 p-4 h-80 w-85'><h2><b>Watch everywhere</b></h2>
          <p className='mt-4'>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
          <img src={torch} className='h-15 mt-21 ml-20' alt="" />
          </div>

        <div className='border-4 p-4 h-80  w-85'><h2><b>Create profiles for kids</b></h2>
          <p > Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
          <img src={smiley} className='h-15 mt-8 ml-20' alt="" />
          </div>
      </div>
    </div>
  )
}

export default BottomBox
