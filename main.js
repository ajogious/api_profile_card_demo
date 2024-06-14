'use strict';

const card = document.querySelector('.card');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const phoneNo = document.querySelector('.phone-no');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const request = new XMLHttpRequest();
  request.open('GET', 'data.json');
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    const dataLen = Math.trunc(Math.random() * data.users.length);
    const dataName = data.users[dataLen].name;
    const dataEmail = data.users[dataLen].email;
    const dataPhoneNo = data.users[dataLen].phone;

    const html = `
        <div class="card-body">
          <h4 class="card-title mb-3">
            <strong>Name: </strong> <span class="name">${dataName}</span>
          </h4>
          <p class="card-text">
            <strong>Email: </strong> <em class="email">${dataEmail}</em>
          </p>
          <p class="card-text">
            <strong>Phone No: </strong> <em class="phone-no">${dataPhoneNo}</em>
          </p>
        </div>
    `;

    card.innerHTML = html;
  });
});
