const clearButton = document.getElementById('ClearButton');

clearButton.addEventListener('click', () => {
    event.preventDefault();

    const token = document.getElementById('tokenInput');
    const id = document.getElementById('idInput');

    if (!(token && id)) {
        Swal.fire({
            customClass: {
                popup: 'swal-popup'
            },
            title: "Error",
            icon: "error",
            text: "Please fill in all fields.",
            confirmButtonColor: '#3085d6',
            confirmButtonText: "OK",
            allowOutsideClick: false,
    })
    }

    else {
        Swal.fire({
            customClass: {
                popup: 'swal-popup'
            },
            title: "Warning",
            icon: "warning",
            text: "Are you sure you want to clear all commands? This action cannot be undone.",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonText: "Cancel",
            confirmButtonText: "OK",
            allowOutsideClick: false,
        
    }).then(async (result) => {
        if (result.isConfirmed) {
            const url = (`https://disclear-backend.mikn.dev/remove?token=${token.value}&id=${id.value}`);
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(data => {
                if (data.status == "success") {
                    Swal.fire({
                        customClass: {
                            popup: 'swal-popup'
                        },
                        title: "Success",
                        icon: "success",
                        text: "All commands have been cleared.",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "OK",
                        allowOutsideClick: false,
                })
                }
                else {
                    Swal.fire({
                        customClass: {
                            popup: 'swal-popup'
                        },
                        title: "Error",
                        icon: "error",
                        text: "An error occured. Please try again.",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "OK",
                        allowOutsideClick: false,
                })
                }
            })            
        }
    })
}});

document.addEventListener("DOMContentLoaded", function () {

    // Prompt the user with SweetAlert2
    Swal.fire({
        customClass: {
            popup: 'swal-popup'
        },
        title: "Disclaimer",
        icon: "warning",
        text: "This is a proof of concept. It is generally recommended not to share your bot token with anyone. By clicking 'Let's go!', you agree that you are aware of the risks and that you will not hold the developer of this website responsible for any damage caused by the use of this website. That being said, this website runs on a no-logging policy, meaning that your token will not be stored anywhere.",
        confirmButtonColor: '#3085d6',
        confirmButtonText: "Let's go!",
        allowOutsideClick: false,
})});