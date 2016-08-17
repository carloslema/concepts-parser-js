'use strict';

const utils = require('../../utils');

module.exports = class Word {
	constructor(value, index, context) {
		this.reset(value, index);
		if (context) {
			this.context = {
				country: context.country,
				lang: context.lang
			};
		}
	}

	isAbbr() {
		return this.value.toUpperCase() === this.value;
	}

	reset(value, index) {
		this.value = value;
		if (typeof index === 'number' && index > -1) {
			this.index = index;
		} else {
			this.index = this.index || 0;
		}
		// if (value.length > 1) {
		// 	if (utils.isPunctuation(value[value.length - 1])) {
		// 		let nopvalue = this.value.substr(0, this.value.length - 1);
		// 		if (nopvalue.toUpperCase() !== nopvalue) {
		// 			// console.log('no punctuation', value, nopvalue);
		// 			this.value = nopvalue;
		// 		}
		// 	}
		// }
	}

	normalize() {
		let value = this.value.replace(/’/g, '\'').replace(/“/g, '"').replace(/”/g, '"').replace(/„/g, '"');
		if (value !== this.value) {
			this.reset(value);
		}
	}

	isValid() {
		let value = this.value;
		if (!value || value.length < 2) {
			return false;
		}

		if (value.length !== value.trim().length) {
			//throw new Error('Trim value is not === with value: "'+ value+'"');
			return false;
		}

		return true;
	}

};