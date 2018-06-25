/*jslint node: true */
"use strict";

const _ = require('lodash');
const correspondents = require('./correspondent');
const eventBus = require('byteballcore/event_bus.js');
const headlessWallet = require('headless-byteball');
const objectHash = require('byteballcore/object_hash.js');
const conf = require('byteballcore/conf.js');

var bettingBotDeviceAddress;
var assocRequestsSent = {};

function playWithAPI() {

		sendRequest("getBestOdds", {filter: "soccer"}, {
		ifSuccess: function(cats) {
			process.stdout.write("\nCurrent best odds: " + JSON.stringify(cats))
		},
		ifFailed: function(error) {
			process.stdout.write("\nFailed to get best odds. Reason:" + error);
		}
	});
	
	
	/*
	sendRequest("getCategories", null, {
		ifSuccess: function(cats) {
			process.stdout.write("\nCurrent active categories: " + JSON.stringify(cats))
		},
		ifFailed: function(error) {
			process.stdout.write("\nFailed to get categories. Reason:" + error);
		}
	});
*/
	/*
	sendRequest("getChampionships", null, {
		ifSuccess: function(championships) {
			process.stdout.write("\nCurrent active championships: " + JSON.stringify(championships))
		},
		ifFailed: function(error) {
			process.stdout.write("\nFailed to get championships. Reason:" + error);
		}
	});
	*/
	/*
	sendRequest("getFeedNames", {championship: "NHL"}, {
		ifSuccess: function(feedNames) {
			process.stdout.write("\nCurrent feed names: " + JSON.stringify(feedNames))
		},
		ifFailed: function(error) {
			process.stdout.write("\nFailed to get feed names. Reason:" + error);
		}
	});*/
	/*
	sendRequest("getActiveOffers", null, {
		ifSuccess: function(offers) {
			process.stdout.write("\nCurrent active offers: " + JSON.stringify(offers))
		},
		ifFailed: function(error) {
			process.stdout.write("\nFailed to get current offers. Reason:" + error);
		}
	});
	
*/
	/*
	sendRequest("getActiveBets", null, {
		ifSuccess: function(bets) {
			process.stdout.write("\nCurrent active bets: " + JSON.stringify(bets))
		},
		ifFailed: function(error) {
			process.stdout.write("\nFailed to get current bets. Reason:" + error);
		}
	});*/
	/*
	sendRequest("removeOffer", { feed_name: "CRYSTALPALACE_WESTBROMWICHALBION_2018-05-13"}, {
		ifSuccess: function() {
			process.stdout.write("\nOffer removed for CRYSTALPALACE_WESTBROMWICHALBION_2018-05-13")
		},
		ifFailed: function(error) {
			process.stdout.write("\nFailed to remove offer for CRYSTALPALACE_WESTBROMWICHALBION_2018-05-13, reason:" + error);
		}
		});*/
	/*
	sendRequest("setOffer", { feed_name: "CRYSTALPALACE_WESTBROMWICHALBION_2018-05-13", odds_1: 1.2, odds_x:1.3, odds_2: 1.4, amount_max:150 }, {
		ifSuccess: function() {
			process.stdout.write("\nOffer placed for CRYSTALPALACE_WESTBROMWICHALBION_2018-05-13")
		},
		ifFailed: function(error) {
			process.stdout.write("\nFailed to place offer for CRYSTALPALACE_WESTBROMWICHALBION_2018-05-13, reason:" + error);
		}
		});*/

}

/*
 * Send a request after having set a timeout and added the tag
 */

function sendRequest(command, params, actionForResponse) {
	var request = {
		command: command
	};
	if (params)
		request.params = params;
	request.time_limit = Math.floor(new Date() / 1000) + conf.timeOutInSec;
	var content = _.clone(request);
	content.tag = objectHash.getBase64Hash(request);

	var message = JSON.stringify(['request', content]);

	var device = require('byteballcore/device.js');
	assocRequestsSent[content.tag] = actionForResponse;
	device.sendMessageToDevice(bettingBotDeviceAddress, 'text', message);

}


/*
 * Treat any response from betting bot and execute the function associated with the request
 */

eventBus.on('text', function(from_address, text) {

	if (from_address == bettingBotDeviceAddress) {
		try {
			var objReceived = JSON.parse(text);
		} catch (e) {
			return process.stdout.write(("\Invalid JSON received:\n" + text + "\nerror: " + e));
		}

		if (objReceived[0] == "response" && objReceived[1].tag && assocRequestsSent[objReceived[1].tag]) {

			if (objReceived[1].is_successful)
				assocRequestsSent[objReceived[1].tag].ifSuccess(objReceived[1].response);
			else
				assocRequestsSent[objReceived[1].tag].ifFailed(objReceived[1].error);

			delete assocRequestsSent[objReceived[1].tag];
		}
	}

});


eventBus.on('headless_wallet_ready', function() {

	/*
	 * Pair with betting bot if not already in correspondents list
	 */
	correspondents.findCorrespondentByPairingCode(conf.bettingBotPairingCode, (correspondent) => {
		if (!correspondent) {
			correspondents.addCorrespondent(conf.bettingBotPairingCode, 'Betting Bot', (err, device_address) => {
				if (err)
					throw new Error(err);
				bettingBotDeviceAddress = device_address;
			});
		} else {
			bettingBotDeviceAddress = correspondent.device_address;
		}
	});

	setTimeout(playWithAPI, 2000);


});