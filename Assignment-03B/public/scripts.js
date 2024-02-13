document.addEventListener('DOMContentLoaded', () => {
    const createUserForm = document.getElementById('createUserForm');
    const usersList = document.getElementById('users');

    // Event listener for form submission
    createUserForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(createUserForm);
        const newUser = {
            email: formData.get('email'), // Correct parameter name
            firstName: formData.get('firstName'), // Correct parameter name
            lastName: formData.get('lastName'), // Correct parameter name
            phone: formData.get('phone') // Correct parameter name
        };

        try {
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            const data = await response.json();
            alert(data.message); // Show success message
            createUserForm.reset(); // Clear form fields
            fetchUsers(); // Refresh user list
        } catch (error) {
            console.error('Error creating user:', error);
        }
    });

    // Function to fetch all users and display them
    async function fetchUsers() {
        usersList.innerHTML = ''; // Clear previous list

        try {
            const response = await fetch('/users');
            const users = await response.json();

            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `First Name : ${user.firstName} Last Name :  ${user.lastName} Email :  ${user.email} Phone : ${user.phone}`;
                usersList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    // Fetch users on page load
    fetchUsers();
});
