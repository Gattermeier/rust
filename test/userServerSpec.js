// IMPORT REQUIRED MODULES FROM SERVER
var utils = require('../server/utils');

// TEST MODULES
var test = require('tape');

/**
 *  USAGE:
 *
 * t.plan(num) is the number of assertions you plan to look for in any given test.
 * If you add new assertions to a test, you must update this number, otherwise TAPE
 * will fail.
 *
 * To check if you're getting the expected result from a particular function, you 
 * can use t.equal() with the following parameters: t.equal(actual, excepted, msg)
 *
 * To test a helper function, for example, something called "isTrue(val)", you can
 * pass it into the 'actual' parameter and compare it's output to the 'expected'
 * parameter like so:
 * 
 * t.equal(isTrue(true), true, 'Expect isTrue(true) to return true');
 *
 * To run this test file from the root folder:
 * node test/serverSpec.js
 */

test('----- User Creation -----\n\n', function(t) {
  t.plan(4); // Number of tests that we plan to run

  // Create new user through POST request
  // Look for 200 response
  t.equal(200, 200, 'New user created!');

  // Check if user exists through GET request
  // Look for 200 response
  t.equal(200, 200, 'User exists!');

  // Update some user info (e.g., new email address) through PUT request
  // Look for 201 response
  t.equal(201, 201, 'User account updated');

  // Delete user. We actually might not want to do this? 
  // Or if so, make sure we delete all associated user data.
  // Look for 410 response
  t.equal(410, 410, 'User account deleted');

});