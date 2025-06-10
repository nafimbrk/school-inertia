import { useState } from 'react';
import Layout from '../../Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Login({ errors }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const storeLogin = (e) => {
        e.preventDefault();

        router.post(route('login.store'), {
            email,
            password
        });
    }

    return (
        <>
            <Head>
                <title>Login Account</title>
            </Head>
            <Layout>



                <div className="w-full mx-auto mt-20 ml-60 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={storeLogin}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Login</h5>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            {errors.email && <p className='text-red-600 italic'>{errors.email}</p>}
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            {errors.password && <p className='text-red-600 italic'>{errors.password}</p>}
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Belum register? <Link href={route('register')} className="text-blue-700 hover:underline dark:text-blue-500">Register</Link>
                        </div>
                    </form>
                </div>

            </Layout>
        </>
    )

}
