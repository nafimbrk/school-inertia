import Navbar from "./Partials/Navbar"
import { usePage } from "@inertiajs/react";
import Sidebar from "./Partials/Sidebar";

function Layout({ children }) {
    const { auth } = usePage().props;

    return (
        <>
            {auth.user ? (
                <>
                    <Navbar />
                    <Sidebar />
                </>
            ) : (
                ''
            )}
            <div className="p-4 mt-14 sm:ml-64">
                {children}
            </div>
        </>
    )
}

export default Layout
