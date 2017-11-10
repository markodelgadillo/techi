// Adding an image from the database

function addImage() {
  fetch('https://techi.envivent.com/images.json')
    .then(res => res.json())
    .then(data => (data = data.employees))
    .then(data => getEmployeeImage(data))
}

function getEmployeeImage(data) {
  data.forEach(function(employee) {
    let id = employee.id
    let src = employee.full
    renderEmployeeImage(id, src)
  })
}

function renderEmployeeImage(id, src) {
  let $images = document.querySelectorAll('.img')
  for (i = 0; i < $images.length; i++) {
    let image = $images[i]
    if (image.getAttribute('data-id') == id) {
      image.src = 'https://techi.envivent.com/employees/' + src
    }
  }
}

// Adding a name from the database

function addName() {
  fetch('https://techi.envivent.com/names.json')
    .then(res => res.json())
    .then(data => (data = data.employees))
    .then(data => getEmployeeName(data))
}

function getEmployeeName(data) {
  data.forEach(function(employee) {
    let name = employee.first_name + ' ' + employee.last_name
    let id = employee.id
    renderEmployeeName(id, name)
  })
}

function renderEmployeeName(id, name) {
  let $employees = document.querySelectorAll('.img')
  const $p = document.querySelectorAll('.name')
  for (let i = 0; i < $employees.length; i++) {
    for (let j = 0; j < $p.length; j++) {}
    if ($employees[i].getAttribute('data-id') == id) {
      $p[i].textContent = name.toUpperCase()
    }
  }
}

// Adding a description from the database

function addDescription() {
  fetch('https://techi.envivent.com/description.json')
    .then(res => res.json())
    .then(data => (data = data.employees))
    .then(data => getEmployeeDesc(data))
}

function getEmployeeDesc(data) {
  data.forEach(function(employee) {
    let title = employee.title
    let id = employee.id
    let description = employee.description
    renderEmployeeDesc(id, title, description)
  })
}

function renderEmployeeDesc(id, title, description) {
  let $employees = document.querySelectorAll('.img')
  for (i = 0; i < $employees.length; i++) {
    if ($employees[i].getAttribute('data-id') == id) {
      let $title = document.querySelectorAll('.title')
      let $description = document.querySelector('.body-text')
      $title[i].textContent = title.toLowerCase()
      $description.textContent = description
    }
  }
}

// let $employees = document.querySelectorAll('.img')
// for (i = 0; i < $employees.length; i++) {
//   let id = $employees[i].getAttribute('data-id')
//   setInterval(function() {
//     id++
//     addImage()
//     addName()
//     addDescription()
//   }, 1000)
// }
