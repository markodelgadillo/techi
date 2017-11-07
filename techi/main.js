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
  let images = document.querySelectorAll('.left-img')
  images.forEach(function(image) {
    console.log(image.id)
    console.log(src)
    console.log(image.src)
    if (image.id == id) {
      image.src = 'https://techi.envivent.com/employees/' + src
    }
  })
}

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

function renderEmployeeName(id, name) {}

function addDescription() {
  fetch('https://techi.envivent.com/description.json')
    .then(res => res.json())
    .then(data => (data = data.employees))
    .then(data => renderEmployeeDesc(data))
}

function renderEmployeeName(data) {
  data.forEach(function(employee) {
    if (employee.id === 1) {
      console.log(employee.first_name + ' ' + employee.last_name)
    }
  })
}

function renderEmployeeDesc(data) {
  data.forEach(function(employee) {
    if (employee.id === 1) {
      console.log(employee.description)
    }
  })
}

addImage()
