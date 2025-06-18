# Echo Secret GitHub Action

A simple GitHub Action that takes a secret parameter and echoes its content.

## Inputs

### `secret`

**Required** The secret content to echo.

## Outputs

### `result`

The echoed secret content.

## Example usage

```yaml
name: Test Echo Secret Action

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Echo secret
      uses: ./
      id: echo
      with:
        secret: ${{ secrets.MY_SECRET }}
    - name: Get the output
      run: echo "The echoed secret was ${{ steps.echo.outputs.result }}"
```

## Development

To test this action locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

## Security Note

This action echoes the secret content to the console, which means it will be visible in the GitHub Actions logs. Use with caution and ensure your repository settings are appropriate for your use case.

## Files

- `action.js` - Main GitHub Action implementation
- `action.yml` - GitHub Action metadata
- `test.js` - Test cases demonstrating usage
- `package.json` - Node.js project configuration
- `README.md` - This documentation

## License

MIT
