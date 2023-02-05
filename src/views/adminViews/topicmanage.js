import React from "react";
import { render } from "@testing-library/react";
import '../../css/styleView.css';
import { PureComponent } from 'react';
import { Editor } from 'react-bootstrap-editor';
class ChudeGiangday extends React.Component {
    state = {
        toolList: ''
    }

    handleEditor = (event) => {
        this.setState({
            noidung: event.target.value
        })
    }
    handleSave = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        let {
            toolList
        } = this.state;
        return (
            <>
                <head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
                    />
                </head>
                <div className="top_header">
                    <form>
                        <label for="exampleFormControlInput1" class="form-label" style={{ 'font-size': '18px', 'margin-bottom': '2%' }}>Lên Kế Hoạch Chủ Đề Giảng Dạy</label>
                        <ul>
                            <li><label for="exampleFormControlInput1" class="form-label">Tên chủ đề: </label>
                                <input style={{ width: '110%', }} type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /></li>
                            <li><label for="exampleFormControlInput1" class="form-label">Tháng:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="1">Tháng 1</option>
                                    <option value="2">Tháng 2</option>
                                    <option value="3">Tháng 3</option>
                                    <option value="4">Tháng 4</option>
                                    <option value="5">Tháng 5</option>
                                    <option value="6">Tháng 6</option>
                                    <option value="7">Tháng 7</option>
                                    <option value="8">Tháng 8</option>
                                    <option value="9">Tháng 9</option>
                                    <option value="10">Tháng 10</option>
                                    <option value="11">Tháng 11</option>
                                    <option value="12">Tháng 12</option>
                                </select></li>
                            <li><label for="exampleFormControlInput1" class="form-label">Học kỳ:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="1">Học kỳ 1</option>
                                    <option value="2">Học kỳ 2</option>
                                </select></li>
                            <li><label for="exampleFormControlInput1" class="form-label">Năm học:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="2021">2020-2021</option>
                                    <option value="2122">2021-2022</option>
                                </select>
                            </li>
                        </ul>
                        <br></br>
                        <br></br>
                        <div className="editor" style={{ clear: "both", }}>
                            <label for="exampleFormControlInput1" class="form-label" style={{ 'font-size': '16px' }}>Nội dung hoạt động chi tiết:</label>
                            <Editor style={{ ' outline': 'none' }} value="<p>test</p>" onChange={(event) => { this.handleEditor(toolList) }} />
                        </div>

                        <button style={{ 'margin-top': '1.2%', 'margin-bottom': '2%' }} onClick={() => this.handleSave()} type="submit" class="btn btn-primary">Lưu</button>
                    </form>
                </div>
                <div className="container_content">
                    <table class="table table-hover">

                        <thead>
                            <tr>
                                <th style={{ 'text-align': 'center', 'font-size': '18px' }} colSpan={6}>Danh Sách Chủ Đề</th>
                            </tr>

                            <tr>
                                <th scope="col" style={{ width: '5%' }}>#</th>
                                <th scope="col" style={{ width: '25%' }}>Tên Chủ Đề</th>
                                <th scope="col" style={{ width: '10%' }}>
                                    <select style={{ border: 'none', outline: 'none' }} aria-label="Default select example">
                                        <option selected value="1">Tháng 1</option>
                                        <option value="2">Tháng 2</option>
                                        <option value="3">Tháng 3</option>
                                        <option value="4">Tháng 4</option>
                                        <option value="5">Tháng 5</option>
                                        <option value="6">Tháng 6</option>
                                        <option value="7">Tháng 7</option>
                                        <option value="8">Tháng 8</option>
                                        <option value="9">Tháng 9</option>
                                        <option value="10">Tháng 10</option>
                                        <option value="11">Tháng 11</option>
                                        <option value="12">Tháng 12</option>
                                    </select>
                                </th>
                                <th scope="col" style={{ width: '10%' }}>
                                    <select style={{ border: 'none', outline: 'none' }} aria-label="Default select example">
                                        <option selected>Học Kỳ</option>
                                        <option value="1">Học kỳ 1</option>
                                        <option value="2">Học kỳ 2</option>
                                    </select>
                                </th>
                                <th scope="col" style={{ width: '10%' }}>
                                    <select style={{ border: 'none', outline: 'none' }} aria-label="Default select example">
                                        <option selected>Năm Học</option>
                                        <option value="2122">2021-2022</option>
                                        <option value="2223">2022-2023</option>
                                    </select>
                                </th>
                                <th scope="col" style={{ width: '20%', 'text-align': 'center' }}>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td style={{ 'text-align': 'center' }}>
                                    <button type="button" class="btn btn-success">
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
                                    <button value="hh" type="button" class="btn btn-primary" style={{ "margin-left": '5px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}
export default ChudeGiangday;