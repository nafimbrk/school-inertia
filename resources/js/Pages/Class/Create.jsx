import { useState } from "react"
import Layout from "../../Layouts/Layout"
import { router } from "@inertiajs/react"
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
        <Layout>
            <form onSubmit={createClass}>
                <label htmlFor="name">Name: </label>
                {errors.name && (
                    <p>{errors.name}</p>
                )}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        border: '1px solid #ced4da'
                    }}
                />
                <br />
                <button type="submit">Simpan</button>
            </form>
        </Layout>
    )
}
