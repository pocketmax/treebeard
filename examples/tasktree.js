module.exports = {
	type: 'account',
	label: 'my account',
	projects: {
		P1: {
			label: 'Feed family breakfast',
			tasks: {
				T1: {
					label: 'Clean kitchen',
					tasks: {
						T11: {
							label: 'Wash dishes'
						},
						T12: {
							label: 'Wipe down counters'
						},
						T13: {
							label: 'Take out trash'
						}
					}
				},
				T2: {
					label: 'Cook breakfast',
					tasks: {
						T21: {
							label: 'Take food out of refrigerator'
						},
						T22: {
							label: 'Turn on oven'
						}
					}
				},
				T3: {
					label: 'Set breakfast table'
				},
				T4: {
					label: 'Serve breakfast on breakfast table'
				}
			}
		},
		P2: {
			label: 'Feed family lunch',
			tasks: {
				T5: {
					label: 'Clean kitchen'
				},
				T6: {
					label: 'Cook breakfast'
				},
				T7: {
					label: 'Set breakfast table'
				},
				T8: {
					label: 'Serve breakfast on breakfast table'
				}
			}
		},
		P3: {
			label: 'Feed family dinner',
			tasks: {
				T9: {
					label: 'Clean kitchen'
				},
				T10: {
					label: 'Cook breakfast'
				},
				T11: {
					label: 'Set breakfast table'
				},
				T12: {
					label: 'Serve breakfast on breakfast table'
				}
			}
		}
	}
};
