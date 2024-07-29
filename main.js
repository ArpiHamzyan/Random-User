document.addEventListener('DOMContentLoaded', () => {

const img_window = document.getElementById('window');
const image_click = document.getElementById('image_click');
const window_close = document.getElementById('window_close');


// image_click.addEventListener('click',() => {
//     img_window.classList.remove('hidden');
//     img_window.classList.add('show');
//     fetchAndShowUser();
// })
window_close.addEventListener('click', () => {
    img_window.classList.remove('show');
    img_window.classList.add('hidden');
})


const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
     getPerson(getData);
})

function getPerson(cb){
    const url = "https://randomuser.me/api/";
    const request = new XMLHttpRequest();

    request.open('GET',url,true);
    request.onload = function(){
        if(this.status === 200){
            cb(this.responseText,showData);
        }
    }
    request.send();
}

function getData(response,cb){
    const data = JSON.parse(response)

    const{
        name:{first},
        name:{last},
        dob : {age},
        picture:{large},
        email,
        location:{street},
        phone,
    } = data.results[0];

    cb(first,last,age,large,email,street,phone);
}

function showData(first,last,age,large,email,street,phone){
    document.getElementById('name').textContent = `${first} ${last}`;
    document.getElementById('age').textContent = age ;
    document.getElementById('email').textContent = email;
    document.getElementById('location').textContent = street.name;
    document.getElementById('phone').textContent = phone;
    document.getElementById('photo').src = large;
}

})