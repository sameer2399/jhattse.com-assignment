import React from 'react'


const Itemcard = (props) => {

 
  const { data } = props; 
  const { name, mrp, images, stats} = data;
  
 

  return (
    
      <div className='itemCard'>
        {(images)?(<div className='img'>
          <img className='img' src={images?.[0]?.url} alt="img" />
        </div>):(<div className='img'>
          <img className='img' src="" alt="img" />
        </div>)
        }

        <div className='itemCard-Details'>
          <h2>{name}, 75g</h2>


          <div className='item-flex'>
          {(stats)?(<div className='rating item-rating'>
            <div><img className='star-icon' src="https://cdn.icon-icons.com/icons2/2768/PNG/512/star_icon_176624.png" alt="star" /></div>
            <div className='rating-text'>{stats.rating_overall}.0</div>
          </div>):(<div className='rating item-rating'>
            <div><img className='star-icon' src="https://cdn.icon-icons.com/icons2/2768/PNG/512/star_icon_176624.png" alt="star" /></div>
            <div className='rating-text'>0.0</div>
          </div>)}

          <div className='gms'>75 GMS</div>
          </div>

          
          
          <div className='item-flex'>
            <div><h3>₹{mrp}</h3></div>

            <div><button className='add-button'>Add</button></div>
          </div>
        </div>

        

      </div>
    
  )
}

export default Itemcard