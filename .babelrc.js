// {
//   presets: [
//     "@babel/preset-env",
//     [
//       "@babel/preset-react",
//       {
//         "runtime": "automatic"
//       }
//     ]
//   ]
//   plugins: ['@babel/plugin-transform-runtime'] //rather than injecting helper functions for babel into each file, provides reference (reducing duplication)
// }

//only needed if not specified in webpack config OR if using different settings in different parts of the files