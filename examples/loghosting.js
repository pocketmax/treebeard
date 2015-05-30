module.exports = {
	type: 'device',
	label: 'my account',
	datacenters: {
		DC1: {
			servers: {
				SRV1: {
					drives: {
						D1: {
							freeSpaceGb: 10
						}
					},
					containers: {
						C1: {
							config: {

							},
							volumes: {
								'/var/bla': {
									source: {
										container: 'C1'
									},
									usedGb: 4.4
								},
								'/var/bla2': {
									source: {
										image: 'I3'
									},
									usedGb: 6.4
								}
							},
							memory: {
								usedMb: 10
							},
							cpu: {
								core0Pct: 10,
								core1Pct: 10,
								core2Pct: 30,
								core3Pct: 10
							}
						}
					}
				}
			}
		},
		DC2: {
			SRV1: {
				containers: {
					C1: true
				}
			}
		}
	}
};
