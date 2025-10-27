document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form'); 

    form.addEventListener('submit', e => { 
        e.preventDefault(); 

        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your product has been added successfully.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/store'; 
            }
        });
    });
});
