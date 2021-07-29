# No Deploy Friday

This GitHub Action will prevent you from auto deploying on Friday, Saturday, and Sunday.

## Inputs

### `timezone`

**Required** Your local timezone. Default `"UTC"`.

## Example usage
```yaml
uses: quiltt/no-deploy-friday@v1.1
with:
  timezone: 'America/New_York'
```
