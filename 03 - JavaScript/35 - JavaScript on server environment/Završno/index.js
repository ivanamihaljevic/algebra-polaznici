import { isNumber, isString, isArray, isObject } from 'lodash';

function getType(value) {
	if (isNumber(e)) {
    	console.log(`${e} is a number`);
	}

	if (isString(e)) {
    	console.log(JSON.stringify(e) + ' is a string');
		}

	if (isArray(e)) {
    	console.log(JSON.stringify(e) + ' is an array');
	}

 	if (isObject(e)) {
    	console.log(JSON.stringify(e) + ' is an object');
	}
}

export default getType;