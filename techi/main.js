function addImage() {
  fetch('https://techi.envivent.com/images.json')
    .then(res => res.json())
    .then(data => (data = data.employees))
    .then(data => renderEmployeeImage(data))
}

function addName() {
  fetch('https://techi.envivent.com/names.json')
    .then(res => res.json())
    .then(data => (data = data.employees))
    .then(data => renderEmployeeName(data))
}

function addDescription() {
  fetch('https://techi.envivent.com/description.json')
    .then(res => res.json())
    .then(data => (data = data.employees))
    .then(data => renderEmployeeDesc(data))
}

function renderEmployeeImage(data) {
  data.forEach(function(employee) {
    if (employee.id === 1) {
      console.log(employee.full)
    }
  })
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
