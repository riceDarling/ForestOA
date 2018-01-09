var jsondata = {
	"title": "newFlow_1",
	"nodes": {
		"demo_node_1": {
			"name": "开始",
			"left": 42,
			"top": 180,
			"type": "start round mix",
			"width": 26,
			"height": 26,
			"alt": true
		},
		"demo_node_2": {
			"name": "结束",
			"left": 950,
			"top": 180,
			"type": "end round mix",
			"width": 26,
			"height": 26,
			"alt": true
		},
		"demo_node_3": {
			"name": "起草",
			"left": 155,
			"top": 180,
			"type": "task",
			"width": 104,
			"height": 26,
			"marked": true,
			"alt": true
		},
		"demo_node_4": {
			"name": "审核",
			"left": 364,
			"top": 180,
			"type": "task",
			"width": 104,
			"height": 26,
			"alt": true
		},
		"demo_node_8": {
			"name": "签发",
			"left": 571,
			"top": 180,
			"type": "node",
			"width": 104,
			"height": 26,
			"alt": true
		},
		"demo_node_9": {
			"name": "签章",
			"left": 750,
			"top": 180,
			"type": "task",
			"width": 104,
			"height": 26,
			"alt": true
		}
	},
	"lines": {
		"demo_line_5": {
			"type": "sl",
			"from": "demo_node_3",
			"to": "demo_node_4",
			"name": "提交申请"
		},
		"demo_line_6": {
			"type": "sl",
			"from": "demo_node_1",
			"to": "demo_node_3",
			"name": ""
		},
		"demo_line_7": {
			"type": "tb",
			"M": 140,
			"from": "demo_node_4",
			"to": "demo_node_3",
			"name": "不通过"
		},
		"demo_line_10": {
			"type": "sl",
			"from": "demo_node_4",
			"to": "demo_node_8",
			"name": "通过"
		},"demo_line_11": {
			"type": "tb",
			"M": 160,
			"from": "demo_node_8",
			"to": "demo_node_4",
			"name": "不通过"
		},
		"demo_line_14": {
			"marked": true,
			"type": "sl",
			"from": "demo_node_9",
			"to": "demo_node_2",
			"name": "接受"
		},"demo_line_12": {
			"type": "sl",
			"from": "demo_node_8",
			"to": "demo_node_9",
			"name": "通过"
		},
	},
	"initNum": 16
};