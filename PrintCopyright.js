"use strict";
/*
		name: PrintCopyright()
		author: Johan Vranckx
		description: function prints copyright message on webpage
		parameters:
			intYearOfPublication [integer] Year of Publication of the copyrighted work
			strCopyrightName [string] Name of the copyright holder, person or organisation
			strLicenseText [string] [Optional] License text of the copyrighted work
		return value: [string] "© intYearOfPublication strCopyrightName strLicenseText"
*/
function PrintCopyright(intYearOfPublication, strCopyrightName, strLicenseText){
	var intCurrentYear = (new Date()).getFullYear();

	// Validate var intYearOfPublication
	try {
		if (typeof intYearOfPublication === 'undefined') throw "undefined";
	    if (intYearOfPublication == "") throw "empty";
	    if (isNaN(intYearOfPublication)) throw "not a number";
	    if (typeof intYearOfPublication === 'number' && intYearOfPublication % 1 !== 0) throw "not an integer";
	    if (intYearOfPublication < 0)   throw "a negative number";
	    if (intYearOfPublication > intCurrentYear)   throw "too high";
	}
	catch(err) {
		intYearOfPublication=null, strCopyrightName=null, strLicenseText=null;
	    document.write("Input of 'Year of Publication' is " + err);
	    console.error("Variable intYearOfPublication is " + err);
	    return;
	}

	// Validate var strCopyrightName
	try {
		if (typeof strCopyrightName === 'undefined') throw "undefined";
	    if (strCopyrightName == "") throw "empty";
	    if (typeof strCopyrightName !== 'string') throw "not a string";
	}
	catch(err) {
		intYearOfPublication=null, strCopyrightName=null, strLicenseText=null;
	    document.write("Input of 'Copyright Name' is " + err);
	    console.error("Variable strCopyrightName is " + err);
	    return;
	}

	// Validate var strLicenseText
	try {
		if (typeof strLicenseText === 'undefined') var strLicenseText = ", all rights reserved.";
	    if (typeof strLicenseText !== 'string') throw "not a string";
	    if (strLicenseText == "")  var strLicenseText = ", all rights reserved.";
	}
	catch(err) {
		intYearOfPublication=null, strCopyrightName=null, strLicenseText=null;
	    document.write("Input of 'License Text' is " + err);
	    console.error("Variable strLicenseText is " + err);
	    return;
	}

	if (intCurrentYear ===	intYearOfPublication) {
		document.write("&copy; " + intYearOfPublication + strCopyrightName + strLicenseText);
	} else {
		document.write("&copy; " + intYearOfPublication + "-" + intCurrentYear + strCopyrightName + strLicenseText);
	}
}
