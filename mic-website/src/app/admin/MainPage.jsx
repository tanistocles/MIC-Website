"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";

function MainPage() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const profileRef = useRef(null);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
        <main class="main-content">
        <div class="top-nav">
            <h1>Dashboard</h1>
            <div class="search-bar">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="user-profile" ref={profileRef}>
                <div class="profile-item">            
                <Image src="/logo.jpg" width={40} height={40}></Image>
                <span onClick={handleDropdownToggle}>Admin User</span>
            </div>
            <i className={`fas fa-chevron-down ${isDropdownOpen ? 'rotated' : ''}`}></i>
            <div className={`dropdown-admin ${isDropdownOpen ? 'visible' : ''}`} ref={dropdownRef}>
                <li>Account Setting</li>
                <li>Your post</li>
                <li>Logout</li>
            </div>
        </div>
        </div>
    </main>
        </>
    )
}
export default MainPage;