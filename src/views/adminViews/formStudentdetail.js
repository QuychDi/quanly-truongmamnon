import { render } from "@testing-library/react";
import React from "react";
import { Form } from "react-bootstrap";
import Upload from "./uploadFile";

class FormStudentDetail extends React.Component {
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
                                />
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
                                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nơi Sinh</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right">
                                <label for="exampleFormControlInput1" class="form-label">Giới Tính</label> <br></br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                                    <label class="form-check-label" for="inlineRadio1">Nam</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                                    <label class="form-check-label" for="inlineRadio2">Nữ</label>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={2}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Quốc Tịch</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Dân Tộc</label>
                                    <select class="form-select" aria-label="Default select example">
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
                                    <input type="checkbox" id="exampleFormControlInput2" placeholder="" value="1" />
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
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td colSpan={4} className="container_info_right">
                                <div class="mb-3" >
                                    <label for="exampleFormControlInput1" class="form-label">Nơi thường trú</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <th id="info_family" colSpan={5}><i class="bi bi-person-fill"></i>THÔNG TIN GIA ĐÌNH</th>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={5}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Họ và Tên Mẹ:</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nghề Nghiệp:</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="container_info_right" style={{ width: '10%' }} >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Ngày Sinh</label>
                                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>

                            </td>
                            <td className="container_info_right" style={{ width: '120px' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Quốc Tịch</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right" style={{ width: '120px' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Dân Tộc</label>
                                    <select class="form-select" aria-label="Default select example">
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
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={5}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Số Điện Thoại</label>
                                    <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="" />
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
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nghề Nghiệp:</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="container_info_right" style={{ width: '10%' }} >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Ngày Sinh</label>
                                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>

                            </td>
                            <td className="container_info_right" style={{ width: '120px' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Quốc Tịch</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                            <td className="container_info_right" style={{ width: '120px' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Dân Tộc</label>
                                    <select class="form-select" aria-label="Default select example" >
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
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="container_info_right" colSpan={5}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Số Điện Thoại</label>
                                    <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <button type="submit" class="btn btn-primary">Lưu</button>
                    <button type="reset" class="btn btn-danger">Khôi Phục</button>
                </form>
            </>
        )
    }
} export default FormStudentDetail;