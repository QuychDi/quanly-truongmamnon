import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import '../../css/style.css';

import '../../vendor/simple-datatables/style.css';
import '../../vendor/remixicon/remixicon.css';
import '../../vendor/quill/quill.bubble.css';
import '../../vendor/quill/quill.snow.css';
import '../../vendor/boxicons/css/boxicons.min.css';
import '../../vendor/bootstrap-icons/bootstrap-icons.css';
import '../../vendor/bootstrap/css/bootstrap.min.css';


class Main extends React.Component {
    state = {
        style: '  text-decoration: none',
    }
    render() {
        return (
            <>
                <head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>Pages / Login - NiceAdmin Bootstrap Template</title>
                    <meta content="" name="description" />
                    <meta content="" name="keywords" />


                </head>

                <body>

                    <main>
                        <div class="container">

                            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                            <div class="py-4">
                                                <a href="index.html" class="logo d-flex align-items-center w-auto">
                                                    <img src="../../img/logo.png" alt="" />
                                                    <span class="d-none d-lg-block">Trường Mầm Non Thị Trấn Tri Tôn</span>
                                                </a>
                                            </div>

                                            <div class="card mb-3">

                                                <div class="card-body">

                                                    <div class="pt-4 pb-2">
                                                        <h5 class="card-title text-center pb-0 fs-4">Đăng Nhập</h5>
                                                        <p class="text-center small">Nhập tên đăng nhập và mật khẩu</p>
                                                    </div>

                                                    <form class="row g-3 needs-validation" novalidate>

                                                        <div class="col-12">
                                                            <label for="yourUsername" class="form-label">Tên đăng nhập</label>
                                                            <div class="input-group has-validation">
                                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                                <input type="text" name="username" class="form-control" id="yourUsername" required />
                                                                <div class="invalid-feedback">Please enter your username.</div>
                                                            </div>
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourPassword" class="form-label">Mật khẩu</label>
                                                            <input type="password" name="password" class="form-control" id="yourPassword" required />
                                                            <div class="invalid-feedback">Please enter your password!</div>
                                                        </div>

                                                        <div class="col-12">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                                <label class="form-check-label" for="rememberMe">Nghi nhớ tôi</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <button class="btn btn-primary w-100" type="submit">Đăng Nhập</button>
                                                        </div>
                                                        <div class="col-12">
                                                            <p class="small mb-0">Bạn không có tài khoản? <Link to="/new-account">Tạo tài khoản</Link></p>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>

                                            <div class="credits">


                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </section>

                        </div>
                    </main>

                    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


                    <script src="../../vendor/apexcharts/apexcharts.min.js"></script>
                    <script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="../../vendor/chart.js/chart.min.js"></script>
                    <script src="../../vendor/echarts/echarts.min.js"></script>
                    <script src="../../vendor/quill/quill.min.js"></script>
                    <script src="../../vendor/simple-datatables/simple-datatables.js"></script>
                    <script src="../../vendor/tinymce/tinymce.min.js"></script>
                    <script src="../../vendor/php-email-form/validate.js"></script>


                    <script src="../../js/main.js"></script>

                </body >
            </>
        );
    }
}
export default Main;