import { Head, usePage } from '@inertiajs/react';
import Layout from '../../Layouts/Layout';

function Dashboard() {

    const { totalClass, totalStudent } = usePage().props;


    return (
        <>

            <Head>
                <title>Dashboard</title>
            </Head>
            <Layout>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                        <div className='text-center mt-4'>
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                             Class
                        </p>
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            {totalClass}
                        </p>
                        </div>
                    </div>
                    <div className="h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                        <div className='text-center mt-4'>
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                             Student
                        </p>
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            {totalStudent}
                        </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )

}

export default Dashboard
