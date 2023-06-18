function userConfig1() {
    let userFav = localStorage.getItem("favbarinfo");
    let userHost = localStorage.getItem("custHost");
    let userCust = localStorage.getItem("useCust");
    let userCustType = localStorage.getItem("custType");
    let userIsCheck = localStorage.getItem("isCheck");
    let userIs1Check = localStorage.getItem("is1Check");
    let userTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;



    let userConfig = {
        "userFav": userFav,
        "userHost": userHost,
        "userCust": userCust,
        "userCustType": userCustType,
        "userIsCheck": userIsCheck,
        "userIs1Check": userIs1Check,
        "userTheme": userTheme
    }

    let userConfigDat = JSON.stringify(userConfig);

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    download(userConfigDat, 'userconfig.json', 'text/plain');

}
