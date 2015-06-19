var QrValidation = function() {

};

QrValidation.prototype.stringExtractor = function(string){
	container = string.split(',');
	return container;
};

QrValidation.prototype.postcodeValidator = function(postcode){
	if (postcodeCounter(postcode) == true && postcodeSplitter(postcode) == true){
		return true;
	} else {
		return false;
	}
};

function postcodeSplitter (postcode){
	parts = {};
	// get the first three letters of the postcode
	parts.part1 = postcode.substring(0,3);
	// get the last three letters of the postcode
	parts.part2 = postcode.substring(3);
	if (postcodeLetterCheckPartOne(parts.part1) && postcodeLetterCheckPartTwo(parts.part2)) {
		return true;
	} else {
		return false;
	}
};

function postcodeCounter(postcode) {
	if(postcode.length == 6 || postcode.length == 7){
		return true;
	} else {
		return false;
	}
};

function postcodeLetterCheckPartOne(postcode){
	if(postcode.charAt(0).constructor == String && postcode.charAt(1).constructor == String && parseInt(postcode.charAt(2)) == true){
		return true;
	} else {
		return false;
	}
};

function postcodeLetterCheckPartTwo(postcode){
	if(postcode.length == 3){
		if(parseInt(postcode.charAt(0)) && postcode.charAt(1).constructor == String && postcode.charAt(2).constructor == String){
			return true;
		} else {
			return false;
		}
	} else if (postcode.length == 4) {
		if(parseInt(postcode.charAt(0)) && parseInt(postcode.charAt(1)) && postcode.charAt(2).constructor == String && postcode.charAt(3).constructor == String){
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};