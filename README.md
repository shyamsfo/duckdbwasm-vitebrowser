# duckdb-wasm example: vite-browser

![Side-by-side screenshot of browser running the example and the corresponding output in the DevTools window](vite_example.PNG)

Barebones example of querying with duckdb-wasm using Vite and just the browser (no front-end framework). No dataset file is loaded; the data is created using the generate_series function.

## How to run
1. Install the dependencies using `npm i`
2. Run the example using `npm run preview`
3. (Optional) If forking, use `npm run dev` and go from there!

## Steps taken

Everything runs from the [main.js](main.js) script which roughly does the following:

1. Import: duckdb-wasm and all its bundle alternatives
2. Pick bundle: Choose based on the browser in-use
3. Instantiate: Start duckdb and create a connection
4. Query: Select from the "database" (generate_series) using a basic query or a prepared statement
5. Close: The connection, database, and worker.

Notes:
- For ease of use when showing the results, JSON copies of the query results are printed to the console. Consequently...
    - ...this example is not acquainted with proper usage of the Apache Arrow objects like Table.
    - Making JSON copies of large query results for console.log may not be advisable


### How to create these assets

1. mvp_worker.js and eh_worker.js have been modified from the actual duckdb-wasm package.
2. main.js has been modified to use the eh_worker.js and mvp_worker.js

3. Use the right version of ducdkb-wasm in package.json
4. use yarn install to download the node modules
5. copy worker.js and eh_worker.js from node-modules/@duckdb/ducdkb-wasm to this directory
6. modify these. (done in 1 and 2) so that we can export those functions as variables.
7. update main.js to use the mvp_worker.js and eh_worker.js
8. yarn dev to build the package.
9. check the console on localhost:3000 to make sure duck is loaded correctly.
10. now copy the dist/assets/index.<hash>.js file to the nudata repo and publish from there.


