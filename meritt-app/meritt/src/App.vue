<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
/***************default settings********************/
* { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
body { background-color: #fff; font-family: 'Roboto', sans-serif; margin:0px; padding:0px; }
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 { font-family: 'Roboto', sans-serif; }
a { text-decoration:none; color: #00ae4e; }
p { color: #747474; }
.bold{
  font-weight: bolder;
}
.p-0 { padding: 0px !important; }
.m-b-0 { margin-bottom: 0px !important; }
.text-right { text-align: right !important; }
.text-left { text-align: left !important; }
.text-center { text-align: center !important; }
/* .mobile-frame { margin: 50px auto; border-radius: 0px; background: #fff; width: 375px; height: 667px; display: block; border: 1px solid #ccc; }
 */ .rotate-minus-90{ transform: rotate(-90deg); }
 .b-0{
	border:none !important;
}
.b-b{
	border-bottom: 1px solid #ccc;
}

.text-green{
	color:#00ae4e;
}.text-white{	color:#fff;}
.light-gray-text{
	color: #747474;
}
.text-warning{
    color: #c55a11;
}
.font-12{
	font-size:12px !important;
}
.icon-lg{
	font-size:30px;
}
.block{
	display:block;
}
.blue-grey{
	background:#607d8b !important;
}

.well {
    border: 1px solid #00ae4e;
    background: #f0f8fb;
	padding:10px;
	border-radius:5px;
	margin-bottom:10px;
}
.well h4{
	border-bottom:1px solid #eee;
	margin:0px 0px 5px 0px;
	padding-bottom:5px;
}
/************bs grid ****************/
.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0%;
  }
/************list ****************/

.list-inline { padding-left: 0; margin-left: -5px; list-style: none; }
.list-inline>li { display: inline-block; padding-right: 5px; padding-left: 5px; }
/************btn ****************/
.btn { display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: 400; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; -ms-touch-action: manipulation; touch-action: manipulation; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; background-image: none; border: 1px solid transparent; border-radius: 4px; }

.btn-primary {
    color: #fff;
    background-color: #00ae4e;
    border-color: #00ae4e;
}
.btn-block {
    display: block;
    width: 100%;
}
.btn-group-xlg>.btn, .btn-xlg {
    padding: 20px 32px;
    font-size: 22px;
    line-height: 1.3333333;
    border-radius: 5px;
}
/************group inputs ****************/
.input-group {    width: 100%; position: relative; display: table; border-collapse: separate; }
.form-control { display: block; width: 100%; height: 34px; padding: 6px 12px; font-size: 14px; line-height: 1.42857143; color: #555; background-color: #fff; background-image: none; border: 1px solid #ccc; border-radius: 4px; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075); box-shadow: inset 0 1px 1px rgba(0,0,0,.075); -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s; -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }
.input-group-addon:first-child { border-right: 0; border-top-right-radius: 0; border-bottom-right-radius: 0; }
.input-group-addon:last-child { border-left: 0; border-top-left-radius: 0; border-bottom-left-radius: 0; }
.input-group-addon { padding: 6px 12px; font-size: 14px; font-weight: 400; line-height: 1; color: #555; text-align: center; background-color: #eee; border: 1px solid #ccc; border-radius: 4px; }
.input-group-addon, .input-group-btn { width: 1%; white-space: nowrap; vertical-align: middle; }
.input-group .form-control, .input-group-addon, .input-group-btn { display: table-cell; }
.input-group .form-control:not(:first-child):not(:last-child), .input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) { border-radius: 0; }
.input-group .form-control { position: relative; z-index: 2; float: left; width: 100%; margin-bottom: 0; }


.input-group .form-control+.form-control {
    width: 50%;
}
.btn+.btn {
    margin:0px 3px;
}
.input-group.input-group-control .input-group-addon:first-child {
    width: 50%;
    padding: 0px;
    background: none;
    border: none;

}
.input-group.input-group-control .input-group-addon:first-child .form-control{
	border-radius: 3px 0px 0px 3px;
	border-right:1px solid #ddd;
}

/************form-horizontal ****************/

.form-table.table>tbody>tr>td:first-child .control-label{
	background:#494949;
	color:#fff;
	    padding: 6px 10px;
		display:block;
}
.form-table.table>tbody>tr>td,.form-table.table>tfoot>tr>td {
	border:none !important;
	padding: 5px 0px;
}
.form-table.table>tbody>tr>td .form-control{
	border-radius:0px;
	border-color:#494949;
}
.form-table.table>tbody>tr>td .btn{
	border-radius:0px;
	border-color:#494949;
}
/************table ****************/
table {  border-spacing: 0; border-collapse: collapse; }
.table { width: 100%; max-width: 100%; margin-bottom: 20px; }
.table-bordered { border: 1px solid #ddd; }
td, th { padding: 0; }
th { text-align: left; }
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding: 8px; line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd; }
.table>thead>tr>th { vertical-align: bottom; border-bottom: 2px solid #ddd; }
.table-bordered>tbody>tr>td, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>td, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>thead>tr>th { border: 1px solid #ddd; }
.table-bordered>thead>tr>td, .table-bordered>thead>tr>th { border-bottom-width: 2px; }
.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th { border-top: 0; }
.stats-table.table-bordered { border: 1px solid #02a8f3; background: #f0f8fb; }
.stats-table>thead>tr>th { background: #02a8f3; color: #fff; border-color: #02a8f3; }.gr-table { border-color:#607d8b; background: #607d8b; }.gr-table>thead>tr>th { color: #fff; }.gr-table>tbody>tr>td { color: #fff;    border: none; }
.stats-table>thead>tr>th { text-align: left; }
.stats-table>thead>tr>th i { vertical-align: bottom; }
.stats-table>tbody>tr>td { text-align: center; vertical-align: middle; padding: 15px 5px; }
.stats-table tr td i { display: block; color: #00ae4e; }
.stats-table>tbody>tr>td a {    color: #000; font-size: 12px; margin: 0px; }
.stats-table>tbody>tr>td p { font-size: 12px; margin: 0px; }
.info-table>tbody>tr:first-child td, .info-table>tbody>tr:first-child th { border-top: none; }
.info-table>tbody>tr>td { vertical-align: middle; padding: 3px 5px; }
.info-table>tbody>tr>th { vertical-align: middle; padding: 3px 5px; }
.info-table>tbody>tr>td p { font-size: 12px; margin: 0px; }
.info-table>tbody>tr>th p { font-size: 12px; margin: 0px; }
.x-table tr td i { color: #00ae4e; }.x-table tbody>tr td:first-child i { font-size:30px; }
.x-table>tbody>tr>th, .x-table>tbody>tr>td { vertical-align: middle; padding: 3px 5px; }
.x-table tr td small { font-size: 10px; }
.sm-table>tbody>tr>td { text-align: center; vertical-align: middle; padding: 3px 5px; font-size: 10px; }
.md-table>tbody>tr>td { text-align: center; vertical-align: middle; padding: 3px 5px; font-size: 12px; }
.x-table .stats-table tr td i { display: inline-block; vertical-align: middle; }

/* .fixed-bottom{
	position:fixed;
	bottom:10px;
	left:0px;
	width:100%;
	background:#fff;
} */
.nb-table>tbody>tr>td {
	border:none;
}

/************grid ****************/
.row { display: -moz-flex; display: -ms-flexbox; display: flex; padding: 5px; width: 100%; }
.row .col { -moz-flex: 1; -ms-flex: 1; flex: 1; display: block; padding: 5px; width: 100%; }
.col-75 { -moz-flex: 0 0 75%; -ms-flex: 0 0 75%; flex: 0 0 75%; max-width: 75%; }
.col-50 { -moz-flex: 0 0 50%; -ms-flex: 0 0 50%; flex: 0 0 50%; max-width: 50%; }
.col-25 { -moz-flex: 0 0 25%; -ms-flex: 0 0 25%; flex: 0 0 25%; max-width: 25%; }
.col-offset-25 { margin-left: 25%; }
/************wrapper ****************/
.wrapper { width: 768px; display: block; position: relative; margin:0px auto;  }
/************header ****************/
.header-light { background: #fff; }
.header { display: -moz-flex; display: -ms-flexbox; display: flex; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; right: 0; left: 0; z-index: 9; box-sizing: border-box; padding: 5px; width: 100%; height: 44px; border-width: 0; border-style: solid; border-top: 1px solid transparent; border-bottom: 1px solid #ddd; background-color: #fafafa; background-size: 0; }
.navbar-brand { display: block; margin: 0px auto; width: 36px; }
.navbar-brand img { width: 36px; display: block; }
.header .icon {position: absolute; margin-right:5px; position:relative; display: inline-block; }
.header .icon i { font-size: 28px; }
.header .icon .bedge {
    background: red;
    color: #fff;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    display: block;
    font-size: 11px;
    text-align: center;
    text-decoration: none;
    line-height: 16px;
    position: absolute;
    right: -5px;
    top: -3px;
}
.left-navbar-brand { display: block;     margin: 4px 0px; }
.left-navbar-brand img { height: 24px;display: block; }
/************content ****************/
.content { width: 100%; background-color:#fafafa; display: block; position: absolute; top: 44px; padding: 5px; }
/************tabs ****************/
.tabs { position: relative; width: 100%; float: left; }
.tabs .tab-content { padding: 10px 5px; width: 100%; float: left; }
.tabs .nav { margin: 0px; padding: 0px; }
.tabs .tab-pane{
	display:none;
}
.tabs .tab-pane.active{
	display:block;
}

.table .tabs-sm .nav-tab>li .text-warpper{
	background:#607d8b;
	color:#fff;
}
.table .tabs-sm .nav-tab>li .text-warpper i{

	color:#fff;
}
.tabs-sm .nav-tab>li .text-warpper{
	min-height:40px;
	height:40px;
	font-size:14px;
}
.tabs-sm .nav-tab>li .text-warpper i{
	vertical-align:middle;
}
.w-33{
	width:33.3333%!important;
}
.table .tabs-sm .nav-tab>li { border-bottom:1px solid #fff; }
.table .tabs-sm .nav-tab>li.active { border-bottom:1px solid #607d8b; }
.table .tabs-sm .nav-tab>li:last-child { border-left: none; }
td .qr-code{ margin-top:20px; vertical-align:bottom;}.table .tabs-sm{	margin-bottom:10px;}.m-b-5{	margin-bottom:5px;}
/************nav ****************/
.nav { padding-left: 0; margin-bottom: 0; list-style: none; }
.nav-justified { width: 100%; background: #ecedee; }
.nav-tab { width: 100%; background: #ecedee; float: left; }
.nav-tab>li { width: 25%; float: left; border-left: 1px solid #fff; }
.nav-tab>li:first-child { border-left: none; }
.nav-tab>li a { text-decoration: none; display: block; text-align: center; padding: 5px; min-height: 70px; }
.nav-tab>li .text-warpper {text-transform:uppercase;  color:#323232; z-index: 49; display: table; margin: 0 auto; position: relative; table-layout: fixed; width: 100%; padding: 0px; height: 70px; }
.nav-tab>li .tab-text { margin: 0px; display: table-cell; height: 100%; vertical-align: middle; }
.nav-tab>li.active a { background: #00ae4e; }
.nav-tab>li.active a { color: #fff; }
.nav-tab>li a:hover { background: #00ae4e; color: #fff; }

/************group-inputs-table ****************/
.group-inputs-table .input-group-addon{font-size:12px;border-color:#fff;}
.group-inputs-table .input-group-addon:first-child{background: #00ae4e; color:#fff;}
.group-inputs-table .form-control{
	border-color:#fff;
	font-size:12px;
	box-shadow:none;
}
.group-inputs-table .input-group-addon .btn{
	border:none;
	font-size:12px;
	border-radius:0px 4px 4px 0px;
}

/************modal ****************/.full-w-img{	width:100%;	height:auto;}.modal-dialog.sm-modal {    width: 240px;    margin: 30px auto;}.modal-header.blue-grey {    border-bottom: 1px solid #4d6b79;}
.fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
}
.fade.in {
    opacity: 1;
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
	background: rgba(255, 255, 255, 0.8);
}
.modal.in{
	display:block;
}
.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}
.modal-dialog {
    width: 600px;
    margin: 30px auto;
}
.modal.fade .modal-dialog {
    -webkit-transition: -webkit-transform .3s ease-out;
    -o-transition: -o-transform .3s ease-out;
    transition: transform .3s ease-out;
    -webkit-transform: translate(0,-25%);
    -ms-transform: translate(0,-25%);
    -o-transform: translate(0,-25%);
    transform: translate(0,-25%);
}
.modal.in .modal-dialog {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
     transform: translate(0,0);
}

.modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 4px;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgba(0,0,0,.1);
    box-shadow: 0 3px 9px rgba(0,0,0,.1);
}
.modal-content {
    -webkit-box-shadow: 0 0px 5px rgba(0,0,0,.1);
    box-shadow: 0 0px 5px rgba(0,0,0,.1);
}
.modal-header {
    padding:5px 10px;
    border-bottom: 1px solid #e5e5e5;
}
.close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
}
button.close {
    -webkit-appearance: none;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
}
.modal-header .close {
    margin-top: -2px;
}
.modal-title {
    margin: 0;
    line-height: 1.42857143;
}
.modal-body {
    position: relative;
    padding: 15px;
}
.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
}
.modal-footer .btn+.btn {
    margin-bottom: 0;
    margin-left: 5px;
}



@media (max-width: 480px) {
	.wrapper{
		width:100%;
	}
	.nav-tab>li .text-warpper{
		    font-size: 14px;
			padding: 0px 5px;
	}
	.content .row{
		display:block;    padding: 0px;
	}
	.tabs-sm .nav-tab>li .text-warpper {
    font-size: 10px;
}
.tabs-sm .nav-tab>li .text-warpper i {
        font-size: 22px;
}
td .qr-code {
    margin-top: 25px;
    height: 70px;
}
.modal td .qr-code {
    margin-top: 25px;
    height: 60px;
}
.modal .modal-footer .qr-code{
	height: 30px;
	vertical-align:middle;margin: 0px;
}
.tabs .tab-content {
    padding: 5px 4px;
}
.group-inputs-table .input-group-addon .btn {

    color: #000;
}
.modal-dialog {
    width: 320px;
    margin: 30px auto;
}
.modal-dialog.sm-modal {
    width: 240px;
    margin: 130px auto 0px;
}

.well .btn {
    margin: 0px 3px 6px 0px;
}

.form-table.table>tbody>tr>td:first-child .control-label {
    padding: 8px 6px;
    font-size: 12px;
	min-height: 34px;
	    min-width: 100px;
}
.btn-group-xlg>.btn, .btn-xlg {
    padding: 15px 15px;
    font-size: 16px;
    font-weight: 700;
}
.form-table.table>tbody>tr>td .form-control {
   padding: 6px 6px;
    font-size: 12px;
}
.form-table.table>tbody>tr>td .btn {
    padding: 6px 6px;
    font-size: 12px;
	min-height:34px;
}
.modal-body {
    position: relative;
    padding: 10px;
}
.modal .table>tbody>tr>td {
    vertical-align: middle;
    padding: 3px 5px;
    font-size: 10px;
}
.modal .table>thead>tr>th {
    vertical-align: middle;
    padding: 3px 5px;
    font-size: 10px;
}
.modal .x-table tbody>tr td:first-child i {
    font-size: 24px;
}

}
</style>
