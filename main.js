
function getRandomUser() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        document.getElementById('photo').src = user.picture.large;
        document.getElementById('name').innerText = `${user.name.first} ${user.name.last}`;
        document.getElementById('age').innerText = user.dob.age;
        document.getElementById('email').innerText = user.email;
        document.getElementById('location').innerText = ` ${user.location.city}, ${user.location.country}`;
      })
      .catch(error => console.error('Error fetching user:', error));
  }
  
  document.getElementById('btn').onclick = getRandomUser;
  