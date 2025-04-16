import React from "react";
import Link from "next/link";
function Navbar() {
    return (
        <>
            <nav className="sidebar">
                <div className="admin-logo">
                    <h2>Admin</h2>
                </div>
                <ul className="admin-menu">
                    <li className="menu-item">
                        <i className="fas fa-home"></i><Link href="/admin/dashboard"><span>Dashboard</span></Link>
                    </li>
                    
                    {/* Posts Section */}
                    <li className="menu-item">
                        <i className="fas fa-file-alt"></i><span>Post</span>
                        <ul className="submenu">
                            <li className="submenu-item"><Link href="/admin/allposts"><span>All Post</span></Link></li>
                            <li className="submenu-item"><Link href="/admin/post"><span>Create new Post</span></Link></li>
                            <li className="submenu-item"><Link href="/admin/category"><span>Category</span></Link></li>
                            <li className="submenu-item"><span>Tag</span></li>
                        </ul>
                    </li>

                    {/* Media Section */}
                    <li className="menu-item">
                        <i className="fas fa-image"></i><span>Media</span>
                        <ul className="submenu">
                            <li className="submenu-item"><Link href="admin/library"><span>Library</span></Link></li>
                            <li className="submenu-item"><Link href="/admin/addfile"><span>Add new file</span></Link></li>
                        </ul>
                    </li>

                    {/* Pages Section */}
                    <li className="menu-item">
                        <i className="fas fa-file"></i><span>Page</span>
                        <ul className="submenu">
                            <li className="submenu-item"><Link href="/admin/allpages"><span>All Pages</span></Link></li>
                            <li className="submenu-item"><span>Add New Page</span></li>
                        </ul>
                    </li>

                    {/* Contact Form */}
                    <li className="menu-item">
                        <i className="fas fa-envelope"></i><span>Contact Form</span>
                        <ul className="submenu">
                            <li className="submenu-item"><Link href="/admin/form"><span>Form List</span></Link></li>
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
                            <li className="submenu-item"><Link href="/admin/allusers" ><span>All Users</span></Link></li>
                            <li className="submenu-item"><span>Add new User</span></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;