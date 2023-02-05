import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import FormStudent from '../../views/adminViews/FormAddStudent';
import ListStudent from '../../views/adminViews/list_Student';
import ChudeGiangday from "../../views/adminViews/topicmanage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/styleView.css';
import Attendance from "../../views/adminViews/attendence";
<script src="../../../js/main.js"></script>
class IndexMain extends React.Component {
    state = {
        students: [
            {
                id: 1,
                img: 'https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg.webp',
                fullname_St: 'NGUYEN CAO HONG NGOC',
                birthday: '22/02/2007',
                palce_birth: 'An Giang',
                sex: 'Nam',
                national: 'Viet Nam',
                ethnic: 'Khmer',
                object: 1,
                address: 'Tri Ton An Giang',
                // information mother
                fullname_mo: 'Neang Ma Lai',
                job_mo: 'Làm ruộng',
                birthday_mo: '1979',
                national_mo: 'Viet Nam',
                ethnic_mo: 'Khmer',
                address_mo: 'Tri Ton - An Giang',
                numberphone_mo: '0399012157',
                // information father
                fullname_fa: 'Chau Đươn',
                job_fa: 'Làm ruộng',
                birthday_fa: '1973',
                national_fa: 'Viet Nam',
                ethnic_fa: 'Khmer',
                address_fa: 'Tri Ton - An Giang',
                numberphone_fa: '0399012155',
                attendece: [
                    '0', '1'
                ]

            },

        ],

        classroom: [
            {
                clroomname: 'Lop La 1',
                quantity: '30',
                year: '2021-2022',
            },
            {
                clroomname: 'Lop La 2',
                quantity: '30',
                year: '2021-2022',
            },
            {
                clroomname: 'Lop Choi 1',
                quantity: '30',
                year: '2021-2022',
            },
            {
                clroomname: 'Lop Choi 2',
                quantity: '30',
                year: '2021-2022',
            },
        ]
    }

    addStudent = (student) => {
        this.setState({
            students: [...this.state.students, student]
        })
    }
    attendanceStudent = (atten, index) => {
        this.setState({
            students: [...this.state.students[index], atten]
        })
    }
    // 
    render() {
        return (
            <>
                <head>

                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                    <title>Dashboard - NiceAdmin Bootstrap Template</title>
                    <meta content="" name="description" />
                    <meta content="" name="keywords" />

                    {/* 
                    <link href="../../assets/img/favicon.png" rel="icon" />
                    <link href="../../assets/img/apple-touch-icon.png" rel="apple-touch-icon" /> */}


                    <link href="https://fonts.gstatic.com" rel="preconnect" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

                    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="../../vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                    <link href="../../vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                    <link href="../../vendor/quill/quill.snow.css" rel="stylesheet" />
                    <link href="../../vendor/quill/quill.bubble.css" rel="stylesheet" />
                    <link href="../../vendor/remixicon/remixicon.css" rel="stylesheet" />
                    <link href="../../vendor/simple-datatables/style.css" rel="stylesheet" />

                    <link href="../../css/style.css" rel="stylesheet" />
                </head>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <header id="header" class="header fixed-top d-flex align-items-center">

                    <div class="d-flex align-items-center justify-content-between">
                        <a href="index.html" class="logo d-flex align-items-center">
                            <img src="../../img/logo.png" alt="" />
                            <span class="d-none d-lg-block">Quých Đi</span>
                        </a>
                        <i class="bi bi-list toggle-sidebar-btn"></i>
                    </div>

                    <div class="search-bar">
                        <form class="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                            <button type="submit" title="Search"><i class="bi bi-search"></i></button>
                        </form>
                    </div>

                    <nav class="header-nav ms-auto">
                        <ul class="d-flex align-items-center">

                            <li class="nav-item d-block d-lg-none">
                                <a class="nav-link nav-icon search-bar-toggle " href="#">
                                    <i class="bi bi-search"></i>
                                </a>
                            </li>

                            <li class="nav-item dropdown">

                                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                    <i class="bi bi-bell"></i>
                                    <span class="badge bg-primary badge-number">4</span>
                                </a>

                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                    <li class="dropdown-header">
                                        You have 4 new notifications
                                        <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <li class="notification-item">
                                        <i class="bi bi-exclamation-circle text-warning"></i>
                                        <div>
                                            <h4>Lorem Ipsum</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>30 min. ago</p>
                                        </div>
                                    </li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <li class="notification-item">
                                        <i class="bi bi-x-circle text-danger"></i>
                                        <div>
                                            <h4>Atque rerum nesciunt</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>1 hr. ago</p>
                                        </div>
                                    </li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <li class="notification-item">
                                        <i class="bi bi-check-circle text-success"></i>
                                        <div>
                                            <h4>Sit rerum fuga</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>2 hrs. ago</p>
                                        </div>
                                    </li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <li class="notification-item">
                                        <i class="bi bi-info-circle text-primary"></i>
                                        <div>
                                            <h4>Dicta reprehenderit</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li class="dropdown-footer">
                                        <a href="#">Show all notifications</a>
                                    </li>

                                </ul>

                            </li>

                            <li class="nav-item dropdown">

                                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                    <i class="bi bi-chat-left-text"></i>
                                    <span class="badge bg-success badge-number">3</span>
                                </a>

                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                    <li class="dropdown-header">
                                        You have 3 new messages
                                        <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <li class="message-item">
                                        <a href="#">
                                            <img src="../../img/messages-1.jpg" alt="" class="rounded-circle" />
                                            <div>
                                                <h4>Maria Hudson</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>4 hrs. ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>

                                    <li class="message-item">
                                        <a href="#">
                                            <img src="../../img/messages-2.jpg" alt="" class="rounded-circle" />
                                            <div>
                                                <h4>Anna Nelson</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>6 hrs. ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>

                                    <li class="message-item">
                                        <a href="#">
                                            <img src="../../img/messages-3.jpg" alt="" class="rounded-circle" />
                                            <div>
                                                <h4>David Muldon</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>8 hrs. ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>

                                    <li class="dropdown-footer">
                                        <a href="#"></a>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown pe-3">

                                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                    <img src="./././logo192.png" alt="Profile" class="rounded-circle" />
                                    <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                                </a>

                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li class="dropdown-header">
                                        <h6>Kevin Anderson</h6>
                                        <span>Web Designer</span>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>

                                    <li>
                                        <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i class="bi bi-person"></i>
                                            <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>

                                    <li>
                                        <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i class="bi bi-gear"></i>
                                            <span>Account Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>

                                    <li>
                                        <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                            <i class="bi bi-question-circle"></i>
                                            <span>Need Help?</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>

                                    <li>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <i class="bi bi-box-arrow-right"></i>
                                            <span>Sign Out</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </nav>


                </header>
                {/* END HEADER -------------------*/}

                {/* START SLIDE BAR */}
                <aside id="sidebar" class="sidebar">

                    <ul class="sidebar-nav" id="sidebar-nav">

                        <li class="nav-item">
                            <a class="nav-link " href="index.html">
                                <i class="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                                <i class="bi bi-menu-button-wide"></i><span>Quản Lý Học Sinh</span><i class="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="components-nav" class="drop_nav" data-bs-parent="#sidebar-nav">
                                <li className="lable_nv">
                                    <Link to="/add-student">
                                        <i class="bi bi-folder-plus"></i><span>Tạo Phiếu Nhập Học</span>
                                    </Link>
                                </li>
                                <li className="lable_nv">
                                    <Link to="/list-student">
                                        <i class="bi bi-person-lines-fill"></i><span>Danh Sách Học Sinh</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                                <i class="bi bi-award"></i><span>Quản Lý Khen Thưởng</span><i class="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="components-nav" class="drop_nav" data-bs-parent="#sidebar-nav">
                                <li className="lable_nv">
                                    <Link to="/add-student">
                                        <i class="bi bi-window-plus"></i><span>Thống Kê Theo HK-NH</span>
                                    </Link>
                                </li>
                                <li className="lable_nv">
                                    <Link to="/list-student">
                                        <i class="bi bi-window-stack"></i><span>Xem Chủ Đề Giảng Dạy</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                                <i class="bi bi-window-split"></i><span>Chủ Đề Giảng Dạy</span><i class="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="components-nav" class="drop_nav" data-bs-parent="#sidebar-nav">
                                <li className="lable_nv">
                                    <Link to="/add-topic-management">

                                        <i class="bi bi-window-plus"></i><span>Tạo Chủ Đề Giảng Dạy</span>
                                    </Link>
                                </li>
                                <li className="lable_nv">
                                    <Link to="/list-student">
                                        <i class="bi bi-window-stack"></i><span>Xem Chủ Đề Giảng Dạy</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                                <i class="bi bi-menu-button-wide"></i><span>Điểm Danh</span><i class="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="components-nav" class="drop_nav" data-bs-parent="#sidebar-nav">
                                <li className="lable_nv">
                                    <Link to="/plus-attendance">
                                        <i class="bi bi-folder-plus"></i><span>Tạo Phiếu Điểm Danh</span>
                                    </Link>
                                </li>
                                <li className="lable_nv">
                                    <Link to="/list-student">
                                        <i class="bi bi-person-lines-fill"></i><span>Danh Sách Học Sinh</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                    </ul>

                </aside>
                {/* END SLIDE BAR-----------  */}
                {/* -----------------------------------------------------MAIN----------------- */}
                <main id="main" class="main">
                    <Routes>
                        <Route path="/add-student" exact element={<FormStudent
                            students={this.state.students}
                            addStudent={this.addStudent}
                            classroom={this.state.classroom}
                        />} />
                        <Route path="/list-student" element={<ListStudent
                            students={this.state.students}

                        />} />

                        <Route path="add-topic-management" element={<ChudeGiangday />} />
                        <Route path="plus-attendance" element={<Attendance
                            students={this.state.students}
                            attendece={this.attendece}
                        />} />

                    </Routes>

                </main >
            </>
        )
    }
}
export default IndexMain;