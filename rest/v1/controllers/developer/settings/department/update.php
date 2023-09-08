<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$department = new Department($conn);
// get $_GET data



$error = [];
$returnData = [];
if (array_key_exists("departmentId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $department->department_aid = $_GET['departmentId'];
    $department->department_name = checkIndex($data, "department_name");
    // $department->department_description = checkIndex($data, "department_description");
    $department->department_updated_at = date("Y-m-d H:i:s");
    checkId($department->department_aid);
    // update
    $query = checkUpdate($department);
    returnSuccess($department, "Referral Type", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
