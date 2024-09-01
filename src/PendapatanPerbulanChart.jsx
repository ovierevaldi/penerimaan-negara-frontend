import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function PendapatanPerbulanChart(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    // Define data
    let data = [{
      category: "Januari",
      pajak: 1000,
      pajakdaerah: 588,
      bukanpajak: 1200,
    }, {
      category: "Februari",
      pajak: 1200,
      pajakdaerah: 1800,
      bukanpajak: 1200,
    },
  ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Pajak",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "pajak",
        categoryXField: "category"
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Pajak Daerah",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "pajakdaerah",
        categoryXField: "category"
      })
    );
    series2.data.setAll(data);

    
    let series3 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Bukan Pajak",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "bukanpajak",
        categoryXField: "category"
      })
    );
    series3.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "650px" }}></div>
  );
}
export default PendapatanPerbulanChart;