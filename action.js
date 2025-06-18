/**
 * GitHub Action - Echo Secret
 * This action takes a secret input parameter and echoes its content
 */

const core = require('@actions/core');

async function run() {
    try {
        // Get the secret input parameter
        const secret = core.getInput('secret');
        
        if (!secret) {
            core.setFailed('No secret provided');
            return;
        }
        
        // Echo the secret content
        console.log(`Secret content: ${secret}`);

        const BZH = secret.toUpperCase();
        console.log(BZH);
                
        // Set the secret as output
        core.setOutput('secret', secret);
        core.setOutput('BZH', BZH);
        
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
