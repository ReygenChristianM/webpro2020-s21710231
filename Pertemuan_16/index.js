//import hanya satu module
import {} from './hello.js';

import * as helper from './hello.js' // import semua module

helper.hello('John');
helper.world();
// helper.name();
// console.log(numbers);