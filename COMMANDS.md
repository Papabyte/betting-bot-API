- [getCategories](#getcategories)
- [getChampionships](#getchampionships)
- [getFeedNames](#getfeednames)
- [getActiveOffers](#getactiveoffers)
- [getActiveBets](#getactivebets)
- [setOffer](#setoffer)
- [removeOffer](#removeoffer)

## getCategories

Return all sports available

###### Request
```
["request", {
	"command": "getCategories",
	"time_limit": 1525850611,
	"tag": "nEeQgdxEliIDHZ2YANyMd/rYJmbSDQP9lhXLM5ynQVo="
}]
```

###### Response
```
["response", {
	"is_successful": true,
	"response": ["Baseball", "Basketball", "Ice hockey", "Mixed Martial Arts", "Soccer"],
	"tag": "nEeQgdxEliIDHZ2YANyMd/rYJmbSDQP9lhXLM5ynQVo="
}]
```


## getChampionships

Return all championships available

###### Request
```
["request", {
	"command": "getChampionships",
	"time_limit": 1525852687,
	"tag": "Y75HtLZQwhD0/bKzsZa+gsbL5r9eJL8JAwQn+ljr2p4="
}]
```

###### Response
```
["response", {
	"is_successful": true,
	"response": [{
		"championship": "MLB",
		"cat": "Baseball"
	}, {
		"championship": "NBA",
		"cat": "Basketball"
	}, {
		"championship": "NHL",
		"cat": "Ice hockey"
	}, {
		"championship": "UFC",
		"cat": "Mixed Martial Arts"
	}, {
		"championship": "BSA",
		"cat": "Soccer"
	}, {
		"championship": "PL",
		"cat": "Soccer"
	}, {
		"championship": "ELC",
		"cat": "Soccer"
	}, {
		"championship": "EL1",
		"cat": "Soccer"
	}, {
		"championship": "EL2",
		"cat": "Soccer"
	}, {
		"championship": "DED",
		"cat": "Soccer"
	}, {
		"championship": "FL1",
		"cat": "Soccer"
	}, {
		"championship": "FL2",
		"cat": "Soccer"
	}, {
		"championship": "BL1",
		"cat": "Soccer"
	}, {
		"championship": "BL2",
		"cat": "Soccer"
	}, {
		"championship": "PD",
		"cat": "Soccer"
	}, {
		"championship": "SA",
		"cat": "Soccer"
	}, {
		"championship": "PPL",
		"cat": "Soccer"
	}, {
		"championship": "DFB",
		"cat": "Soccer"
	}, {
		"championship": "SB",
		"cat": "Soccer"
	}, {
		"championship": "CL",
		"cat": "Soccer"
	}],
	"tag": "Y75HtLZQwhD0/bKzsZa+gsbL5r9eJL8JAwQn+ljr2p4="
}]
```

## getFeedNames

Return feed names and information about fixtures for a specified sport or championship.

Parameters:
- **cat** (optionnal) : filter by sport
- **championship** (optionnal, has priority over cat): filter by championship

###### Request
```
["request", {
	"command": "getFeedNames",
	"params": {
		"championship": "NBA"
	},
	"time_limit": 1525857713,
	"tag": "s+y60IHpqDunZFufMHqQBmz2Vh9JdTXnt/1b4+Y0d3k="
}]
```

###### Response
```
["response", {
	"is_successful": true,
	"response": {
		"NEWORLEANSPELICANS_GOLDENSTATEWARRIORS_2018-05-06": {
			"homeTeam": "New Orleans Pelicans",
			"awayTeam": "Golden State Warriors",
			"feedHomeTeamName": "NEWORLEANSPELICANS",
			"feedAwayTeamName": "GOLDENSTATEWARRIORS",
			"date": "2018-05-06T19:30:00.000Z",
			"localDay": "2018-05-06T00:00:00.000Z"
		},
		"UTAHJAZZ_HOUSTONROCKETS_2018-05-06": {
			"homeTeam": "Utah Jazz",
			"awayTeam": "Houston Rockets",
			"feedHomeTeamName": "UTAHJAZZ",
			"feedAwayTeamName": "HOUSTONROCKETS",
			"date": "2018-05-07T00:00:00.000Z",
			"localDay": "2018-05-06T00:00:00.000Z"
		},
		"PHILADELPHIA76ERS_BOSTONCELTICS_2018-05-07": {
			"homeTeam": "Philadelphia 76ers",
			"awayTeam": "Boston Celtics",
			"feedHomeTeamName": "PHILADELPHIA76ERS",
			"feedAwayTeamName": "BOSTONCELTICS",
			"date": "2018-05-07T22:00:00.000Z",
			"localDay": "2018-05-07T00:00:00.000Z"
		},
		"CLEVELANDCAVALIERS_TORONTORAPTORS_2018-05-07": {
			"homeTeam": "Cleveland Cavaliers",
			"awayTeam": "Toronto Raptors",
			"feedHomeTeamName": "CLEVELANDCAVALIERS",
			"feedAwayTeamName": "TORONTORAPTORS",
			"date": "2018-05-08T00:30:00.000Z",
			"localDay": "2018-05-07T00:00:00.000Z"
		},
		"HOUSTONROCKETS_UTAHJAZZ_2018-05-08": {
			"homeTeam": "Houston Rockets",
			"awayTeam": "Utah Jazz",
			"feedHomeTeamName": "HOUSTONROCKETS",
			"feedAwayTeamName": "UTAHJAZZ",
			"date": "2018-05-09T00:00:00.000Z",
			"localDay": "2018-05-08T00:00:00.000Z"
		},
		"GOLDENSTATEWARRIORS_NEWORLEANSPELICANS_2018-05-08": {
			"homeTeam": "Golden State Warriors",
			"awayTeam": "New Orleans Pelicans",
			"feedHomeTeamName": "GOLDENSTATEWARRIORS",
			"feedAwayTeamName": "NEWORLEANSPELICANS",
			"date": "2018-05-09T02:30:00.000Z",
			"localDay": "2018-05-08T00:00:00.000Z"
		},
		"BOSTONCELTICS_PHILADELPHIA76ERS_2018-05-09": {
			"homeTeam": "Boston Celtics",
			"awayTeam": "Philadelphia 76ers",
			"feedHomeTeamName": "BOSTONCELTICS",
			"feedAwayTeamName": "PHILADELPHIA76ERS",
			"date": "2018-05-09T22:00:00.000Z",
			"localDay": "2018-05-09T00:00:00.000Z"
		},
		"TORONTORAPTORS_CLEVELANDCAVALIERS_2018-05-09": {
			"homeTeam": "Toronto Raptors",
			"awayTeam": "Cleveland Cavaliers",
			"feedHomeTeamName": "TORONTORAPTORS",
			"feedAwayTeamName": "CLEVELANDCAVALIERS",
			"date": "2018-05-09T22:00:00.000Z",
			"localDay": "2018-05-09T00:00:00.000Z"
		},
		"UTAHJAZZ_HOUSTONROCKETS_2018-05-10": {
			"homeTeam": "Utah Jazz",
			"awayTeam": "Houston Rockets",
			"feedHomeTeamName": "UTAHJAZZ",
			"feedAwayTeamName": "HOUSTONROCKETS",
			"date": "2018-05-10T22:00:00.000Z",
			"localDay": "2018-05-10T00:00:00.000Z"
		},
		"NEWORLEANSPELICANS_GOLDENSTATEWARRIORS_2018-05-10": {
			"homeTeam": "New Orleans Pelicans",
			"awayTeam": "Golden State Warriors",
			"feedHomeTeamName": "NEWORLEANSPELICANS",
			"feedAwayTeamName": "GOLDENSTATEWARRIORS",
			"date": "2018-05-10T22:00:00.000Z",
			"localDay": "2018-05-10T00:00:00.000Z"
		},
		"CLEVELANDCAVALIERS_TORONTORAPTORS_2018-05-11": {
			"homeTeam": "Cleveland Cavaliers",
			"awayTeam": "Toronto Raptors",
			"feedHomeTeamName": "CLEVELANDCAVALIERS",
			"feedAwayTeamName": "TORONTORAPTORS",
			"date": "2018-05-11T22:00:00.000Z",
			"localDay": "2018-05-11T00:00:00.000Z"
		},
		"PHILADELPHIA76ERS_BOSTONCELTICS_2018-05-11": {
			"homeTeam": "Philadelphia 76ers",
			"awayTeam": "Boston Celtics",
			"feedHomeTeamName": "PHILADELPHIA76ERS",
			"feedAwayTeamName": "BOSTONCELTICS",
			"date": "2018-05-11T22:00:00.000Z",
			"localDay": "2018-05-11T00:00:00.000Z"
		},
		"TORONTORAPTORS_CLEVELANDCAVALIERS_2018-05-13": {
			"homeTeam": "Toronto Raptors",
			"awayTeam": "Cleveland Cavaliers",
			"feedHomeTeamName": "TORONTORAPTORS",
			"feedAwayTeamName": "CLEVELANDCAVALIERS",
			"date": "2018-05-13T22:00:00.000Z",
			"localDay": "2018-05-13T00:00:00.000Z"
		},
		"BOSTONCELTICS_PHILADELPHIA76ERS_2018-05-13": {
			"homeTeam": "Boston Celtics",
			"awayTeam": "Philadelphia 76ers",
			"feedHomeTeamName": "BOSTONCELTICS",
			"feedAwayTeamName": "PHILADELPHIA76ERS",
			"date": "2018-05-13T22:00:00.000Z",
			"localDay": "2018-05-13T00:00:00.000Z"
		},
		"HOUSTONROCKETS_UTAHJAZZ_2018-05-14": {
			"homeTeam": "Houston Rockets",
			"awayTeam": "Utah Jazz",
			"feedHomeTeamName": "HOUSTONROCKETS",
			"feedAwayTeamName": "UTAHJAZZ",
			"date": "2018-05-14T22:00:00.000Z",
			"localDay": "2018-05-14T00:00:00.000Z"
		},
		"GOLDENSTATEWARRIORS_NEWORLEANSPELICANS_2018-05-14": {
			"homeTeam": "Golden State Warriors",
			"awayTeam": "New Orleans Pelicans",
			"feedHomeTeamName": "GOLDENSTATEWARRIORS",
			"feedAwayTeamName": "NEWORLEANSPELICANS",
			"date": "2018-05-14T22:00:00.000Z",
			"localDay": "2018-05-14T00:00:00.000Z"
		}
	},
	"tag": "s+y60IHpqDunZFufMHqQBmz2Vh9JdTXnt/1b4+Y0d3k="
}]
```
## getActiveOffers

Return your active offers.

Parameters:
- **cat** (optionnal) : filter by sport
- **championship** (optionnal, has priority over cat): filter by championship

Properties returned:
- **odds_1**: your odds for home team winning
- **odds_x**: your odds for a draw (false if not applicable)
- **odds_2**: your odds for away team winning
- **at_stake_odds_1**: amount in MB that you lose for home team winning
- **at_stake_odds_x**: amount in MB that you lose for a draw (false if not applicable)
- **at_stake_odds_2**: amount in MB that you lose for away team winning
- **offer_feedname**: feedname for which your offer applies
- **amount_max_set**: the amount max in MB that you are willing to risk for this fixture

###### Request
```
["request", {
	"command": "getActiveOffers",
	"time_limit": 1525861418,
	"tag": "ONJlhEn4twuoV3Ucow+f1p66gfkfk2EGuby/IH6z4gw="
}]
```

###### Response
```
[{
	"odds_1": 1.84,
	"odds_x": false,
	"odds_2": 1.9,
	"at_stake_odds_1": 0,
	"at_stake_odds_x": false,
	"at_stake_odds_2": 0,
	"offer_feedname": "BOSTONCELTICS_PHILADELPHIA76ERS_2018-05-09",
	"amount_max_set": 100
}, {
	"odds_1": 1.25,
	"odds_x": 0,
	"odds_2": 9.3,
	"at_stake_odds_1": 25,
	"at_stake_odds_x": 0,
	"at_stake_odds_2": 0,
	"offer_feedname": "BARCELONA_VILLARREAL_2018-05-09",
	"amount_max_set": 100
}, {
	"odds_1": 0,
	"odds_x": 7.5,
	"odds_2": 18,
	"at_stake_odds_1": 0,
	"at_stake_odds_x": 0,
	"at_stake_odds_2": 0,
	"offer_feedname": "CHELSEA_HUDDERSFIELDTOWN_2018-05-09",
	"amount_max_set": 100
}]
```

## getActiveBets

Return your active bets.

Properties returned:
- **win_condition**: data posted by oracle for which the taker wins the bet (in this case you lose as maker)
- **amount_stake**: amount in MB put at stake for this bet
- **amount_gain**: net gain in MB for you if the win condition doesn't realize
- **feed_name**: feedname for which this bet applies


###### Request
```
["request", {
	"command": "getActiveBets",
	"time_limit": 1525862770,
	"tag": "JT/SbC8f5BFFyrtys0yr6pJThuki+26RlxcczEVLePk="
}]
```

###### Response
```
[{
	"win_condition": "NICE",
	"amount_stake": "0.10",
	"amount_gain": "1.00",
	"feed_name": "NICE_LILLE_2018-03-04"
}]
```

## setOffer

Set odds offers for a feedname

Parameters:
- **feed_name**: feedname for which these odds apply
- **odds_1**: proposed odds for home team winning
- **odds_x**: proposed odds for a draw
- **odds_2**: proposed odds for away team winning
- **amount_max**: amount max in MB you want to risk on this fixture

###### Request
```
["request",{"command":"setOffer","params":{"feed_name":"CRYSTALPALACE_WESTBROMWICHALBION_2018-05-13","odds_1":1.2,"odds_x":1.3,"odds_2":1.4,"amount_max":150},"time_limit":1525929636,"tag":"n5AgEpSxUf+W5aDyeXsxDafYv7OcZSczyg92y8pCaCg="}]
```

###### Response
```
["response",{"is_successful":true,"tag":"n5AgEpSxUf+W5aDyeXsxDafYv7OcZSczyg92y8pCaCg="}]
```

## removeOffer

Remove odds offers for a feedname

Parameters:
- **feed_name**: feedname for which you remove offers

###### Request

```
["request",{"command":"removeOffer","params":{"feed_name":"CRYSTALPALACE_WESTBROMWICHALBION_2018-05-13"},"time_limit":1525934502,"tag":"ily5YQPWj9Zhsmn743y9+pR0Z3aFjsGPBxgzDqVb6n8="}]
```

###### Response
```
["response",{"is_successful":true,"tag":"ily5YQPWj9Zhsmn743y9+pR0Z3aFjsGPBxgzDqVb6n8="}]
```