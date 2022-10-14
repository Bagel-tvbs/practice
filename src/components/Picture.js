import React from 'react'

const Picture = ({data}) => {
  return (
    <div className='picture'>
<p>作者 :{data.photographer}</p>
<div className='imageContainer'>
    <img src={data.src.large} alt=""/>
</div>
<p>下載 <a target="_blank" href={data.src.large}>按這</a></p>
    </div>
  )
}

export default Picture