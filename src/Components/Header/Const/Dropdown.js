import React, { useState } from 'react'
import classes from './Dropdown.module.css';
import barOpen from '../../../assets/logo/bars.png';
import barClose from '../../../assets/logo/times.png'

const Dropdown = () => {

    const kategori = [
        {
            id: 1,
            name: 'Blockchain Miners Cables & Commonly Used'
        },
        {
            id: 2,
            name: 'Accessories Camera, Photo'
        },
        {
            id: 3,
            name: 'Accessories Chargers, Batteries'
        },
        {
            id: 4,
            name: 'Power Supplies Computer Hardware'
        },
        {
            id: 5,
            name: 'Software Earphone  Headphone  Accessories'
        },
        {
            id: 6,
            name: 'Agricultural Machinery'
        },
        {
            id: 7,
            name: 'Equipment Apparel'
        },
        {
            id: 8,
            name: 'Textile Machinery Chemical'
        },
        {
            id:9,
            name: 'Pharmaceutical'
        },
        {
            id: 10,
            name: 'Machinery Cleaning'
        },
        {
            id: 11,
            name: 'Equipment Electrical'
        },
        {
            id: 12,
            name: 'Equipment Manufacturing'
        },
        {
            id: 13,
            name: 'Machinery Electronic & Products Machinery'
        },
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className={classes.dropdown}>
        <button onClick={toggleDropdown}>
            <span className={classes.icon}>{isOpen ? <img src={barClose} alt=""/> : <img src={barOpen} alt=""/> }</span>
        </button>
        {isOpen && (
            <ul className={classes.menuListDropdown}>
                {kategori.map((kat) => {
                    return <li key={kat.id}><a href="">{kat.name}</a></li>
                })}
            </ul>
        )}
    </div>
  )
}

export default Dropdown