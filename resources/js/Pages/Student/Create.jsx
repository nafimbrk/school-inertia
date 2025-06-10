import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { router } from "@inertiajs/react";
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
        <Layout>
            <h3>Add Student</h3>

            <form onSubmit={storeStudent}>
                <label htmlFor="name">Name: </label>
                {errors.name && (
                    <p style={{ color:'red' }}>{errors.name}</p>
                )}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
                    border: '1px solid #ced4da'
                }} />
                <br />
                <label htmlFor="gender">Gender:</label>
                {errors.gender && (
                    <p style={{ color:'red' }}>{errors.gender}</p>
                )}
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="" selected disabled>pilih satu</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                </select>
                <br />
                <label htmlFor="class_room_id">Class:</label>
                {errors.class_room_id && (
                    <p style={{ color:'red' }}>{errors.class_room_id}</p>
                )}
                <select value={classId} onChange={(e) => setClassId(e.target.value)}>
                    <option value="" selected disabled>pilih satu</option>
                    {classRoom.map((cr) => (
                        <option value={cr.id}>{cr.name}</option>
                    ))}
                </select>
                <br />
                <label htmlFor="image">Image: </label>
                {errors.image && (
                    <p style={{ color:'red' }}>{errors.image}</p>
                )}
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{ border: '1px solid #ced4da' }}
                />

                <br />
                <button>Save</button>
            </form>
        </Layout>
    )
}
