console.log("Aradhya,js is running")

var upload = document.getElementById('upload');
console.log(upload)
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function () {

        var Arr = fr.result.split(/\r?\n|\n/).map(e => {
            return e.split(',');

        });
        var arr_flat = Arr.flat(1);
        console.log(arr_flat);
        Window.valNo = 0;
        Window.invalNo = 0;
        Window.valMail = [];
        arr_flat.forEach(e => {
            let em = String(e);
            let m = `<td> ${e} </td>`;
            
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;
            if (em != "") {
                if (em.charAt(em.length - 4) == '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    // console.log("cond1")
                    return false;
                }
                else if (em.charAt(em.length - 3) == '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    // console.log("cond2")
                    return false;
                }
                else {
                    document.querySelector("table#inval").appendChild(creEle);
                    Window.invalNo = Window.invalNo + 1;
                    // console.log(Window.invalNo)
                    // console.log("cond3")
                    return false;
                }

            }
        });
        document.querySelector('#valCount').innerHTML = Window.valNo;
        // document.querySelector('.check').innerHTML = e
        // console.log(Window.invalNo, "inval")
        document.querySelector('#invalCount').innerHTML = Window.invalNo;
    };
});


function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aradhyadcoolboy@gmail.com",
        Password: "Aradhya@1234",
        To: "aradhyadcoolboy@gmail.com",
        From: "aradhyadcoolboy@gmailcom",
        Subject: document.querySelector('#subject').value,
        Body: document.getElementById('msg').value,
    }).then(
        message => alert(Window.valNo + "mail has been sent successfully," + message + " to continue.")
    );
    console.log(document.getElementById('msg').value);
    console.log(document.getElementById('msg').innerHTML);
    console.log(document.getElementById('msg').innerText);

}
