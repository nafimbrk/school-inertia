import { route } from "ziggy-js";
import Layout from "../../Layouts/Layout";
import { Link, router } from "@inertiajs/react";


export default function Index({ students, session, auth }) {

    const deleteStudent = (id) => {
        router.delete(route('student.destroy', id))
    }


    return (
        <Layout>
            <h3>Student List</h3>


            {auth.user.role === 'admin' && (
                <Link href={route('student.create')}>Add</Link>
            )}


            {session.success && (
                <p style={{ color: 'green' }}>{session.success}</p>
            )}

            <table style={{ borderCollapse: "collapse", width: "50%" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        {auth.user.role === 'admin' && (
                            <th>Action</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, index) => (
                            <tr key={student.id}>
                                <td>{++index}</td>
                                <td><img src={`/storage/image/${student.image}`} alt="" /></td>
                                <td>{student.name}</td>
                                <td>{student.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
                                <td>{student.class.name}</td>
                                {auth.user.role === 'admin' && (
                                    <>
                                        <td><Link href={route('student.edit', student.id)}>Edit</Link></td>
                                        <td><button onClick={() => deleteStudent(student.id)}>Delete</button></td>
                                    </>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" style={{ textAlign: "center" }}>data kosong</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Layout>
    )
}
