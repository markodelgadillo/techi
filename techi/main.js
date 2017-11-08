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

// function renderEmployeeImage(id, src) {
//   let $images = document.querySelectorAll('.img')
//   $images.forEach(function(image) {
//     if (image.id == id) {
//       image.src = 'https://techi.envivent.com/employees/' + src
//     }
//   })
// }

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
    console.log(name)
    console.log(id)
    renderEmployeeName(id, name)
  })
}

function renderEmployeeName(id, name) {
  let $employees = document.querySelectorAll('.img')
  const $p = document.querySelectorAll('.name')
  console.log($p)
  for (let i = 0; i < $employees.length; i++) {
    console.log($employees[i].id)
    for (let j = 0; j < $p.length; j++) {
      console.log($p[j])
    }
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
      console.log($title[i])
      let $description = document.querySelector('.body-text')
      console.log($description)
      $title[i].textContent = title.toLowerCase()
      $description.textContent = description
    }
  }
}

addImage()
addName()
addDescription()
