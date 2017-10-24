function histogram() {
	//柱状图

					 var myChartZhu = echarts.init(document.getElementById('myChartZhu'));
						var labelOption = {};

						Zhu_option = {
							color: ['#FF6347', '#87CEFA', '#B3EE3A'],
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'shadow'
								}
							},
							legend: {
								data: [ '健身产业', '冰雪产业','体育产业',]
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							toolbox: {
								//      show: true,
								//      orient: 'vertical',
								//      left: 'right',
								//      top: 'center',
								//      feature: {
								//          mark: {show: true},
								//          dataView: {show: true, readOnly: false},
								//          magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
								//          restore: {show: true},
								//          saveAsImage: {show: true}
								//      }
							},
							calculable: true,
							xAxis: [{
								type: 'category',
								axisTick: {
									show: false
								},
								data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
							}],
							yAxis: [{
								type: 'value',
								name: '总人数',
		                       	axisLabel: {
								formatter: '{value} 人'
										}

							}],
							series: [{
								name: '健身产业',
								type: 'bar',
								label: labelOption,
								data: [111, 222,333, 444, 555,666, 777, 888, 234,345, 743, 342]
							}, {
								name: '冰雪产业',
								type: 'bar',
								label: labelOption,
                                data: [111, 422,133, 244, 655,366,277,688, 234,345, 743, 342]
							},{
								name: '体育产业',
								type: 'bar',
								barGap: 0,
								label: labelOption,
                                data: [711,422,533,244, 155,266, 777, 688, 234,345, 343 ,842]
							},]
						};
						// 使用刚指定的配置项和数据显示图表。
						/*myChartZhu.clear();*/
						myChartZhu.setOption(Zhu_option);


	
}