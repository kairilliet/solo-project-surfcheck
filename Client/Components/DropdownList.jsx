import React, { useState, useEffect } from 'react';

const options = ['Ankle Biters (0 - 2 ft)', 'Waist High (1 - 3 ft)', 'Shoulder High (2 - 4 ft)', 'Head High and Up (3 - 5 ft)'];

const DropdownList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState(null);

  const toggle = () => {
    return setIsOpen(!isOpen);
  }


  return(
<div className='dropdown'>
  <div id='dropdownContainer'>
    <div id='dropdownHeader' onClick={toggle}><h2>Choose Your Skill Level</h2></div>
    {isOpen && (
    <div id='dropdownListContainer'>
      <div id='dropdownList'>
        <li type='button' className='item' onClick={(e) => {
          e.preventDefault();
          props.skillLevelPicked(e, 'ankle biter');
          toggle();
          
        }}>Ankle Biters (0 - 2 ft)</li>
        <li type='button' className='item' onClick={(e) => {
          e.preventDefault();
          props.skillLevelPicked(e, 'waist high');
          toggle();
          
        }}>Waist High (1 - 3 ft)</li>
        <li type='button' className='item' onClick={(e) => {
          e.preventDefault();
          props.skillLevelPicked(e, 'shoulder high');
          toggle();
          
        }}>Shoulder High (2 - 4 ft)</li>
        <li type='button' className='item' onClick={(e) => {
          e.preventDefault();
          props.skillLevelPicked(e, 'head high and up');
          toggle();
          
        }}>Head High and Up (3 - 5 ft)</li>
      </div>
    </div>
    )}
  </div>
</div>
  )
}


export default DropdownList;