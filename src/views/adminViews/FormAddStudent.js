import { render } from "@testing-library/react";
import '../../css/styleView.css';
import React from "react";
import Upload from "./uploadFile";
import RegistrationClass from "./registration_class";
import { toast } from 'react-toastify';


class FromStudent extends React.Component {
    state = {
        st: ' width: 50%; height: 200px; background-color: blue; border: 1px solid blue',
        id: '',
        img: '',
        fullname_St: '',
        birthday: '',
        palce_birth: '',
        sex: '',
        national: '',
        ethnic: '0',
        object: '',
        address: '',
        fullname_mo: '',
        job_mo: '',
        birthday_mo: '',
        national_mo: '',
        ethnic_mo: '0',
        address_mo: '',
        numberphone_mo: '',
        fullname_fa: '',
        job_fa: '',
        birthday_fa: '',
        national_fa: '0',
        ethnic_fa: '',
        address_fa: '',
        numberphone_fa: '',

    }
    // handel student
    hadlefulname_st = (event) => {
        this.setState({
            fullname_St: event.target.value
        })
    }

    hadlefbirthday = (event) => {
        this.setState({
            birthday: event.target.value
        })
    }

    hadlesex = (event) => {
        this.setState({
            sex: event.target.value
        })
    }
    hadlenational = (event) => {
        this.setState({
            national: event.target.value
        })
    }

    hadleethnic = (event) => {
        this.setState({
            ethnic: event.target.value
        })
    }

    hadleobject = (event) => {
        this.setState({
            object: event.target.value
        })
    }

    hadleaddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    hadleplecebirth = (event) => {
        this.setState({
            palce_birth: event.target.value
        })
    }
    // handele mother

    hadlefullname_mo = (event) => {
        this.setState({
            fullname_mo: event.target.value
        })
    }

    hadlejob_mo = (event) => {
        this.setState({
            job_mo: event.target.value
        })
    }
    hadlebirthday_mo = (event) => {
        this.setState({
            birthday_mo: event.target.value
        })
    }

    hadlenational_mo = (event) => {
        this.setState({
            national_mo: event.target.value
        })
    }
    hadletjob_mo = (event) => {
        this.setState({
            job_mo: event.target.value
        })
    }
    hadlethnic_mo = (event) => {
        this.setState({
            ethnic_mo: event.target.value
        })
    }

    hadleaddress_mo = (event) => {
        this.setState({
            address_mo: event.target.value
        })
    }

    hadlephone_mo = (event) => {
        this.setState({
            numberphone_mo: event.target.value
        })
    }

    // handel father
    hadlefullname_fa = (event) => {
        this.setState({
            fullname_fa: event.target.value
        })
    }

    hadlejob_fa = (event) => {
        this.setState({
            job_fa: event.target.value
        })
    }
    hadlebirthday_fa = (event) => {
        this.setState({
            birthday_fa: event.target.value
        })
    }

    hadlenational_fa = (event) => {
        this.setState({
            national_fa: event.target.value
        })
    }
    hadletjob_fa = (event) => {
        this.setState({
            job_fa: event.target.value
        })
    }
    hadlethnic_fa = (event) => {
        this.setState({
            ethnic_fa: event.target.value
        })
    }

    hadleaddress_fa = (event) => {
        this.setState({
            address_fa: event.target.value
        })
    }

    hadlephone_fa = (event) => {
        this.setState({
            numberphone_fa: event.target.value
        })
    }
    Save = (event) => {
        event.preventDefault();

        this.props.addStudent({
            id: Math.floor(Math.random() * 140),
            fullname_St: this.state.fullname_St,
            birthday: this.state.birthday,
            palce_birth: this.state.palce_birth,
            sex: this.state.sex,
            national: this.state.national,
            ethnic: this.state.ethnic,
        })

        this.setState({
            id: '',
            img: '',
            fullname_St: '',
            birthday: '',
            palce_birth: '',
            sex: '',
            national: '',
            ethnic: '0',
        })
        toast.success('greaa');
    }

    render() {

        return (

            <>
                <form>
                    <table>
                        <tr>
                            <th colSpan={3}><i class="bi bi-person-fill"></i>THÔNG TIN HỌC SINH</th>
                        </tr>
                        <tr>
                            <td rowSpan={7} colSpan={2} id="avata">
                                <Upload
                                    img={this.state.img} />
                            </td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={4}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Họ và Tên:</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(event) => { this.hadlefulname_st(event) }} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={2}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Năm Sinh</label>
                                    <input type="date" onChange={(event) => { this.hadlefbirthday(event) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nơi Sinh</label>
                                    <input type="text" onChange={(event) => { this.hadleplecebirth(event) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right">
                                <label for="exampleFormControlInput1" class="form-label">Giới Tính</label> <br></br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" onChange={(event) => { this.hadlesex(event) }} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                                    <label class="form-check-label" for="inlineRadio1">Nam</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input onChange={(event) => { this.hadlesex(event) }} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                                    <label class="form-check-label" for="inlineRadio2">Nữ</label>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={2}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Quốc Tịch</label>
                                    <input type="text" onChange={(event) => { this.hadlenational(event) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Dân Tộc</label>
                                    <select class="form-select" aria-label="Default select example" onChange={(event) => { this.hadleethnic(event) }}>
                                        <option selected value="0">Kinh</option>
                                        <option value="1">Chăm</option>
                                        <option value="2">Hoa</option>
                                        <option value="3">Khmer</option>
                                        <option value="5">Khác</option>
                                    </select>
                                </div>
                            </td>
                            <td className="dantoc container_info_right">
                                <div class="mb-3">
                                    <input type="checkbox" onChange={(event) => { this.hadleobject(event) }} id="exampleFormControlInput2" placeholder="" value="1" />
                                    Đối tượng chính sách
                                </div>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td colSpan={4} className="container_info_right" >
                                <div class="mb-3" >
                                    <label for="exampleFormControlInput1" class="form-label">Nơi thường trú</label>
                                    <input type="text" onChange={(event) => { this.hadleaddress(event) }} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td colSpan={4} className="container_info_right">
                                <RegistrationClass
                                    classroom={this.props.classroom}
                                ></RegistrationClass>
                            </td>

                        </tr>

                        <tr>
                            <th id="info_family" colSpan={5}><i class="bi bi-person-fill"></i>THÔNG TIN GIA ĐÌNH</th>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={5}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Họ và Tên Mẹ:</label>
                                    <input type="text" onChange={(event) => { this.hadlefullname_mo(event) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nghề Nghiệp:</label>
                                    <input type="text" class="form-control" onChange={(event) => this.hadletjob_mo(event)} id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="container_info_right" style={{ width: '10%' }} >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Ngày Sinh</label>
                                    <input type="date" onChange={(event) => { this.hadlebirthday_mo(event) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>

                            </td>
                            <td className="container_info_right" style={{ width: '120px' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Quốc Tịch</label>
                                    <input type="text" onChange={(event) => { this.hadlenational_mo(event) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right" style={{ width: '120px' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Dân Tộc</label>
                                    <select class="form-select" aria-label="Default select example" onChange={(event) => { this.hadlethnic_mo(event) }}>
                                        <option selected value={0}>Kinh</option>
                                        <option value="1">Chăm</option>
                                        <option value="2">Hoa</option>
                                        <option value="3">Khmer</option>
                                        <option value="5">Khác</option>
                                    </select>
                                </div>

                            </td>
                            <td className="container_info_right" colSpan={3}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Hổ Khẩu Thường Trú</label>
                                    <input type="text" onChange={(event) => { this.hadleaddress_mo(event) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={5}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Số Điện Thoại</label>
                                    <input type="tel" onChange={(event) => { this.hadlephone_mo(event) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={6}><hr></hr></td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={5}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Họ và Tên Cha:</label>
                                    <input type="text" onChange={(event) => this.hadlefullname_fa(event)} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nghề Nghiệp:</label>
                                    <input type="text" onChange={(event) => this.hadletjob_fa(event)} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="container_info_right" style={{ width: '10%' }} >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Ngày Sinh</label>
                                    <input type="date" onChange={(event) => this.hadlebirthday_fa(event)} class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>

                            </td>
                            <td className="container_info_right" style={{ width: '120px' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Quốc Tịch</label>
                                    <input type="text" class="form-control" onChange={(event) => this.hadlenational_fa(event)} id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right" style={{ width: '120px' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Dân Tộc</label>
                                    <select class="form-select" aria-label="Default select example" onChange={(event) => { this.hadlethnic_fa(event) }}>
                                        <option selected value="0">Kinh</option>
                                        <option value="1">Chăm</option>
                                        <option value="2">Hoa</option>
                                        <option value="3">Khmer</option>
                                        <option value="5">Khác</option>
                                    </select>
                                </div>

                            </td>
                            <td className="container_info_right" colSpan={3}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Hổ Khẩu Thường Trú</label>
                                    <input type="text" class="form-control" onChange={(event) => { this.hadleaddress_fa(event) }} id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={5}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Số Điện Thoại</label>
                                    <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(event) => this.hadlephone_fa(event)} />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <button onClick={(event) => { this.Save(event) }} type="submit" class="btn btn-primary">Lưu</button>
                    <button type="reset" class="btn btn-danger">Khôi Phục</button>
                </form>

                {/* -------------------------------------------------------------- */}
            </>
        );
    }
} export default FromStudent;