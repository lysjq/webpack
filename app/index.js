import { peoples } from './people';

for (const people of peoples) {
    let tbody = $('#table-people-tbody');
    let ele = `<tr><td>${people.name}</td><td>${people.age}</td><td>${people.city}</td><td>${people.work}</td></tr>`;
    tbody.append(ele);
    if (people.age >= 25) {
        ele.addClass('success');
    }
}