import { Head, Link } from "@inertiajs/react";
import Layout from "../../Layouts/Layout";
import { route } from "ziggy-js";


export default function Index({ profile, auth }) {
console.log(auth.user.id);

    return (
        <>
            <Head title="Profile" />

            <Layout>
                <dl className="max-w-md mb-3 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    {profile.length > 0 ? (
                        profile.map((prf) => (
                            <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Image</dt>
                                <dd className="text-lg font-semibold">
                                    {prf.image ? (
                                        <img src={`/storage/profile/${prf.image}`} alt="" className="w-24 rounded-full aspect-square object-cover" />
                                    ) : (
                                        'Kosong'
                                    )}
                                </dd>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name</dt>
                                <dd className="text-lg font-semibold">
                                    {prf.user.name}
                                </dd>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Address</dt>
                                <dd className="text-lg font-semibold">
                                    {prf.address ?? 'Kosong'}
                                </dd>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Contact</dt>
                                <dd className="text-lg font-semibold">
                                    {prf.contact ?? 'Kosong'}
                                </dd>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Role Anda</dt>
                                <dd className="text-lg font-semibold">
                                    {prf.user.role}
                                </dd>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col pb-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Image</dt>
                            <dd className="text-lg font-semibold">
                                Kosong
                            </dd>
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name</dt>
                                <dd className="text-lg font-semibold">
                                    {auth.user.name}
                                </dd>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                <dd className="text-lg font-semibold">
                                    {auth.user.email}
                                </dd>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Address</dt>
                                <dd className="text-lg font-semibold">
                                    Kosong
                                </dd>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Contact</dt>
                                <dd className="text-lg font-semibold">
                                    Kosong
                                </dd>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Role Anda</dt>
                                <dd className="text-lg font-semibold">
                                    {auth.user.role}
                                </dd>
                        </div>
                    )}
                </dl>



                <Link href={route('profile.edit', auth.user.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit Profile</Link>




            </Layout>
        </>
    )
}
