async function fetchUsers() {
    try {
        // Fetch the list of 10 users
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // Select the container
        const userGrid = document.querySelector('#user-grid');

        // Loop through each user and build a card
        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'user-card';

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p class="username">@${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Company: ${user.company.name}</p>
            `;

            userGrid.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

fetchUsers();