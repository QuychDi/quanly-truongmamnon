import { render } from "@testing-library/react";
import React from "react";
import DetialSudent from "./studentDetial";
import FormStudentDetail from "./formStudentdetail";
// import '../../css/style.css'
import '../../css/styleView.css'
import { click } from "@testing-library/user-event/dist/click";

class ListStudent extends React.Component {
    state = {
        active: false,
        arrC: 0,

    }

    mouseOverviewDetial = (event, index) => {
        this.setState({
            arrC: index
        })

        console.log(this.state)
        // console.log(arrC)
        // this.state.students[index].splice(
        //     this.state.students[index].length, 0, 'helli: true'
    }
    mouseOutviewDetial = (event) => {
        console.log(event)
        // this.state.students[index].activeDetial = false;
        // console.log(this.state.students[index]);
    }
    render() {
        let { active, arrC } = this.state;
        let { students } = this.props;
        return (
            <>

                <div className="header_list">
                    <div className="top_left">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="top_right">
                        <input className="form-control" type="search" placeholder="search hear" />
                    </div>
                </div>

                <table class="table datatable">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Họ và Tên</th>
                            <th scope="col">Năm Sinh</th>
                            <th scope="col">Nơi Sinh</th>
                            <th scope="col">Giới Tính</th>
                            <th scope="col">Quốc Tịch</th>
                            <th scope="col">Dân Tộc</th>
                            <th scope="col">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((item, index) => {

                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.fullname_St}</td>
                                            <td>{item.birthday}</td>
                                            <td>{item.palce_birth}</td>
                                            <td>{
                                                item.sex == 1 ? 'Nam' : 'Nữ'
                                            }</td>
                                            <td>{item.national}</td>
                                            <td>{item.ethnic}</td>
                                            <td><button type="button" class="btn btn-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                                </svg>

                                            </button>
                                                <button type="button" class="btn btn-success deleted" style={{ "margin-left": '5px' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                                                    </svg>


                                                </button>


                                                <button style={{ "margin-left": '5px' }} onClick={(item) => { this.mouseOverviewDetial(item, index) }} type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                                                    </svg>
                                                </button>

                                                {/* -----------------------------------MODAL---------------------------------------------*/}
                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog" style={{ width: 'auto' }}>
                                                        <div class="modal-content">
                                                            <div class="modal-header">

                                                                <th colSpan={4}><i class="bi bi-person-fill"></i>THÔNG TIN HỌC SINH</th>

                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <table style={{ 'border-collapse': ' collapse' }}>

                                                                    <tr>
                                                                        <td rowSpan={6} id="avata_st" colSpan={3}>
                                                                            <div id="avata_stbder">
                                                                                <img src="https://tiemanhsky.com/wp-content/uploads/2020/03/61103071_2361422507447925_6222318223514140672_n_1.jpg" />
                                                                            </div>

                                                                        </td>
                                                                        <td className="container_info_right" colSpan={5}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Họ và Tên:</label>
                                                                            <span className="result_infoSt" >{this.props.students[arrC].fullname_St}</span>

                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={2}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Năm Sinh: </label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].birthday}</span>

                                                                        </td>
                                                                    </tr>
                                                                    <tr>

                                                                        <td className="container_info_right" colSpan={2}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Nơi Sinh:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].palce_birth}</span>


                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={4}>
                                                                            <label for="exampleFormControlInput1" class="form-label">Giới Tính:</label>
                                                                            <span className="result_infoSt">{
                                                                                this.props.students[arrC].sex == 1 ? 'Nam' : 'Nữ'
                                                                            }</span>

                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={4}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Dân Tộc: </label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].ethnic}</span>

                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={4}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Quốc Tịch:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].national}</span>

                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td colSpan={4} className="container_info_right" >

                                                                            <label for="exampleFormControlInput1" class="form-label">Nơi Thường Trú:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].address}</span>

                                                                        </td>

                                                                    </tr>

                                                                    <tr>
                                                                        <th id="info_family" colSpan={5}><i class="bi bi-person-fill"></i>THÔNG TIN GIA ĐÌNH</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={4}>
                                                                            <label for="exampleFormControlInput1" class="form-label">Họ và Tên Mẹ:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].fullname_mo}</span>
                                                                            <label style={{ 'padding-left': '2%' }} for="exampleFormControlInput1" class="form-label">Nghề Nghiệp:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].job_mo}</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={4} >

                                                                            <label for="exampleFormControlInput1" class="form-label">Ngày Sinh:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].birthday_mo}</span>

                                                                            <label style={{ 'padding-left': '2%' }} for="exampleFormControlInput1" class="form-label">Dân Tộc:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].ethnic_mo}</span>

                                                                            <label style={{ 'padding-left': '2%' }} for="exampleFormControlInput1" class="form-label">Quốc Tịch:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].national_mo}</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={5}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Hổ Khẩu Thường Trú:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].address_mo}</span>

                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={5}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Số Điện Thoại</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].numberphone_mo}</span>

                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan={6}><hr></hr></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={5}>
                                                                            <label for="exampleFormControlInput1" class="form-label">Họ và Tên Cha:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].fullname_fa}</span>
                                                                            <label style={{ 'padding-left': '2%' }} for="exampleFormControlInput1" class="form-label">Nghề Nghiệp:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].job_fa}</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={4} >

                                                                            <label for="exampleFormControlInput1" class="form-label">Ngày Sinh:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].birthday_fa}</span>

                                                                            <label style={{ 'padding-left': '2%' }} for="exampleFormControlInput1" class="form-label">Dân Tộc:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].ethnic_fa}</span>

                                                                            <label style={{ 'padding-left': '2%' }} for="exampleFormControlInput1" class="form-label">Quốc Tịch:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].national_fa}</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={5}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Hổ Khẩu Thường Trú:</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].address_fa}</span>

                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="container_info_right" colSpan={5}>

                                                                            <label for="exampleFormControlInput1" class="form-label">Số Điện Thoại</label>
                                                                            <span className="result_infoSt">{this.props.students[arrC].numberphone_fa}</span>

                                                                        </td>
                                                                    </tr>


                                                                </table>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                                <>
                                                    {
                                                        active === true && <h2>Xin Chao</h2>
                                                    }
                                                </>
                                            </td>
                                        </tr>
                                    </>
                                )

                            })
                        }




                    </tbody>
                </table>


            </>
        )
    }
}
export default ListStudent;