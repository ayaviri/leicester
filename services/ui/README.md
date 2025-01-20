# The UI

This directory contains the output of the production build of a pre-existing craco UI called [otp-react-redux](https://github.com/opentripplanner/otp-react-redux)

## Requirements

[serve](https://www.npmjs.com/package/serve) is used as the file server

```
$ npm install -g serve
```

## Running locally

```
$ ./dev.sh
```

## Updating the UI

The UI there is primarily configured by a YAML configuration file (ie. the referenced OTP server address is defined there).

```
# 1) Clone the repository to your desired location
$ cd <desired-path>
$ git clone git@github.com:opentripplanner/otp-react-redux.git
# 2) Modify example-config.yml as desired
$ cd otp-react-redux && yarn build
$ mv dist/ <path-to-this-repo>/services/client/dist/
```
