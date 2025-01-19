(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{787:function(e){e.exports=JSON.parse('{"name":"otp-react-redux","description":"A library for writing modern OpenTripPlanner-compatible multimodal journey planning web applications using React and Redux","main":"build/index.js","scripts":{"a11y-test":"jest a11y/ --runInBand --force-exit","build":"NODE_OPTIONS=--openssl-legacy-provider craco build","check:i18n-en-fr":"node node_modules/@opentripplanner/scripts/lib/run-validate-i18n.js lib i18n/en-US.yml i18n/fr.yml","unit":"jest __tests__/","lint":"lint-staged","lint-all":"eslint lib __tests__ a11y --quiet","postinstall":"patch-package && husky install","prepublishOnly":"pinst --disable","postpublish":"pinst --enable","prestart":"yarn","test":"yarn run lint && yarn run typecheck && yarn check:i18n-en-fr && yarn run unit","typecheck":"yarn tsc","semantic-release":"semantic-release","start":"NODE_OPTIONS=--openssl-legacy-provider craco start","percy-serve":"serve","percy-har-express":"har-express","percy-combined-mock-server":"node ./percy/mock-server.js"},"standard":{"parser":"babel-eslint"},"engines":{"node":">=17"},"repository":{"type":"git","url":"https://github.com/opentripplanner/otp-react-redux.git"},"author":"Conveyal","license":"MIT","bugs":{"url":"https://github.com/opentripplanner/otp-react-redux/issues"},"homepage":"","dependencies":{"@auth0/auth0-react":"^1.1.0","@bugsnag/js":"^7.17.0","@bugsnag/plugin-react":"^7.17.0","@floating-ui/react":"^0.19.2","@opentripplanner/base-map":"4.0.0","@opentripplanner/building-blocks":"2.1.0","@opentripplanner/core-utils":"12.0.1","@opentripplanner/endpoints-overlay":"3.0.1","@opentripplanner/from-to-location-picker":"3.0.0","@opentripplanner/geocoder":"^3.0.2","@opentripplanner/humanize-distance":"^1.2.0","@opentripplanner/icons":"3.0.1","@opentripplanner/location-field":"3.1.1","@opentripplanner/itinerary-body":"6.1.1","@opentripplanner/location-icon":"^1.4.1","@opentripplanner/map-popup":"5.1.1","@opentripplanner/otp2-tile-overlay":"2.1.1","@opentripplanner/park-and-ride-overlay":"3.0.0","@opentripplanner/printable-itinerary":"3.0.0","@opentripplanner/route-viewer-overlay":"3.0.0","@opentripplanner/stop-viewer-overlay":"3.0.0","@opentripplanner/stops-overlay":"6.0.0","@opentripplanner/transit-vehicle-overlay":"5.0.1","@opentripplanner/transitive-overlay":"4.0.1","@opentripplanner/trip-details":"6.0.0","@opentripplanner/trip-form":"4.1.1","@opentripplanner/trip-viewer-overlay":"3.0.0","@opentripplanner/vehicle-rental-overlay":"3.0.0","@styled-icons/fa-regular":"^10.34.0","@styled-icons/fa-solid":"^10.34.0","@turf/centroid":"^6.5.0","@turf/helpers":"^6.5.0","@types/react-transition-group":"^4.4.10","blob-stream":"^0.1.3","bootstrap":"^3.3.7","bowser":"^1.9.3","clone":"^2.1.0","connected-react-router":"^6.8.0","copy-to-clipboard":"^3.0.8","date-fns":"^2.23.0","date-fns-tz":"^1.1.4","deepmerge":"^4.2.2","flat":"^5.0.2","formik":"^2.1.5","formik-error-focus":"^1.1.0","graphql":"^16.8.1","gtfs-realtime-bindings":"^0.0.6","haversine":"^1.1.0","history":"^4.7.2","humanize-duration":"^3.25.2","immutability-helper":"^2.1.1","immutable":"^3.8.1","isomorphic-fetch":"^2.2.1","lodash.debounce":"^4.0.8","lodash.isempty":"^4.4.0","lodash.isequal":"^4.5.0","lodash.memoize":"^4.1.2","maplibre-gl":"^2.1.9","object-hash":"^1.3.1","object-path":"^0.11.8","object-to-formdata":"^4.1.0","pdfkit":"^0.12.1","prop-types":"^15.6.0","qs":"^6.10.3","react":"<17.0.0","react-animate-height":"^3.0.4","react-bootstrap":"^0.32.1","react-dom":"<17.0.0","react-draggable":"^4.4.3","react-ga":"^3.3.0","react-hot-toast":"^2.4.1","react-intl":"^5.20.10","react-loading-skeleton":"^2.1.1","react-map-gl":"^7.0.15","react-phone-number-input":"^3.1.0","react-redux":"^7.1.0","react-resize-detector":"^2.1.0","react-router":"^5.3.4","react-router-dom":"^5.3.4","react-select":"^3.1.0","react-sliding-pane":"^7.0.0","react-transition-group":"^4.4.5","redux":"^4.0.4","redux-actions":"^1.2.1","redux-logger":"^2.7.4","redux-thunk":"^2.3.0","reselect":"^4.0.0","seamless-immutable":"^7.1.3","serialize-query-params":"^2.0.2","string-similarity":"^4.0.4","styled-components":"^5.0.0","tinycolor2":"^1.4.2","use-query-params":"^2.1.1","yup":"^0.29.3"},"devDependencies":{"@babel/core":"^7.15.0","@babel/plugin-proposal-class-properties":"^7.18.6","@babel/plugin-transform-runtime":"^7.15.0","@babel/preset-typescript":"^7.15.0","@craco/craco":"^6.3.0","@graphql-tools/schema":"^10.0.0","@jackwilsdon/craco-use-babelrc":"^1.0.0","@opentripplanner/scripts":"^1.2.0","@opentripplanner/types":"^6.5.2","@percy/cli":"^1.20.3","@percy/puppeteer":"^2.0.2","@pmmmwh/react-refresh-webpack-plugin":"^0.5.1","@types/clone":"^2.1.1","@types/lodash.memoize":"^4.1.8","@types/mapbox__polyline":"^1.0.2","@types/object-hash":"^3.0.5","@types/qs":"^6.9.7","@types/react-bootstrap":"^0.32.26","@types/react-router":"^5.1.17","@types/react-router-dom":"^5.1.17","@types/styled-components":"^5.1.14","@types/tinycolor2":"^1.4.3","@wordpress/jest-puppeteer-axe":"^3.1.0","babel-plugin-add-module-exports":"^1.0.4","babel-plugin-lodash":"^3.3.4","circular-dependency-plugin":"5.2.2","craco-fast-refresh":"^1.1.0","css-hot-loader":"^1.4.4","enzyme":"^3.10.0","enzyme-adapter-react-16":"^1.4.0","enzyme-to-json":"^3.4.0","es6-math":"^1.0.0","eslint-config-prettier":"^3.4.0","eslint-config-react-app":"^6.0.0","eslint-config-standard":"^16.0.3","eslint-config-standard-jsx":"^10.0.0","eslint-plugin-import":"^2.18.2","eslint-plugin-jest":"^24.3.6","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-node":"^11.1.0","eslint-plugin-prettier":"^3.4.0","eslint-plugin-promise":"^5.1.0","eslint-plugin-react":"^7.24.0","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-sort-destructure-keys":"^1.3.5","eslint-plugin-sort-imports-es6-autofix":"^0.6.0","eslint-plugin-sort-keys-fix":"^1.1.1","eslint-plugin-typescript-sort-keys":"^1.8.0","execa":"^5.1.1","express":"^4.20.0","har-express":"^1.1.0","husky":"^6.0.0","jest-transform-stub":"^2.0.0","jest-yaml-transform":"^0.2.0","json-loader":"^0.5.7","lint-staged":"^11.1.2","nock":"^9.0.9","patch-package":"^6.4.7","pinst":"^2.1.6","prettier":"^2.3.2","puppeteer":"^10.2.0","raw-loader":"^4.0.2","react-refresh":"^0.10.0","react-scripts":"^4.0.3","redux-mock-store":"^1.5.3","semantic-release":"^17.2.3","serve":"^13.0.2","tsdx":"https://github.com/ibi-group/tsdx","typescript":"^4.4.2","yaml-jest":"^1.2.0","yaml-loader":"^0.6.0","yaml-sort":"^2.0.0"},"peerDependencies":{"react":">=15.0.0","react-dom":">=15.0.0"},"resolutions":{"@leeoniya/ufuzzy":"npm:dry-uninstall"},"jest":{"moduleNameMapper":{"i18n/(.*)\\\\.yml$":"<rootDir>__tests__/test-utils/mock-data/empty-yml.js","modeSettings.yml$":"<rootDir>__tests__/test-utils/mock-data/empty-yml.js","\\\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>__tests__/test-utils/mock-data/fileMock.js"},"transform":{"\\\\.[jt]sx?$":"babel-jest"},"testMatch":["**/__tests__/**/*.[jt]s?(x)","**/*.test.[jt]s?(x)"],"rootDir":"./","testPathIgnorePatterns":["<rootDir>/node_modules/","<rootDir>/__tests__/test-utils"],"setupFilesAfterEnv":["@wordpress/jest-puppeteer-axe","<rootDir>/__tests__/test-utils/setup-env.js"],"testURL":"http://localhost:9966","globalSetup":"<rootDir>/__tests__/test-utils/global-setup.js"},"browserslist":[">0.2%","not dead","not op_mini all"],"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix"],"i18n/*.{yml,yaml}":["yaml-sort --quotingStyle double --input"]},"percy":{"version":2,"snapshot":{"percy-css":".percy-hide { opacity: 0!important; } "}}}')}}]);