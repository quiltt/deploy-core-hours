# Deploy Core Hours

This GitHub Action will prevent you from auto deploying during non-core hours, and (UPS) holidays.

## Inputs

### `timezone`

**Required** Your local timezone. Default `"UTC"`.

### `dayStartHour`

Default `9`.

### `dayEndHour`

Default `5`.

### `deploy<DAY_OF_WEEK>`

Default `true`.

## Example usage
```yaml
name: Deploy Core Hours

on:
  pull_request:
    branches:
      - 'main'

jobs:
  no_deploy_friday_job:
    runs-on: ubuntu-latest
    name: Deploy?
    steps:
    - name: No Deploy Core Hours
      uses: quiltt/deploy-core-hours@v1.2
      with:
        timezone: 'America/New_York'
        dayStartHour: 10
        dayEndHour: 8
        deployFriday: false
```
