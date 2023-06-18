document.onkeyup = function(e) 
{
    if(e.ctrlKey && e.shiftKey && e.which == 85) 
    {
        console.log("onkeyup registered");
    
        if(location.pathname == '/gba' || location.pathname == '/gba/' || location.pathname == '/gba/index.html' || location.pathname == '/gba/index.html/' || location.pathname == '' || location.pathname =='/' || location.pathname == '/index.html' || location.pathname == '/index.html/')
        {
            window.open('dev.html', '_self', false);
            console.log('Secret Combo Pressed! Opening Dev Page...');
        }
        else if (location.pathname == '/gba/dev.html' || location.pathname == '/gba/dev.html/' || location.pathname == '/dev.html' || location.pathname == '/dev.html/')
        {
            window.open('index.html', '_self', false);
            console.log('Secret Combo Pressed! Moving back to Home Page...');
        }
    }
}

// console.log("dev.js loaded");