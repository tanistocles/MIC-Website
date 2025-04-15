"use client";
import React, { useState, useRef, useEffect } from 'react';
import logo from '/public/logo.jpg';

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
            <img src={logo} width="40px" height="40px"></img>
            <span onClick={handleDropdownToggle}>Admin User</span>
            <i className={`fas fa-chevron-down ${isDropdownOpen ? 'rotated' : ''}`}></i>
            <div className={`dropdown-admin ${isDropdownOpen ? 'visible' : ''}`} ref={dropdownRef}>
                <li>Account Setting</li>
                <li>Your post</li>
                <li>Logout</li>
            </div>
        </div>
        </div>
        <div class="widgets-grid">
            <div class="widget">
                <h2>Quick Stats</h2>
                <p>Posts: 12</p>
                <p>Users: 5</p>
                <p>Comments: 23</p>
            </div>

            <div class="widget">
                <h2>Recent Posts</h2>
                <table class="post-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sample Post 1</td>
                            <td>Admin</td>
                            <td>2024-03-20</td>
                        </tr>
                        <tr>
                            <td>Sample Post 2</td>
                            <td>Editor</td>
                            <td>2024-03-19</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="widget">
                <h2>System Info</h2>
                <p>Version: 1.0.0</p>
                <p>Theme: Default</p>
                <p>Storage: 64MB / 1GB</p>
            </div>
        </div>
    </main>
        </>
    )
}
export default MainPage;