let savedIsCheck = null;
let userHost = null;
let userCust = null;
let userCustType = null;
let userIs1Check = null;

function loadConfig(){
    
    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        alert_data(obj.userIsCheck, obj.userHost, obj.userCust, obj.userCustType);
        savedIsCheck = obj.userIsCheck;
        userHost = obj.userHost;
        userCust = obj.userCust;
        userCustType = obj.userCustType;
        userIs1Check = obj.userIs1Check;
        console.log(savedIsCheck);
        console.log(savedTheme);
        localStorage.setItem("isCheck", JSON.stringify(savedIsCheck));
        localStorage.setItem("custHost", JSON.stringify(userHost));
        localStorage.setItem("useCust", JSON.stringify(userCust));
        localStorage.setItem("custType", JSON.stringify(userCustType));
        localStorage.setItem("is1Check", JSON.stringify(userIs1Check));
    }
    
    function alert_data(isCheck, host, cust, custType, is1Check) {
        alert('IsChecked : ' + isCheck + ', Host : ' + host + ', Custom : ' + cust + ', Custom Type : ' + custType + ', Is1Checked : ' + is1Check);
    }
 
    document.getElementById('file').addEventListener('change', onChange);
}
loadConfig();

