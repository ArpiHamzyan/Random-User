document.addEventListener('DOMContentLoaded', () => {
    const img_window = document.getElementById('window');
    const image_click = document.getElementById('image_click');
    const window_close = document.getElementById('window_close');

    function fetchAndShowUser() {
        getPerson(getData);
    }

    // image_click.addEventListener('click', () => {
    //     img_window.classList.remove('hidden');
    //     img_window.classList.add('show');
    //     fetchAndShowUser(); // Fetch user data when the window is shown
    // });

    // window_close.addEventListener('click', () => {
    //     img_window.classList.remove('show');
    //     img_window.classList.add('hidden');
    // });

    const btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
        fetchAndShowUser();
    });

    function getPerson(cb) {
        const url = "https://randomuser.me/api/";
        
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            cb(data, showData);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

    function getData(data, cb) {
        const {
            name: { first },
            name: { last },
            dob: { age },
            picture: { large },
            email,
            location: { street },
            phone,
        } = data.results[0];

        cb(first, last, age, large, email, street, phone);
    }

    function showData(first, last, age, large, email, street, phone) {
        document.getElementById('name').textContent = `${first} ${last}`;
        document.getElementById('age').textContent = age;
        document.getElementById('email').textContent = email;
        document.getElementById('location').textContent = street.name;
        document.getElementById('phone').textContent = phone;
        document.getElementById('photo').src = large;
    }

    fetchAndShowUser();
});
