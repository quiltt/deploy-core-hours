# No Deploy Friday

This GitHub Action will prevent you from auto deploying on Friday, Saturday, and Sunday.

## Inputs

### `timezone`

**Required** Your local timezone. Default `"UTC"`.

## Example usage
```yaml
name: No Deploy Fridays

on:
  pull_request:
    branches:
      - 'main'

jobs:
  no_deploy_friday_job:
    runs-on: ubuntu-latest
    name: Deploy?
    steps:
    - name: No Deploy Fridays
      uses: quiltt/no-deploy-friday@v1.1
      with:
        timezone: 'America/New_York'
```
