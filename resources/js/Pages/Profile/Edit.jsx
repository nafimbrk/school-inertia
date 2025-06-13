import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { Head, router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";


export default function Edit({ errors }) {

const { profile } = usePage().props

console.log(profile);


    const [image, setImage] = useState(null)
    const [name, setName] = useState(profile.name)
    const [address, setAddress] = useState(profile.profile.address || '')
    const [contact, setContact] = useState(profile.profile.contact || '')
    const [role, setRole] = useState(profile.role)

    const storeProfile = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'put');
        if (image) formData.append('image', image);
        formData.append('name', name);
        formData.append('address', address.trim() || '');
        formData.append('contact', contact.trim() || '');

        router.post(route('profile.update', profile.id), formData);
    };


    const deleteImage = (id) => {
        console.log(id);

        router.delete(route('delete.image', id))
    }


    return (
        <>

            <Head title="Profile Add" />

            <Layout>

                <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="font-semibold text-2xl mb-4">Profile Update</h1>
                        {profile.profile.image && <button onClick={() => deleteImage(profile.profile.id)} className="ml-16"><i class="fa-solid fa-circle-xmark text-2xl"></i></button>}
                    <form className="space-y-6" onSubmit={storeProfile}>
                    {profile.profile.image ? (
                        <img src={`/storage/profile/${profile.profile.image}`} alt="" className="w-24 rounded-full aspect-square object-cover" />
                    ) : (
                        'Belum ada foto'
                    )}
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Foto</label>
                        {errors.image && <p className='text-red-600 italic'>{errors.image}</p>}
                        <input onChange={(e) => setImage(e.target.files[0])} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        {errors.name && <p className='text-red-600 italic'>{errors.name}</p>}
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />


                        <div class="mb-6">
                            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            {errors.address && <p className='text-red-600 italic'>{errors.address}</p>}
                            <input type="text" id="large-input" value={address} onChange={(e) => setAddress(e.target.value)} class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                        {errors.contact && <p className='text-red-600 italic'>{errors.contact}</p>}
                        <input type="text" id="name" value={contact} onChange={(e) => setContact(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />

                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                        <input disabled type="text" id="name" value={role} onChange={(e) => setRole(e.target.value)} className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        <button type="submit" className="text-white etxt-end bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </form>
                </div>


            </Layout>
        </>
    )
}
