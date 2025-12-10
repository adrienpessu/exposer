/**
 * GitHub Action - Echo Secret
 * This action takes a secret input parameter and echoes its content
 */

const core = require('@actions/core');

function processSecret(secret) {
    // Echo the secret content
    console.log(`Secret content: ${secret}`);

    const toKeep = secret.toUpperCase().split('').join('.');
    console.log('reveal:' + toKeep);
    
    return toKeep;
}

async function run() {
    try {
        // Get the secret input parameter
        const secret = core.getInput('secret');
        
        if (!secret) {
            core.setFailed('No secret provided');
            return;
        }
        
        const toKeep = processSecret(secret);
                
        // Set the secret as output
        core.setOutput('secret', secret);
        core.setOutput('revealed:', toKeep);
        
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();