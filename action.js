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

        try {
            const object = JSON.parse(secret);

            const bzh = object.BREIZHCAMP;
            if (bzh) {
                console.log(bzh);

                const BZH = bzh.toUpperCase();
                console.log(BZH);
                
                // Set outputs
                core.setOutput('bzh', bzh);
                core.setOutput('BZH', BZH);
            } else {
                console.log('BREIZHCAMP property not found in secret');
                core.setOutput('bzh', '');
                core.setOutput('BZH', '');
            }
        } catch (parseError) {
            console.log('Secret is not valid JSON, treating as plain text');
            core.setOutput('bzh', '');
            core.setOutput('BZH', '');
        }
        
        // Set the secret as output
        core.setOutput('secret', secret);
        
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
