import { render } from "@testing-library/react";
import React from "react";

class RegistrationClass extends React.Component {
    render() {
        let { classroom } = this.props
        return (
            <>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Lớp Học
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {
                                    classroom.map((classrooms, index) => {
                                        return (
                                            <>
                                                <table class="table-warning">
                                                    <tr>
                                                        <th colSpan={3}>Lớp {classrooms.clroomname} - Sỉ số còn lại <span style={{ 'color': 'red' }}>22</span>/{classrooms.quantity}</th>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <button style={{ 'width': '80px', 'font-size': '13px' }} type="button" class="btn btn-success">Đăng Ký</button>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <div> <hr></hr></div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default RegistrationClass;