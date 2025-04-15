import React from "react";

function Navbar() {
    return (
        <>
            <nav className="sidebar">
                <div className="admin-logo">
                    <h2>Admin</h2>
                </div>
                <ul className="admin-menu">
                    <li className="menu-item">
                        <i className="fas fa-home"></i><span>Dashboard</span>
                    </li>
                    
                    {/* Posts Section */}
                    <li className="menu-item">
                        <i className="fas fa-file-alt"></i><span>Post</span>
                        <ul className="submenu">
                            <li className="submenu-item"><span>All Post</span></li>
                            <li className="submenu-item"><span>Create new Post</span></li>
                            <li className="submenu-item"><span>Category</span></li>
                            <li className="submenu-item"><span>Tag</span></li>
                        </ul>
                    </li>

                    {/* Media Section */}
                    <li className="menu-item">
                        <i className="fas fa-image"></i><span>Media</span>
                        <ul className="submenu">
                            <li className="submenu-item"><span>Library</span></li>
                            <li className="submenu-item"><span>Add new file</span></li>
                        </ul>
                    </li>

                    {/* Pages Section */}
                    <li className="menu-item">
                        <i className="fas fa-file"></i><span>Page</span>
                        <ul className="submenu">
                            <li className="submenu-item"><span>All Pages</span></li>
                            <li className="submenu-item"><span>Add New Page</span></li>
                        </ul>
                    </li>

                    {/* Contact Form */}
                    <li className="menu-item">
                        <i className="fas fa-envelope"></i><span>Contact Form</span>
                        <ul className="submenu">
                            <li className="submenu-item"><span>Create a new Form</span></li>
                        </ul>
                    </li>

                    {/* Website Section */}
                    <li className="menu-item">
                        <i className="fas fa-globe"></i><span>Website</span>
                        <ul className="submenu">
                            <li className="submenu-item"><span>Customise Theme</span></li>
                            <li className="submenu-item"><span>Blog</span></li>
                            <li className="submenu-item"><span>Content</span></li>
                            <li className="submenu-item"><span>Menus</span></li>
                            <li className="submenu-item"><span>Setting</span></li>
                        </ul>
                    </li>

                    {/* Users Section */}
                    <li className="menu-item">
                        <i className="fas fa-users"></i><span>Users</span>
                        <ul className="submenu">
                            <li className="submenu-item"><span>All Users</span></li>
                            <li className="submenu-item"><span>Add new User</span></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;