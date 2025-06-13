import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { Head, router } from "@inertiajs/react";
import { route } from "ziggy-js";


export default function Create({ errors, classRoom }) {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [classId, setClassId] = useState('')
    const [image, setImage] = useState(null)

    const storeStudent = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('class_room_id', classId);
        if (image) formData.append('image', image);

        router.post(route('student.store'), formData);
    };



    return (
        <>

            <Head title="Student Add" />

            <Layout>
                <h1 className="font-semibold text-2xl mb-4">Student Create</h1>

                <div className="w-full mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={storeStudent}>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        {errors.name && <p className='text-red-600 italic'>{errors.name}</p>}
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />

                        <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin</label>
                        {errors.gender && <p className='text-red-600 italic'>{errors.gender}</p>}
                        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="">Pilih satu</option>
                            <option value="L">Laki-Laki</option>
                            <option value="P">Perempuan</option>
                        </select>

                        <label for="classRoom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kelas</label>
                        {errors.class_room_id && <p className='text-red-600 italic'>{errors.class_room_id}</p>}
                        <select id="classRoom" value={classId} onChange={(e) => setClassId(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected>Pilih satu</option>
                            {classRoom.map((cr) => (
                                <option value={cr.id}>{cr.name}</option>
                            ))}
                        </select>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Foto</label>
                        {errors.image && <p className='text-red-600 italic'>{errors.image}</p>}
                        <input onChange={(e) => setImage(e.target.files[0])} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                        <button type="submit" className="text-white etxt-end bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </form>
                </div>


            </Layout>
        </>
    )
}
