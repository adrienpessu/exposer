// Test file for GitHub Action - Echo Secret
// This simulates how the action would work in a GitHub environment

// Mock the @actions/core module for testing
const mockCore = {
    getInput: (name) => {
        const inputs = {
            'secret': JSON.stringify({ BREIZHCAMP: 'hello world' })
        };
        return inputs[name] || '';
    },
    setOutput: (name, value) => {
        console.log(`::set-output name=${name}::${value}`);
    },
    setFailed: (message) => {
        console.log(`::error::${message}`);
        process.exit(1);
    }
};

// Replace the require call with our mock
require.cache[require.resolve('@actions/core')] = {
    exports: mockCore
};

console.log('=== Testing GitHub Action - Echo Secret ===\n');

try {
    // Test the GitHub Action
    console.log('Running action with mock secret input...');
    require('./action.js');
    console.log('Action completed successfully!');
} catch (error) {
    console.error('Action failed:', error.message);
}
