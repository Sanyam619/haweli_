import React from 'react'
import AdminNavbar from './AdminNavbar';
import AdminItemStore from './AdminItemStore';
export default function AdminStore() {
    return (
        <>
            <div className="flex">
                <AdminNavbar />
                <main className="grow">
                    <AdminItemStore />

                </main>
            </div>
        </>
    )
}
