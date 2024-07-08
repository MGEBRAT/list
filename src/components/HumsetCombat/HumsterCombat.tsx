import React, { useState } from 'react'
import './HumsterCombat.css'
const HumsterCombat = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isBonus, setIsBonus] = useState(0);
    

    const handleClick = () => {
        setIsClicked(!isClicked);
        setIsBonus(isBonus + 1);
    };

    const imageStyle = {
        borderRadius: '100px',
        transition: 'all 0.3s ease',
        transform: isClicked ? 'scale(0.9)' : 'scale(1)',
        boxShadow: isClicked ? '0 0 40px rgb(73, 28, 1)' : '0 0 10px rgb(73, 28, 1)',
        
    };
    const textStyle2 = {
        display: isBonus === 10 ? 'block' : 'none',
        transition: 'all 0.3s ease',
        opacity: isClicked ? 1 : 0,
        animation:    isBonus >= 10 ? 'fade-up 1s ease ' : '',
        
      }
      const textStyle3 = {
        display: isBonus === 20 ? 'block' : 'none',
        transition: 'all 0.3s ease',
        opacity: isClicked ? 1 : 0,
        animation: isBonus === 20 ||  isBonus > 20  ? 'fade-up 1s ease ' : '',
      }
      const textStyle4 = {
        display: isBonus === 30 ? 'block' : 'none',
        transition: 'all 0.3s ease',
        opacity: isClicked ? 1 : 0,
        animation: isBonus === 30 ||  isBonus > 30  ? 'fade-up 1s ease ' : '',
      }
      const textStyle5 = {
        display: isBonus === 40 ? 'block' : 'none',
        transition: 'all 0.3s ease',
        opacity: isClicked ? 1 : 0,
        animation: isBonus === 40 ||  isBonus > 40  ? 'fade-up 1s ease ' : '',
      }
      const textStyle = {
        display: isBonus === 50  ? 'block' : 'none',
        transition: 'all 0.3s ease',
        opacity: isClicked ? 1 : 0,
        animation: isBonus === 50 ||  isBonus > 50 ? 'fade-up 1s ease ' : '',
      }


  return (
    <div className='humset__block'>
        <p className='bonus'>{isBonus}</p>
        <div className='humster'>
            <div className='text' >
                <p style={textStyle}  id='1'>КЛИКАЙ Меня</p>
                <p  style={textStyle2}  id='2'> О ДАААА</p>
                <p  style={textStyle3} id='3'>ЗАКЛИКАЙ МОЕГО ХОМЯКА!</p>
                <p  style={textStyle4} id='4'>ДАВАЙ ДАВАЙ ТАПАЙ МЕНЯ</p>
                <p  style={textStyle5} id='5'>ЕЩЕ НЕМНОГО </p>
            </div>
            <img 
            style={imageStyle}
            onClick={handleClick} 
            className='img' 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9hnEqbtefOs40fHUmfg3fLwc5_RXiA8xXa0qLaJoM8DTJg6-6cVYwBfaINzthoEgxfs&usqp=CAU" alt="" />
        </div>
    </div>
  )
}

export default HumsterCombat