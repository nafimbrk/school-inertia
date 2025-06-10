import { Head, usePage } from '@inertiajs/react';
import Layout from '../../Layouts/Layout';

function Dashboard() {

    const { auth, totalClass, totalStudent } = usePage().props;

    console.log(totalClass);
    console.log(totalStudent);


    return (
        <>
            <Head>
                <title>Dashboard - SantriKoding.com</title>
            </Head>
            <Layout>
                <div class="grid grid-cols-3 gap-4 mb-4">
                    <div class="h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                        <div className='text-center mt-4'>
                            <p class="text-2xl text-gray-400 dark:text-gray-500">
                             Class
                        </p>
                        <p class="text-2xl text-gray-400 dark:text-gray-500">
                            {totalClass}
                        </p>
                        </div>
                    </div>
                    <div class="h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                        <div className='text-center mt-4'>
                            <p class="text-2xl text-gray-400 dark:text-gray-500">
                             Student
                        </p>
                        <p class="text-2xl text-gray-400 dark:text-gray-500">
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
