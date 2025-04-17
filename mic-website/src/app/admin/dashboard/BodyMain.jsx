import React from "react";
import styles from './BodyMain.module.css'
function BodyMain() {
    return (
        <>
        <div className={styles.container}>
        <div className={styles.widgetsGrid}>
            <div className={styles.widget}>
                <h2>Quick Stats</h2>
                <p>Posts: 12</p>
                <p>Users: 5</p>
                <p>Comments: 23</p>
            </div>

            <div className={styles.widget}>
                <h2>Recent Posts</h2>
                <table className={styles.postTable}>
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

            <div className={styles.widget}>
                <h2>System Info</h2>
                <p>Version: 1.0.0</p>
                <p>Theme: Default</p>
                <p>Storage: 64MB / 1GB</p>
            </div>
        </div>

        </div>
        
        </>
    )
}
export default BodyMain;