/* eslint-disable */
<template>
  <v-app class="background">
    <v-container>
      <v-row>
        <v-col cols="2">
          <h1>Dashboard</h1>

          <DateRange
            @input="onDateRangeChange"
            :options="dateRangeOptions"/>

              <!-- <date-range-picker
            ref="picker"
            :opens="opens"
            :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY HH:mm:ss' }"
            :minDate="minDate" :maxDate="maxDate"
            :singleDatePicker="singleDatePicker"
            :timePicker="timePicker"
            :timePicker24Hour="timePicker24Hour"
            :showWeekNumbers="showWeekNumbers"
            :showDropdowns="showDropdowns"
            :autoApply="autoApply"
            v-model="dateRange"
            @update="updateValues"
            @toggle="checkOpen"
            :linkedCalendars="linkedCalendars"
            :dateFormat="dateFormat"
    >
        <template v-slot:input="picker" style="min-width: 350px;">
            {{ picker.startDate | date }} - {{ picker.endDate | date }}
        </template>
    </date-range-picker> -->
            <!-- <v-daterange :options="dateRangeOptions" @input="onDateRangeChange"></v-daterange> -->
        </v-col>
        <v-col offset-md="4">
           <date-range-picker
    v-model="dateRange"
    :date-format="dateFormat"
    style="min-width: 500px;"
  ></date-range-picker>
          <!-- <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRangeText"
              outlined
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              :value="itEnds"
               @change="dates(val)"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            range
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu> -->
        </v-col>
      </v-row>
    </v-container>

    <v-container  style="top: 174px;
      left: 96px;
      width: 1152px;
      height: 48px;
      background: #37B04C 0% 0% no-repeat padding-box;
      border-radius: 2px;
      opacity: 1;">
      <v-row>
        <v-col cols="9">
          <a style="top: 186px;
          left: 112px;
          width: 158px;
          height: 25px;
          text-align: left;
          font: normal normal 600 20px/13px Source Sans Pro;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;">MARKET INSIGHTS</a>
        </v-col>
        <!-- <v-col cols="auto">Click Here for Help</v-col> -->
        <v-col cols="auto">Click Here for Help</v-col>
        <v-col >
          <v-btn icon v-if="data === false" @click='open()'>
            <img src="../../assets/chevron-down.svg" >
          </v-btn>
          <v-btn icon v-else-if="data === true" @click='close()'>
            <img src="../../assets/chevron-up.svg" >
            </v-btn>
        </v-col>
      </v-row>

    </v-container>

    <v-container v-show="data">
      <v-card col="12" style="margin-left: 6px; width: 400px;" class="cardDokter text-xs-center" elevation="4">
              <v-responsive class="text-center">
                <v-row style="height: 60px">
                  <v-col cols="4">
                    <p>Sales Turnover</p>
                  </v-col>
                  <v-col offset-md="8">
                    <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn dark icon v-bind="attrs" v-on="on">
                          <v-icon style="color: #88879c"
                            >mdi-dots-vertical</v-icon
                          >
                        </v-btn>
                      </template>
                    </v-menu>
                  </v-col>
                </v-row>

              </v-responsive>
              <v-card-text>
                <v-row>
                  <v-col cols="8" style="min-padding-top: 10px;">
                    <h1>Rp 3,600,000</h1>
                    <p style="padding-top: 5px;"><span style="color: red">13.8%</span> last period in production sold</p>
                  </v-col>
                  <v-col cols="2" style="padding-top: 0px;">
                    <img src="../../assets/Sales Turnover.svg" style="width:80px; height: 100px;">
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
    </v-container>

    <v-container v-show="data">
      <v-row>
        <v-col>
          <v-card>
            <v-responsive class="text-center">
              <v-row>
              <v-col cols="7">
                <p>AVERAGE PURCHASE VALUE</p>
              </v-col>
              <v-col offset-md="3">
                 <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn dark icon v-bind="attrs" v-on="on">
                          <v-icon style="color: #88879c"
                            >mdi-dots-vertical</v-icon
                          >
                        </v-btn>
                      </template>
                    </v-menu>
              </v-col>
            </v-row>
            </v-responsive>
            <v-card-text>
              <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-card>
            <v-responsive class="text-center">
              <v-row>
              <v-col cols="6">
                <p>Best Selling SKU</p>
              </v-col>
              <v-col offset-md="3">
                 <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn dark icon v-bind="attrs" v-on="on">
                          <v-icon style="color: #88879c"
                            >mdi-dots-vertical</v-icon
                          >
                        </v-btn>
                      </template>
                    </v-menu>
              </v-col>
            </v-row>
            </v-responsive>
            <v-card-text>
              <v-row v-for="(item, i) in BestSelling" :key="i">
                <v-col cols="3">
                   <img src="../../assets/Alain-Ducasse-scaled.jpg" style="width:80px; height: 100px;">
                </v-col>
                <v-col>
                  <p>{{item.item_name}}</p>
                  <v-row>
                    <v-col>
                      <p>Rp. {{item.unit_price}}</p>
                    </v-col>
                     <v-col>
                  <p>{{item.id}}</p>
                </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
         <v-col>
          <v-card>
            <v-responsive class="text-center">
              <v-row>
              <v-col cols="6">
                <p>TOP COMPETITOR SKU</p>
              </v-col>
              <v-col offset-md="3">
                 <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn dark icon v-bind="attrs" v-on="on">
                          <v-icon style="color: #88879c"
                            >mdi-dots-vertical</v-icon
                          >
                        </v-btn>
                      </template>
                    </v-menu>
              </v-col>
            </v-row>
            </v-responsive>
            <v-card-text>
               <v-row v-for="(item, i) in Competitor" :key="i">
                 <v-col cols="3">
                   <img src="../../assets/restaurant-in-valkenswaard.jpg" style="width:80px; height: 100px;">
                </v-col>
                <v-col>
                  <p>{{item.item_name}}</p>
                  <v-row>
                    <v-col>
                      <p>Rp. {{item.unit_price}}</p>
                    </v-col>
                     <v-col>
                  <p>{{item.id}}</p>
                </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { format, subDays } from 'date-fns'
import 'vuetify-daterange-picker/dist/vuetify-daterange-picker.css'
import DateRange from 'vuetify-daterange-picker'
import axios from 'axios'
// import { DateRange } from 'vuetify-daterange-picker'
import DateRangePicker from 'vue2-daterange-picker'

import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
export default {
  name: 'Dashboard',
  components: {
    DateRange,
    DateRangePicker
  },
  data: () => ({
    dateRange: {
      startDate: '2019-12-26',
      endDate: '2019-12-28'
    },
    data: true,
    BestSelling: [],
    Competitor: [],
    dataGrafik: [],
    date: ['2019-09-10', '2019-09-20'],
    menu: false,
    modal: false,
    menu2: false,
    series: [],
    chartOptions: {
      chart: {
        height: 350,
        type: 'line'
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: 'Traffic Sources'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      // labels: [],
      labels: ['2021-03-06', '2021-03-05', '2021-03-04', '2021-03-03', '2021-03-02', '2021-03-01'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog'
        }

      }
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Social Media'
      //   }
      // }
      ]
    },
    range: [],
    dateRangeOptions: {
      startDate: format(subDays(new Date(), 7), 'yyyy-MM-dd'),
      endDate: format(new Date(), 'yyyy-MM-dd'),
      format: 'MM/dd/yyyy',
      presets: [
        {
          label: 'Today',
          range: [
            format(new Date(), 'yyyy-MM-dd'),
            format(new Date(), 'yyyy-MM-dd')
          ]
        },
        {
          label: 'Yesterday',
          range: [
            format(subDays(new Date(), 1), 'yyyy-MM-dd'),
            format(subDays(new Date(), 1), 'yyyy-MM-dd')
          ]
        },
        {
          label: 'Last 30 Days',
          range: [
            format(subDays(new Date(), 30), 'yyyy-MM-dd'),
            format(subDays(new Date(), 1), 'yyyy-MM-dd')
          ]
        }
      ]
    }
  }),
  computed: {
    dateRangeText () {
      return this.date.join(' ~ ')
    },
    dates (val) {
      return console.log(val)
    },
    itEnds () {
      // this.paging.endDate = this.enddate

      return console.log(this.date)
    }
  },
  mounted () {
    axios.get('http://madaws.com/kpk-cafe/public/api/best-sku')
      .then((response) => {
        // console.log(response)
        this.BestSelling = response.data.skuList
        // console.log(this.BestSelling)
      })

    axios.get('http://madaws.com/kpk-cafe/public/api/competitor-sku')
      .then((response) => {
        // console.log(response)
        this.Competitor = response.data.skuList
        // console.log(this.Competitor)
      })

    axios.get('http://madaws.com/kpk-cafe/public/api/revenue-sku')
      .then((response) => {
        // console.log(response)
        this.dataGrafik = response.data.revenueList
        console.log(this.dataGrafik)
        var harga = []
        var tanggal = []
        this.dataGrafik.map((e) => {
          harga.push(e.revenue)
        })
        console.log(harga)
        // this.series.data = harga
        // this.series.data = [2000000, 2150000, 1000000, 2000000, 1250000, 1500000]
        console.log(this.series.data)
        console.log(this.series.data)
        this.dataGrafik.map((e) => {
          tanggal.push(e.date)
        })
        console.log(tanggal)
        this.chartOptions.labels = tanggal
        console.log(this.chartOptions.labels)
        // this.Competitor = response.data.skuList
        // console.log(this.Competitor)
        this.series = [{
          name: 'Website Blog',
          type: 'column',
          data: harga
          // data: [2000000, 2150000, 1000000, 2000000, 1250000, 1500000]
        },
        {
          // name: 'Social Media',
          type: 'line'
          // data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
        ]
      })
  },
  methods: {
    dateFormat (classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date()
      }
      return classes
    },
    onDateRangeChange (range) {
      this.range = range
    },
    open () {
      this.data = true
    },
    close () {
      this.data = false
    }
  }
}
</script>
/* eslint-disable */
