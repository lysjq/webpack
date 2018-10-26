import { peoples } from './people';

for (const people of peoples) {
    let tbody = document.getElementById('table-people-tbody');
    let tr = document.createElement('tr');
    tbody.append(tr);
    let ele = `<tr><td>${people.name}</td><td>${people.age}</td><td>${people.city}</td><td>${people.work}</td></tr>`;
    tr.innerHTML = ele;

}