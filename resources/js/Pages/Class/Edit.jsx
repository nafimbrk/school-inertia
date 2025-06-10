import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { router } from "@inertiajs/react";
import { route } from "ziggy-js";


export default function Edit({ classRoom, errors }) {

    const [name, setName] = useState(classRoom.name)

    const updateClass = (e) => {

        e.preventDefault()

        router.put(route('class.update', classRoom.id), {
            name
        })
    }

    return (
        <Layout>
            <h3>Edit Class</h3>
            <form onSubmit={updateClass}>
                <label htmlFor="name">Name:</label>
                {errors.name && (
                    <p>{errors.name}</p>
                )}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
                    border: '1px solid #ced4da'
                }} />
                <br />
                <button type="submit">Simpan</button>
            </form>
        </Layout>
    )
}
