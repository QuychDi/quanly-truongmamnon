import React from "react";
import { render } from "@testing-library/react";
class Attendance extends React.Component {
    state = {
        attendece: 0
    }
    hadleaClkAttenndance = (event, index) => {
        console.log(event)
        if (event.target.checked) {
            this.props.attendece({
                attendance: 1
            })
            // this.props.students[index].pus
            // event.target.value = 1;
            // console.log(event.target.value);
            // console.log(this.props.students[index].)
        } else {
            event.target.value = 0
            console.log(event.target.value);
        }

    }
    render() {
        let d = new Date();
        let { students } = this.props;
        return (
            <>
                <div className="container_attendance">
                    <label for="exampleFormControlInput1" class="form-label">Phiếu Điểm Danh  {d.toUTCString()}</label>
                </div>
                <form>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Họ và Tên</th>
                                <th scope="col">Năm Sinh</th>
                                <th scope="col">Giới Tính</th>
                                <th scope="col">Có Mặt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row"></th>
                                                <td>{student.fullname_St}</td>
                                                <td>{student.birthday}</td>
                                                <td>{student.sex}</td>
                                                <td>
                                                    <input type="checkbox" onClick={(student) => { this.hadleaClkAttenndance(student, index) }} />
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })

                            }


                        </tbody>
                    </table>
                    <button type="submit" class="btn btn-primary">LƯU</button>
                </form>
            </>

        )
    }
}
export default Attendance;