import { router } from "@inertiajs/react";
import Layout from "../../Layouts/Layout";
import { useState } from "react";
import { route } from "ziggy-js";

export default function Edit({ student, errors, classRoom }) {

    const [name, setName] = useState(student.name)
    const [gender, setGender] = useState(student.gender)
    const [classId, setClassId] = useState(student.class_room_id)
    const [image, setImage] = useState(null)




    const updateStudent = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'put');
    formData.append('name', name);
    formData.append('gender', gender);
    formData.append('class_room_id', classId);
    if (image) formData.append('image', image);

    router.post(route('student.update', student.id), formData);
};



    return (
        <Layout>
            <h3>Edit Student</h3>

            <form onSubmit={updateStudent}>
                <label htmlFor="name">Name: </label>
                {errors.name && (
                    <p style={{ color: 'red' }}>{errors.name}</p>
                )}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
                    border: '1px solid #ced4da'
                }} />
                <br />
                <label htmlFor="gender">Gender:</label>
                {errors.gender && (
                    <p style={{ color: 'red' }}>{errors.gender}</p>
                )}
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="" selected disabled>pilih satu</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                </select>
                <br />
                <label htmlFor="class_room_id">Class:</label>
                {errors.class_room_id && (
                    <p style={{ color: 'red' }}>{errors.class_room_id}</p>
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
                    <p style={{ color: 'red' }}>{errors.image}</p>
                )}
                <img src={`/storage/image/${student.image}`} alt="" />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{ border: '1px solid #ced4da' }}
                />

                <br />
                <button type="submit">Save</button>
            </form>
        </Layout>
    )
}
