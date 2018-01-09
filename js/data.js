jsondata = {
	"title": "森林公安OA系统",
	"nodes": {
		"demo_node_9": {
			"name": "起草",
			"left": 10,
			"top": 12,
			"type": "start round",
			"width": 24,
			"height": 24,
			"alt": true
		},
		"demo_node_5": {
			"name": "审核",
			"left": 107,
			"top": 12,
			"type": "fork",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_20": {
			"name": "签发",
			"left": 355,
			"top": 12,
			"type": "join",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_27": {
			"name": "签章",
			"left": 492,
			"top": 12,
			"type": "node",
			"width": 86,
			"height": 24,
			"alt": true
		}
	},
	"lines": {
		"demo_line_6": {
			"type": "lr",
			"M": 81.5,
			"from": "demo_node_9",
			"to": "demo_node_5",
			"name": ""
		},
		"demo_line_7": {
			"type": "lr",
			"M": 81.5,
			"from": "demo_node_20",
			"to": "demo_node_5",
			"name": ""
		},
		"demo_line_9": {
			"type": "lr",
			"M": 81.5,
			"from": "demo_node_11",
			"to": "demo_node_5",
			"name": ""
		},
		"demo_line_14": {
			"type": "sl",
			"from": "demo_node_12",
			"to": "demo_node_13",
			"name": ""
		},
		"demo_line_15": {
			"type": "lr",
			"M": 78.5,
			"from": "demo_node_14",
			"to": "demo_node_13",
			"name": ""
		},
		"demo_line_17": {
			"type": "tb",
			"M": 152,
			"from": "demo_node_5",
			"to": "demo_node_2",
			"name": "F"
		},
		"demo_line_18": {
			"type": "tb",
			"M": 239,
			"from": "demo_node_13",
			"to": "demo_node_3",
			"name": "T"
		},
		"demo_line_19": {
			"type": "tb",
			"M": 383.5,
			"from": "demo_node_13",
			"to": "demo_node_4",
			"name": "F"
		},
		"demo_line_22": {
			"type": "lr",
			"M": 339,
			"from": "demo_node_4",
			"to": "demo_node_21",
			"name": ""
		},
		"demo_line_23": {
			"type": "lr",
			"M": 337.5,
			"from": "demo_node_2",
			"to": "demo_node_21",
			"name": ""
		},
		"demo_line_26": {
			"type": "lr",
			"M": 366.5,
			"from": "demo_node_3",
			"to": "demo_node_20",
			"name": ""
		},
		"demo_line_31": {
			"type": "tb",
			"M": 176.5,
			"from": "demo_node_20",
			"to": "demo_node_29",
			"name": "4"
		},
		"demo_line_32": {
			"type": "tb",
			"M": 25.5,
			"from": "demo_node_20",
			"to": "demo_node_27",
			"name": ""
		},
		"demo_line_33": {
			"type": "tb",
			"M": 128,
			"from": "demo_node_20",
			"to": "demo_node_30",
			"name": "3"
		},
		"demo_line_34": {
			"type": "tb",
			"M": 74.5,
			"from": "demo_node_20",
			"to": "demo_node_28",
			"name": "2"
		},
		"demo_line_36": {
			"type": "tb",
			"M": 21.5,
			"from": "demo_node_5",
			"to": "demo_node_1",
			"name": "T"
		},
		"demo_line_37": {
			"type": "lr",
			"M": 367,
			"from": "demo_node_1",
			"to": "demo_node_20",
			"name": ""
		},
		"demo_line_45": {
			"type": "tb",
			"M": 225,
			"from": "demo_node_21",
			"to": "demo_node_44",
			"name": "1"
		},
		"demo_line_46": {
			"type": "tb",
			"M": 274.5,
			"from": "demo_node_21",
			"to": "demo_node_38",
			"name": "2"
		},
		"demo_line_47": {
			"type": "tb",
			"M": 325.5,
			"from": "demo_node_21",
			"to": "demo_node_39",
			"name": "3"
		},
		"demo_line_48": {
			"type": "sl",
			"from": "demo_node_21",
			"to": "demo_node_40",
			"name": "4"
		},
		"demo_line_49": {
			"type": "tb",
			"M": 411.5,
			"from": "demo_node_21",
			"to": "demo_node_42",
			"name": "5"
		},
		"demo_line_50": {
			"type": "tb",
			"M": 470.5,
			"from": "demo_node_21",
			"to": "demo_node_43",
			"name": "0"
		},
		"demo_line_51": {
			"type": "sl",
			"from": "demo_node_44",
			"to": "demo_node_30",
			"name": "2"
		},
		"demo_line_53": {
			"type": "sl",
			"from": "demo_node_44",
			"to": "demo_node_52",
			"name": "1"
		},
		"demo_line_56": {
			"type": "sl",
			"from": "demo_node_43",
			"to": "demo_node_55",
			"name": "0"
		},
		"demo_line_57": {
			"type": "sl",
			"from": "demo_node_43",
			"to": "demo_node_54",
			"name": "1"
		},
		"demo_line_58": {
			"type": "sl",
			"from": "demo_node_42",
			"to": "demo_node_54",
			"name": "0"
		},
		"demo_line_60": {
			"type": "sl",
			"from": "demo_node_43",
			"to": "demo_node_59",
			"name": "2",
			"alt": true
		}
	},
	"areas": {},
	"initNum": 61
};