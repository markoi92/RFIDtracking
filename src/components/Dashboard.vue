<template>
<v-container fluid>
    <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
             <img src="https://image.ibb.co/iMa3Ff/download.png" alt="Vuetify.js" class="mb-5">
            <v-layout align-center justify-center row>
                <v-card-title primary-title class="text-xs-center">
                    <h2>Količina po datumu</h2>
                </v-card-title>
            </v-layout>
            <area-chart :data=" izdvojiTagove222()[0]" :discrete="true" :legend="true" :library="{backgroundColor:'rgba(255, 255, 255, 0.0)'}" :download="true"></area-chart>
            <!-- <area-chart :data="izdvojiTagove()[0]"></area-chart> -->
            <!-- <area-chart :data="ponovoTagovi()"></area-chart> -->
            <!-- <pie-chart :data="izdvojiTagove()[1]" donut="true" :library="{borderColor:'rgba(255, 255, 255)'} " :dataset="{borderColor: '#666'}"></pie-chart>
            <column-chart :data="izdvojiTagove()[1]"></column-chart> -->
            <v-container fluid grid-list-xl>
                <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm6>
                        <v-layout align-center justify-center row>
                            <v-card-title primary-title class="text-xs-center">
                                <h2>Količina po mjestu</h2>
                            </v-card-title>
                        </v-layout>
                        <column-chart :data="izdvojiTagove()[1]"></column-chart>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-layout align-center justify-center row>
                            <v-card-title primary-title class="text-xs-center">
                                <h2>Pie chart po mjestu</h2>
                            </v-card-title>
                        </v-layout>
                        <pie-chart :data="izdvojiTagove()[1]" donut="true" :library="{borderColor:'rgba(255, 255, 255)'} " :dataset="{borderColor: '#666'}"></pie-chart>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-layout align-center justify-center row>
                <v-card-title primary-title class="text-xs-center">
                    <h2>Testni line chart</h2>
                </v-card-title>
            </v-layout>
            <line-chart :data="data" :discrete="true" :legend="true" :library="{backgroundColor:'rgba(255, 255, 255, 0.0)'}" :download="true"></line-chart>
        </v-layout>
    </v-slide-y-transition>
</v-container>
</template>

  

<script>
export default {
  data() {
    return {
      lists: [],
      data: [
        {
          name: "Mjesto 1",
          data: {
            "2018-10-01": 3,
            "2018-10-02": 4,
            "2018-10-03": 3,
            "2018-10-04": 7,
            "2018-10-05": 5,
            "2018-10-06": 9
          }
        },
        {
          name: "Mjesto 2",
          data: {
            "2018-10-01": 5,
            "2018-10-02": 1,
            "2018-10-03": 8,
            "2018-10-04": 4,
            "2018-10-05": 13,
            "2018-10-06": 4
          }
        },
        {
          name: "Mjesto 3",
          data: {
            "2018-10-01": 7,
            "2018-10-02": 7,
            "2018-10-03": 2,
            "2018-10-04": 6,
            "2018-10-05": 11,
            "2018-10-06": 5
          }
        },
        {
          name: "Mjesto 4",
          data: {
            "2018-10-01": 5,
            "2018-10-02": 3,
            "2018-10-03": 3,
            "2018-10-04": 9,
            "2018-10-05": 13,
            "2018-10-06": 1
          }
        }
      ],
      listChart: []
    };
  },
  created() {
    this.fetchEventsList();
    /* this.izdvojiTagove(); */
  },
  methods: {
    fetchEventsList: function() {
      this.$http.get("http://localhost:2004/v1/tags").then(function(data) {
        this.lists = data.body;
      });
    },
    ponovoTagovi() {
      var temp1;
      for (var property in this.lists) {
        temp1 = this.lists[property].tag_infos;
        console.log(JSON.stringify(temp1));
      }
    },

    izdvojiTagove() {
      var objects = {};
      var objects2 = {};
      var list = [];
      var list2 = [];
      var temp1 = [];
      var arrayTagova1 = [];
      var arrayTagova2 = [];
      var arrayTagova3 = [];
      var arrayTagova4 = [];
      var broj1;
      var broj2;
      var broj3;
      var broj4;
      for (var i = 0; i < this.lists.length; i++) {
        for (var property in this.lists) {
          temp1.push(this.lists[property].tag_infos);
        }
        for (var property in temp1[i]) {
          if (temp1[i][property].location_name == "Stroj 1") {
            arrayTagova1.push(temp1[i][property].location_name);
            broj1 = arrayTagova1.length;
          }
          if (temp1[i][property].location_name == "Stroj 2") {
            arrayTagova2.push(temp1[i][property].location_name);
            broj2 = arrayTagova2.length;
          }
          if (temp1[i][property].location_name == "Stroj 3") {
            arrayTagova3.push(temp1[i][property].location_name);
            broj3 = arrayTagova3.length;
          }
          if (temp1[i][property].location_name == "Kontrola") {
            arrayTagova4.push(temp1[i][property].location_name);
            broj4 = arrayTagova4.length;
          }
        }
        /*  console.log(broj1); */
      }
      objects = {
        name: "broj po mjestima",
        data: {
          "Mjesto 1": broj1,
          "Mjesto 2": broj2,
          "Mjesto 3": broj3,
          "Mjesto 4": broj4
        }
      };
      objects2 = {
        "Mjesto 1": broj1,
        "Mjesto 2": broj2,
        "Mjesto 3": broj3,
        "Mjesto 4": broj4
      };
      list.push(objects);
      list2.push(list);
      list2.push(objects2);
      return list2;
    },
    izdvojiTagove222() {
      var temp1 = [];
      var temp2;
      var temp3 = [];
      for (var i = 0; i < this.lists.length; i++) {
        for (var property in this.lists) {
          temp1.push(this.lists[property].tag_infos);
        }
        for (var property in temp1[i]) {
          temp2 = temp1[i][property].date_in;
          temp3.push(temp2.slice(0, 10));
        }
      }
      /* console.log(JSON.stringify(temp3)); */
      temp3.sort();
      var objects = {};
      var objects2 = {};
      var data;
      var list = [];
      var list2 = [];

      var current = null;
      var cnt = 0;
      for (var i = 0; i <= temp3.length; i++) {
        if (temp3[i] != current) {
          if (cnt > 0) {
            objects[current] = cnt;
            data = objects;
          }
          current = temp3[i];
          cnt = 1;
        } else {
          cnt++;
        }
      }
      objects2 = {
        name: "broj po datumu",
        data
      };
      list.push(objects2);
      list2.push(list);

      return list2;
    }
  },
  computed: {}
};
</script>

<style scoped>
.highcharts-background {
  color: black !important;
  background-color: black !important;
  fill: blue !important;
}
</style>
