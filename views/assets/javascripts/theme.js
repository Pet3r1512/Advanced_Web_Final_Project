document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        const toggle = document.getElementById("toggle")

        const theme = window.localStorage.getItem("theme")
        toggle.checked = (theme == 'light' ? true : false)

        const body = document.getElementById("body")
        const form = document.getElementById("form")
        const username = document.getElementById("username")
        const password = document.getElementById("pass")
        const fullname = document.getElementById("fullname")
        const phoneNumber = document.getElementById("phoneNumber")
        const dob = document.getElementById("dob")
        const address = document.getElementById("address")
        const email = document.getElementById("email")

        if(toggle.checked == false){
            body.style.backgroundColor = "#181818"
            body.style.transitionDuration ="300ms"
            form.style.backgroundColor="#282828"
            form.style.color = "white"
            form.style.borderColor = "#282828"

            if(username && password){
                username.style.backgroundColor = "#404040"
                username.style.borderColor = "#282828"
                password.style.backgroundColor = "#404040"
                password.style.borderColor = "#282828"
            }
            if(email && fullname && phoneNumber && dob && address){
                email.style.backgroundColor = "#404040"
                email.style.borderColor = "#282828"
                fullname.style.backgroundColor = "#404040"
                fullname.style.borderColor = "#282828"
                phoneNumber.style.backgroundColor = "#404040"
                phoneNumber.style.borderColor = "#282828"
                dob.style.backgroundColor = "#404040"
                dob.style.borderColor = "#282828"
                address.style.backgroundColor = "#404040"
                address.style.borderColor = "#282828"
            }
        }
        else {
            body.style.backgroundColor = "#E1E5E8"
            body.style.transitionDuration ="300ms"
            form.style.backgroundColor="#FFFFFF"
            form.style.color = "black"
            form.style.borderColor = "rgb(202, 213, 225)"

            if(password && username){
                username.style.backgroundColor = "#FFFFFF"
                username.style.borderColor = "rgb(202, 213, 225)"
                password.style.backgroundColor = "#FFFFFF"
                password.style.borderColor = "rgb(202, 213, 225)"
            }
            if(email && fullname && phoneNumber && dob && address){
                email.style.backgroundColor = "#FFFFFF"
                email.style.borderColor = "rgb(202, 213, 225)"
                fullname.style.backgroundColor = "#FFFFFF"
                fullname.style.borderColor = "rgb(202, 213, 225)"
                phoneNumber.style.backgroundColor = "#FFFFFF"
                phoneNumber.style.borderColor = "rgb(202, 213, 225)"
                dob.style.backgroundColor = "#FFFFFF"
                dob.style.borderColor = "rgb(202, 213, 225)"
                address.style.backgroundColor = "#FFFFFF"
                address.style.borderColor = "rgb(202, 213, 225)"
            }
        }
    }
};
