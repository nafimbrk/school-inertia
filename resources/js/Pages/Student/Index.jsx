import { route } from "ziggy-js";
import Layout from "../../Layouts/Layout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ students, session, auth, filters }) {

    const [search, setSearch] = useState(filters.search || '');

    const deleteStudent = (id) => {
        router.delete(route('student.destroy', id))
    }

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('student.index'), { search });
    };


    return (
        <>

            <Head title="Student List" />

            <Layout>
                <h1 className="font-semibold text-2xl mb-4">Student List</h1>

                <div className="flex justify-between mb-6">
                    {auth.user.role === 'admin' && (
                        <Link href={route('student.create')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i className="fa-solid fa-plus"></i> Add</Link>
                    )}


                    <form onSubmit={handleSearch} className="flex items-center max-w-sm">
                        <div className="relative w-full">
                            <input type="text" id="simple-search" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </form>
                </div>


                {session.success && (
                    <div id="alert-3" className="flex items-center p-4 mb-4 mt-3 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div className="ms-3 text-sm font-medium">
                            {session.success}
                        </div>
                        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                )}






                <div className="relative overflow-x-auto mt-2 shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Student Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gender
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Class
                                </th>
                                {auth.user.role === 'admin' && (
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {students.data.length > 0 ? (
                                students.data.map((student) => (
                                    <tr key={student.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {student.image ? (
                                                <img src={`/storage/image/${student.image}`} alt="" className="w-24 rounded-full aspect-square object-cover" />
                                            ) : (
                                                'Belum foto'
                                            )}
                                        </td>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {student.name}
                                        </td>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {student.gender === 'L' ? 'Laki-laki' : 'Perempuan'}
                                        </td>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {student.class?.name ?? 'Belum ada kelas'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {auth.user.role === 'admin' && (
                                                <>
                                                    <Link href={route('student.edit', student.id)} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><i className="fa-solid fa-pencil"></i></Link>
                                                    <button onClick={() => deleteStudent(student.id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fa-solid fa-trash"></i></button>
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




                <nav aria-label="Page navigation" className="py-10 text-end">
                    <ul className="inline-flex -space-x-px text-base h-10">

                        {students.links.map((link, index) => (
                            link.url ? (
                                <li key={index}>
                                    <Link
                                        href={link.url}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300
              dark:border-gray-700
              ${link.active
                                                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white'
                                                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
              ${index === 0 ? 'rounded-s-lg' : ''} ${index === students.links.length - 1 ? 'rounded-e-lg' : ''}`}
                                    />
                                </li>
                            ) : (
                                <li key={index}>
                                    <span
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-not-allowed"
                                    />
                                </li>
                            )
                        ))}

                    </ul>
                </nav>





            </Layout >
        </>
    )
}
