<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralType = new ReferralSource($conn);
// get should not be present
if (array_key_exists("referralSourceId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$referralType->referral_source_name = checkIndex($data, "referral_source_name");
$referralType->referral_source_description = checkIndex($data, "referral_source_description");
$referralType->referral_source_is_active = 1;
$referralType->referral_source_created_at = date("Y-m-d H:i:s");
$referralType->referral_source_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($referralType, $referralType->department_name);
// create
$query = checkCreate($referralType);
returnSuccess($referralType, "Referral Source", $query);
