describe("Qr", function() {
  var qr;

  beforeEach(function() {
  	qr = new QrValidation();
  });

  it("Should split a string by elements", function() {
  	string = "url/action?parameters=,/,postcode,/companyname,,tariff,,paymentmethod,,meternumber,,usage,/from-to,/,"
  	expect(qr.stringExtractor(string)).toContain("postcode");
  });

  it("Should check length of postcode and return true if within limit", function(){
  	postcode = "PE12QQ"; 
  	expect(postcodeCounter(postcode)).toEqual(true)
  });

  it("Should return true if part 1 {0} of postcode is valid letter", function(){
  	postcode = "PE1";
  	expect(postcodeLetterCheckPartOne(postcode)).toEqual(true);
  });

  it("Should return true if part 2 {0} of postcode is valid int", function(){
  	postcode = "12QQ"
  	postcodeTwo = "2QQ"
  	expect(postcodeLetterCheckPartTwo(postcode)).toEqual(true);
  	expect(postcodeLetterCheckPartTwo(postcodeTwo)).toEqual(true);
  })

  it ("should return true if a postcode is valid", function(){
  	postcode = "PE12QQ";
  	postcodeTwo = "PE112QQ";
  	expect(qr.postcodeValidator(postcode)).toEqual(true);
  	expect(qr.postcodeValidator(postcodeTwo)).toEqual(true);
  });

  it ("should return false if a postcode is invalid", function(){
  	postcodeWrong = "PE1G2QQ"; // invalid character
  	postcodeShort = "PE1G"; // too short
  	postcodeLong = "PE1G2QQRT"; // too long
  	expect(qr.postcodeValidator(postcodeWrong)).toEqual(false);
  	expect(qr.postcodeValidator(postcodeShort)).toEqual(false);
  	expect(qr.postcodeValidator(postcodeLong)).toEqual(false);
  });

});

// http://www.hammond-energy.co.uk/

// action?parameters=,/,

// pe2 6ys

// ,/

// British Gas (British Gas Trading Limited),
// ,
// Standard,
// ,
// Fixed Monthly Direct Debit,
// ,
// GM66,
// ,
// 43210kWh,
// /12112013-11112014,/,



//  Expected [ 'url/action?parameters=', '/', 'postcode', '/companyname', '', 'tariff', '', 'paymentmethod', '', 'meternumber', '', 'usage', '/from-to', '/', '' ] to contain 'postcsode'.
