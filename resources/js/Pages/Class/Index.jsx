import { route } from "ziggy-js"
import Layout from "../../Layouts/Layout"
import { Link, router } from "@inertiajs/react"
import { useState } from "react";

export default function Index({ classRoom, session, filters, auth }) {

    const [search, setSearch] = useState(filters.search || '');

    const deleteClass = (id) => {
        router.delete(route('class.destroy', id))
    }

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('class.index'), { search });
    };

    return (
        <Layout>


            <div className="flex justify-between">
                {auth.user.role === 'admin' && (
                    <Link href={route('class.create')} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</Link>
                )}

                <form onSubmit={handleSearch} class="flex items-center max-w-sm">
                    <div class="relative w-full">
                        <input type="text" id="simple-search" value={search} onChange={(e) => setSearch(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                </form>
            </div>


            {session.success && (
                <p>{session.success}</p>
            )}



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Class Name
                            </th>
                            {auth.user.role === 'admin' && (
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {classRoom.data.length > 0 ? (
                            classRoom.data.map((cr) => (
                                <tr key={cr.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {cr.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {auth.user.role === 'admin' && (
                                            <>
                                                <Link href={route('class.edit', cr.id)} class="font-medium mr-3 text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                                <button onClick={() => deleteClass(cr.id)} class="font-medium text-red-600 dark:text-red-500 hover:underline">Hapus</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" style={{ textAlign: "center" }}>Data kosong</td>
                            </tr>
                        )}







                    </tbody>
                </table>
            </div>






            <div className="py-10 text-center">
                {
                    classRoom.links.map(link => (
                        link.url ?

                            <Link
                                className={`p-1 mx-1 ${link.active ? 'font-bold text-blue-400 underline' : ''}`}
                                key={link.label} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} />
                            :

                            <span
                                className="cursor-not-allowed text-gray-300"
                                key={link.label} dangerouslySetInnerHTML={{ __html: link.label }}>
                            </span>
                    ))
                }
            </div>











        </Layout>
    )
}
