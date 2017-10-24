function peiChart() {
	//饼图
    gvChartInit();
	$(document).ready(function() {
		$('#tb').gvChart({
			chartType: 'PieChart',
			gvSettings: {
				vAxis: {
					title: 'No of players'
				},
				hAxis: {
					title: 'Month'
				},
				width: 375,
				height: 350,
			}
		});
	});


}