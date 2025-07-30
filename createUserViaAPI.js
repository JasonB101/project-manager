const http = require('http');

async function createUser() {
    try {
        console.log('Creating user via API...');
        
        const userData = JSON.stringify({
            email: 'admin',
            password: 'junkjunk',
            fullName: 'Administrator',
            isAdmin: true
        });

        const options = {
            hostname: 'localhost',
            port: 3825,
            path: '/api/auth/newuser',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(userData)
            }
        };

        const req = http.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    if (response.success) {
                        console.log('✅ User created successfully!');
                        console.log('Email: admin');
                        console.log('Password: junkjunk');
                        console.log('Response:', response);
                    } else {
                        console.log('❌ Failed to create user:', response.message);
                    }
                } catch (e) {
                    console.error('❌ Error parsing response:', data);
                }
            });
        });

        req.on('error', (error) => {
            console.error('❌ Request error:', error.message);
            console.error('Make sure your server is running on port 3825');
        });

        req.write(userData);
        req.end();
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Run the script
createUser(); 