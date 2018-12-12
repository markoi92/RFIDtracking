<template>
<v-container fluid>
    <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
            <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">

            <!--   <div v-for="event in lists" :key="event.id">
                <div v-if="event.mjesto == '2'">
                    <h4>Mjesto: {{event.mjesto}}</h4>
                    <h6>{{event.broj_taga}}</h6>
                </div>
            </div> -->

            <v-container fluid grid-list-xl>
                <v-layout row justify-space-around>
                    <v-flex xs3>
                        <v-card color="blue-grey darken-1" class="white--text">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Stroj 1</div>
                                    <div class="text-xs-center" v-for="event in lists" :key="event.id">
                                        <div v-if="event.id == brojPosljednjegId && brojPosljednjegMjesta == 1 && event.id == lists.length">
                                            <p class="broj-taga">{{event.broj_taga}}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-xs-center" v-for="bazza in lists" :key="bazza.id">
                                            <div v-if="bazza.mjesto == 1 && bazza.id > brojPosljednjegId -10">
                                                <div v-if="bazza.id != brojPosljednjegId">
                                                    <p class="">{{bazza.broj_taga}}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-xs-center">
                                        <v-btn flat dark>
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs3>
                        <v-card color="blue-grey darken-2">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Stroj 2</div>
                                    <div class="text-xs-center" v-for="event2 in lists" :key="event2.id">
                                        <div v-if="event2.id == brojPosljednjegId && brojPosljednjegMjesta == 2 && event2.id == lists.length">
                                            <p class="broj-taga">{{event2.broj_taga}}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-xs-center" v-for="bazza2 in lists" :key="bazza2.id">
                                            <div v-if="bazza2.mjesto == 2 && bazza2.id > brojPosljednjegId -10">
                                                <div v-if="bazza2.id != brojPosljednjegId">
                                                    <p class="">{{bazza2.broj_taga}}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-xs-center">
                                        <v-btn flat dark>
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs3>
                        <v-card color="blue-grey darken-3">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Stroj 3</div>
                                    <div class="text-xs-center" v-for="event3 in lists" :key="event3.id">
                                        <div v-if="event3.id == brojPosljednjegId && brojPosljednjegMjesta == 3 && event3.id == lists.length">
                                            <p class="broj-taga">{{event3.broj_taga}}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-xs-center" v-for="bazza3 in lists" :key="bazza3.id">
                                            <div v-if="bazza3.mjesto == 3 && bazza3.id > brojPosljednjegId -10">
                                                <div v-if="bazza3.id != brojPosljednjegId">
                                                    <p class="">{{bazza3.broj_taga}}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-xs-center">
                                        <v-btn flat dark>
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

            <line-chart :data="chartData"></line-chart>
            <!--             <p v-for="neko in zbrojiTagove" :key="neko.id">{{neko.mjesto}}</p>
 -->

            <p>{{zbrojiTagove1()}}</p>
            <p>{{zbrojiTagove2()}}</p>
            <p>{{zbrojiTagove3()}}</p>
            <!-- <p>{{urediId()}}</p> -->

        </v-layout>
    </v-slide-y-transition>
</v-container>
</template>

  

<script>
export default {
  data() {
    return {
      temp: [],
      tempBrojTaga: [],
      message: "Zabranjeno",
      brojPosljednjegTaga: [],
      brojPosljednjegMjesta: [],
      brojPosljednjegId: [],
      zadnjeId1: [],
      zadnjiTag1: [],
      zadnjeId2: [],
      zadnjiTag2: [],
      zadnjeId3: [],
      zadnjiTag3: [],
      lists: [],
      apiData: [],
      timer: "",
      chartData: [
        {
          name: "Workout",
          data: {
            "2017-01-01": 3,
            "2017-01-02": 4,
            "2017-01-03": 7,
            "2017-01-04": 4
          }
        },
        {
          name: "Call parents",
          data: {
            "2017-01-01": 5,
            "2017-01-02": 3,
            "2017-01-03": 4,
            "2017-01-04": 9
          }
        },
        {
          name: "svega",
          data: {
            "2017-01-01": 5,
            "2017-01-02": 1,
            "2017-01-03": 12,
            "2017-01-04": 3
          }
        }
      ]
    };
  },
  created() {
    this.fetchEventsList();
    /*  this.zbrojiTagove(); */
    /*     this.timer = setInterval(this.fetchEventsList, 1000);
         */
  },
  methods: {
    fetchEventsList: function() {
      this.$http.get("http://localhost/fetch/data.php").then(function(data) {
        this.lists = data.body;
      });
      setTimeout(this.fetchEventsList, 1000);
    },
    zbrojiTagove1() {
      var array = [];
      var brojTaga = [];
      var arrayTagova = [];
      var arrayMjesta = [];
      var arrayId = [];
      this.lists.forEach(function(element) {
        for (var property1 in element) {
          if (element.mjesto == "1") {
            array = element.id;
            brojTaga = element.broj_taga;
          }
          arrayTagova = element.broj_taga;
          arrayMjesta = element.mjesto;
          arrayId = element.id;
        }
      });
      /* console.log(array); */
      this.zadnjeId1 = array;
      this.zadnjiTag1 = brojTaga;
      this.brojPosljednjegTaga = arrayTagova;
      this.brojPosljednjegMjesta = arrayMjesta;
      this.brojPosljednjegId = arrayId;
      setTimeout(this.zbrojiTagove1, 1000);
    },
    zbrojiTagove2() {
      var array = [];
      var brojTaga = [];

      this.lists.forEach(function(element) {
        for (var property1 in element) {
          if (element.mjesto == "2") {
            array = element.id;
            brojTaga = element.broj_taga;
          }
          /*  arrayTagova = element.broj_taga; */
        }
      });
      /* console.log(array); */
      this.zadnjeId2 = array;
      this.zadnjiTag2 = brojTaga;

      setTimeout(this.zbrojiTagove2, 1000);
    },
    zbrojiTagove3() {
      var array = [];
      var brojTaga = [];
      this.lists.forEach(function(element) {
        for (var property1 in element) {
          if (element.mjesto == "3") {
            array = element.id;
            brojTaga = element.broj_taga;
          }
          /* arrayTagova = element.broj_taga; */
        }
      });
      /* console.log(array); */
      this.zadnjeId3 = array;
      this.zadnjiTag3 = brojTaga;
      setTimeout(this.zbrojiTagove3, 1000);
    },
    urediId1() {
      if (this.brojPosljednjegId && this.brojPosljednjegMjesta == 1) {
        return this.brojPosljednjegTaga;
      }

      setTimeout(this.urediId1, 1000);
    },
    urediId2() {
      if (this.brojPosljednjegId && this.brojPosljednjegMjesta == 2) {
        return this.brojPosljednjegTaga;
      }
      setTimeout(this.urediId2, 1000);
    },
    urediId3() {
      if (this.brojPosljednjegId && this.brojPosljednjegMjesta == 3) {
        return this.brojPosljednjegTaga;
      }
      setTimeout(this.urediId3, 1000);
    }
  },
  computed: {}
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.broj-taga {
  border: 2px solid #c9c9c9;
  border-radius: 4px;
  padding: 10px;
  font-size: 20px;
  color: #edf0f3;
}
</style>
