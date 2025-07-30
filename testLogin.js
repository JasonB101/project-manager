const axios = require('axios');

async function testLogin() {
    try {
        console.log('Testing login endpoint...');
        
        const loginData = {
            email: 'admin',
            password: 'junkjunk'
        };

        const response = await axios.post('http://localhost:3825/api/auth/login', loginData);
        
        console.log('✅ Login successful!');
        console.log('Response:', JSON.stringify(response.data, null, 2));
        
    } catch (error) {
        console.log('❌ Login failed!');
        if (error.response) {
            console.log('Status:', error.response.status);
            console.log('Error:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.log('Error:', error.message);
        }
    }
}

// Run the test
testLogin(); 