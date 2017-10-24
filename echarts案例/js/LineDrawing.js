//折线图
function LineDrawing() {

					//折线图
						var myChartZhe = echarts.init(document.getElementById('myChartZhe'));
						Zhe_option = {
								color: ['#FF6347', '#87CEFA', '#B3EE3A'],
							tooltip: {
								trigger: 'axis'
							},
							legend: {
								data: [ '健身产业', '冰雪产业','体育产业']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							toolbox: {
								//      feature: {
								//          saveAsImage: {}
								//      }
							},
							xAxis: {
								type: 'category',
								boundaryGap: false,
								data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
							},
							yAxis: [{
								type: 'value',
								name: '总人数',
		                       	axisLabel: {
								formatter: '{value} 人'
										}

							}],
							series: [ {
								name: '健身产业',
								type: 'line',
								stack: '总量1',
                                data: [111, 222,333, 444, 555,666, 777, 888, 234,345, 743, 342]
							}, {
								name: '冰雪产业',
								type: 'line',
								stack: '总量2',
                                data: [111, 422,133, 244, 655,366,277,688, 234,345, 743, 342]
							},{
								name: '体育产业',
								type: 'line',
								stack: '总量3',
                                data: [711,422,533,244, 155,266, 777, 688, 234,345, 343 ,842]
							}]
						};
						myChartZhe.setOption(Zhe_option);


					

	
}