import { Head } from "@inertiajs/react";
import Layout from "../../Layouts/Layout";

export default function Show({ students }) {

    console.log(students);



    return (
        <>
            <Head title="Student List"></Head>

            <Layout>
                <dl className="max-w-md mb-3 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                        {students.length > 0 ? (
                            <>
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Image</dt>
                                <dd className="text-lg font-semibold">
                                    akshkhdks
                                </dd>
                            </>
                        ) : (
                            <p>Tidak ada student</p>
                        )}
                    </div>
                </dl>
            </Layout>
        </>

    )
}
