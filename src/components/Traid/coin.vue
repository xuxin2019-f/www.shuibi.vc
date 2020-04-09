<template>
  <div>
      <span>币币交易</span>
       <el-card>
            <div id="main" style="width:750px;height:400px;"></div>
        </el-card>
  </div>
</template>

<script>
//导入echarts
import echarts from 'echarts'
import _ from 'lodash'
export default {
  data(){
    return{
      // 横坐标时间
      time:[
        '12.21',
        '12.22',
        '12.23',
        '12.24'
      ],
      btcusdt:[],
      option: {
       backgroundColor: '#21202D',
       legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
        inactiveColor: '#777',
        textStyle: {
            color: '#fff'
        }
        },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false,
            type: 'cross',
            lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1
            }
        }
    },
    xAxis: {
        type: 'category',
        data: this.time,
        axisLine: { lineStyle: { color: '#8392A5' } }
    },
    yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: '#8392A5' } },
        splitLine: { show: false }
    },
    grid: {
        bottom: 80
    },
    dataZoom: [{
        textStyle: {
            color: '#8392A5'
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        dataBackground: {
            areaStyle: {
                color: '#8392A5'
            },
            lineStyle: {
                opacity: 0.8,
                color: '#8392A5'
            }
        },
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }, {
        type: 'inside'
    }],
    animation: false,
    series: [
        {
            type: 'candlestick',
            name: '日K',
            data: [],
            itemStyle: {
                color: '#FD1050',
                color0: '#0CF49B',
                borderColor: '#FD1050',
                borderColor0: '#0CF49B'
            }
        },
        {
            name: 'MA5',
            type: 'line',
            data: this.calculateMA(5, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 1
            }
        },
        {
            name: 'MA10',
            type: 'line',
            data: this.calculateMA(10, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 1
            }
        },
        {
            name: 'MA20',
            type: 'line',
            data: this.calculateMA(20, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 1
            }
        },
        {
            name: 'MA30',
            type: 'line',
            data: this.calculateMA(30, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 1
            }
        }
    ]
}
    }
  },
  async mounted(){
    console.log(this.data)
    var myChart = echarts.init(document.getElementById('main'))
    let {btcusdt} = await this.$http.get('/k')
    // const result = _.merge(btcusdt[0],this.option)
    this.data = btcusdt.map((item)=>{
        return [+item[1], +item[2], +item[5], +item[6]]
      })

    myChart.setOption(this.option)
    console.log(btcusdt)
  },
  methods:{
   calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}
  },
  computed:{
    // data(){
    //   // let {btcusdt} = await this.$http.get('/k')
    //   return this.btcusdt.map((item)=>{
    //     return [+item[1], +item[2], +item[5], +item[6]]
    //   })
    // }
  }
}
</script>

<style scoped>
  span{
      color: white;
  }
</style>