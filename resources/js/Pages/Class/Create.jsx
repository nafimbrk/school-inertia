import { useState } from "react"
import Layout from "../../Layouts/Layout"
import { Head, router } from "@inertiajs/react"
import { route } from "ziggy-js"

export default function Create({ errors }) {

    const [name, setName] = useState('')

    const createClass = (e) => {
        e.preventDefault()

        router.post(route('class.store'), {
            name
        })
    }

    return (
        <>
            <Head title="Class Add" />

            <Layout>

                <h1 className="font-semibold text-2xl mb-4">Class Create</h1>

                <div className="w-full mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={createClass}>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            {errors.name && <p className='text-red-600 italic'>{errors.name}</p>}
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        <button type="submit" className="text-white etxt-end bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}
