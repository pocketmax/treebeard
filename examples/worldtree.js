module.exports = {
	type: 'planet',
	label: 'world',
	continents: {
		NA: {
			label: 'North America',
			type: 'continent',
			countries: {
				US: {
					label: 'United States',
					type: 'country',
					states: {
						TX: {
							label: 'Texas',
							cities: {
								DAL: {
									label: 'Dallas',
									type: 'city'
								},
								AUS: {
									label: 'Austin',
									type: 'city'
								},
								HOU: {
									label: 'Houston',
									type: 'city'
								}
							}
						},
						CAL: {
							label: 'California',
							type: 'state',
							cities: {
								SFO: {
									label: 'San Francisco',
									type: 'city'
								},
								OAK: {
									label: 'Oakland',
									type: 'city'
								}
							}
						}
					}
				},
				CAN: {
					type: 'country',
					label: 'Canada'
				},
				MX: {
					type: 'country',
					label: 'Mexico'
				}
			}
		}
	},
	SA: {
		type: 'continent',
		label: 'South America',
		countries: {
			BR: {
				type: 'country',
				label: 'Brazil'
			},
			CO: {
				type: 'country',
				label: 'Colombia'
			},
			VE: {
				type: 'country',
				label: 'Venezuela'
			},
			CU: {
				type: 'country',
				label: 'Cuba'
			}
		}
	}
};
