<template>
<v-container fluid>
    <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
            <img src="https://image.ibb.co/iMa3Ff/download.png" alt="Vuetify.js" class="mb-5 xs-12">

            <!-- <div v-for="event in lists" :key="event.id">
                <div v-if="event.mjesto == '2'">
                    <h4>Mjesto: {{event.mjesto}}</h4>
                    <h6>{{event.broj_taga}}</h6>
                </div>
            </div> -->

            <v-container fluid grid-list-xl>
                <v-layout row wrap justify-space-around>
                    <v-flex md3 xs12>
                        <v-card color="blue-grey darken-1" class="white--text">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Stroj 1</div>
                                    <div class="text-xs-center" v-for="event in odvojiJedan()" :key="event.location_id">
                                        <div v-if="event.location_id == 0 ">
                                            <p class="broj-taga">{{event.tags}}</p>
                                        </div>
                                    </div>

                                    <div class="text-xs-center">
                                        <v-btn flat dark @click="dialog1 = true, specificUser('Stroj 1')">
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex md3 xs12>
                        <v-card color="blue-grey darken-2">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Stroj 2</div>
                                    <div class="text-xs-center" v-for="event2 in odvojiDva()" :key="event2.location_id">
                                        <div v-if="event2.location_id == 1">
                                            <p class="broj-taga">{{event2.tags}}</p>
                                        </div>
                                    </div>

                                    <div class="text-xs-center">
                                        <v-btn flat dark @click="dialog2 = true , specificUser('Stroj 2')">
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex md3 xs12>
                        <v-card color="blue-grey darken-3">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Stroj 3</div>
                                    <div class="text-xs-center" v-for="event3 in odvojiTri()" :key="event3.location_id">
                                        <div v-if="event3.location_id == 2">
                                            <p class="broj-taga">{{event3.tags}}</p>
                                        </div>
                                    </div>

                                    <div class="text-xs-center">
                                        <v-btn flat dark @click="dialog3 = true, specificUser('Stroj 3')">
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>

                </v-layout>
                <v-layout row wrap justify-space-around mt-4>
                    <v-flex md3 xs12>
                        <v-card color="red darken-2">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Izlaz</div>
                                    <div class="text-xs-center" v-for="event6 in odvojiIzlaz()" :key="event6.location_id">
                                        <div v-if="event6.location_id == 5">
                                            <p class="broj-taga">{{event6.tags}}</p>
                                        </div>
                                    </div>

                                    <div class="text-xs-center">
                                        <v-btn flat dark @click="dialog6 = true, specificUser('Skladište izlaz')">
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex md6 xs12>
                        <v-card color="grey darken-4">

                            <v-card-title primary-title class="text-xs-right">
                                <v-progress-linear :indeterminate="true"></v-progress-linear>
                                <v-flex xs12 sm12 md12>
                                    <div class="text-xs-center mb-3 display-3 font-weight-black text">FSR <span class="font-weight-thin display-2 font-condensed ">live app</span></div>

                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex md3 xs12>
                        <v-card color="red darken-4">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Kontrola</div>
                                    <div class="text-xs-center" v-for="event4 in odvojiKontrola()" :key="event4.location_id">
                                        <div v-if="event4.location_id == 3">
                                            <p class="broj-taga">{{event4.tags}}</p>
                                        </div>
                                    </div>

                                    <div class="text-xs-center">
                                        <v-btn flat dark @click="dialog4 = true , specificUser('Kontrola')">
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>

                </v-layout>
                <v-layout row wrap justify-center>

                    <v-flex md3 xs12>
                        <v-card color="red darken-3">
                            <v-card-title primary-title class="text-xs-right">
                                <v-flex xs12 sm12 md12>
                                    <div class="headline text-xs-center mb-3">Skladište</div>
                                    <div class="text-xs-center" v-for="event5 in odvojiSkladiste()" :key="event5.location_id">
                                        <div v-if="event5.location_id == 4">
                                            <p class="broj-taga">{{event5.tags}}</p>
                                        </div>
                                    </div>

                                    <div class="text-xs-center">
                                        <v-btn flat dark @click="dialog5 = true , specificUser('Skladište ulaz')">
                                            <v-icon left>insert_chart_outlined</v-icon>Stats
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-layout>
    </v-slide-y-transition>
    <v-layout row justify-center>
        <v-dialog v-model="dialog1" max-width="290">
            <v-card>
                <v-card-title class="headline">Podaci o tagu: </v-card-title>

                <v-card-text v-for="item in data" :key="item.id">
                    <div>
                        <p>Datum ulaska: <span class= "text-datum">{{item.date_in}}</span></p>
                        <p>Datum izlaska: <span class= "text-datum">{{item.date_out}}</span></p>
                        <!-- <p>Pozicija: <span class= "text-pozicija">{{item.location_name}}</span></p> -->
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="orange" flat="flat" @click="dialog1 = false">
                        Zatvori
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
    <v-layout row justify-center>
        <v-dialog v-model="dialog2" max-width="290">
            <v-card>
                <v-card-title class="headline">Podaci o tagu: </v-card-title>

                <v-card-text v-for="item in data" :key="item.id">
                    <div>
                        <p>Datum ulaska: <span class= "text-datum">{{item.date_in}}</span></p>
                        <p>Datum izlaska: <span class= "text-datum">{{item.date_out}}</span></p>
                        <p>Pozicija: <span class= "text-pozicija">{{item.location_name}}</span></p>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="orange" flat="flat" @click="dialog2 = false">
                        Zatvori
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
    <v-layout row justify-center>
        <v-dialog v-model="dialog3" max-width="290">
            <v-card>
                <v-card-title class="headline">Podaci o tagu: </v-card-title>

                <v-card-text v-for="item in data" :key="item.id">
                    <div>
                        <p>Datum ulaska: <span class= "text-datum">{{item.date_in}}</span></p>
                        <p>Datum izlaska: <span class= "text-datum">{{item.date_out}}</span></p>
                        <p>Pozicija: <span class= "text-pozicija">{{item.location_name}}</span></p>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="orange" flat="flat" @click="dialog3 = false">
                        Zatvori
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
    <v-layout row justify-center>
        <v-dialog v-model="dialog4" max-width="290">
            <v-card>
                <v-card-title class="headline">Podaci o tagu: </v-card-title>

                <v-card-text v-for="item in data" :key="item.id">
                    <div>
                        <p>Datum ulaska: <span class= "text-datum">{{item.date_in}}</span></p>
                        <p>Datum izlaska: <span class= "text-datum">{{item.date_out}}</span></p>
                        <p>Pozicija: <span class= "text-pozicija">{{item.location_name}}</span></p>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="orange" flat="flat" @click="dialog4 = false">
                        Zatvori
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
    <v-layout row justify-center>
        <v-dialog v-model="dialog5" max-width="290">
            <v-card>
                <v-card-title class="headline">Podaci o tagu: </v-card-title>

                <v-card-text v-for="item in data" :key="item.id">
                    <div>
                        <p>Datum ulaska: <span class= "text-datum">{{item.date_in}}</span></p>
                        <p>Datum izlaska: <span class= "text-datum">{{item.date_out}}</span></p>
                        <p>Pozicija: <span class= "text-pozicija">{{item.location_name}}</span></p>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="orange" flat="flat" @click="dialog5 = false">
                        Zatvori
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
    <v-layout row justify-center>
        <v-dialog v-model="dialog6" max-width="290">
            <v-card>
                <v-card-title class="headline">Podaci o tagu: </v-card-title>

                <v-card-text v-for="item in data" :key="item.id">
                    <div>
                        <p>Datum ulaska: <span class= "text-datum">{{item.date_in}}</span></p>
                        <p>Pozicija: <span class= "text-pozicija">{{item.location_name}}</span></p>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="orange" flat="flat" @click="dialog6= false">
                        Zatvori
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
    <div>
        <!--   <div>{{odvojiJedan()}}</div> -->
    </div>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            lists: [],
            array: [],
            array2: [],
            data: [],
            dialog1: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            dialog5: false,
            dialog6: false,
            pomocna1: ''
        };
    },
    computed: {},
    methods: {
        
        fetchEventsList: function () {
            this.$http.get("http://localhost:2004/v1/tags").then(function (data) {
                this.lists = data.body;

            });
            /* setTimeout(this.fetchEventsList, 1000); */

        },
        specificUser(brojTaga) {
            var list = [];
            var object = {};
            var array = [];
            var pomocna0 = [];
            var pomocna1 = 0;
            var pomocna2;
            var pomocna3;
            var pomocna4;

            /*  this.brojTaga = brojTaga; */
            /*  console.log(brojTaga); */
            for (var property in this.lists) {
                list = this.lists[property].tag_infos;
                /*   console.log(this.list) */
            }
            for (var property in list) {
                //console.log(JSON.stringify(list[property]))
                if (list[property].location_name == brojTaga) {
                    pomocna0.push(list[property]);
                    for (let i = 0; i < pomocna0.length; i++) {
                        pomocna3 = pomocna0[i].tag_location_id
                        //console.log(JSON.stringify(list[property]))
                        if (pomocna3 > pomocna1) {
                            pomocna2 = pomocna3;
                            pomocna1 = pomocna2;

                        }

                    }
                    pomocna4 = pomocna1

                    //console.log(JSON.stringify(list[property]))
                    //}

                }
               
                /* if (list[property].tag_location_id ) {
                            object = {
                                date_in: list[property].date_in,
                                date_out: list[property].date_out,
                                location_name: list[property].location_name
                            };
                        } */

            }
            for (var property in list){
                if (list[property].tag_location_id == pomocna4){
                   // console.log(JSON.stringify(list[property]))
                    object = {
                                date_in: list[property].date_in,
                                date_out: list[property].date_out,
                                location_name: list[property].location_name
                            };
                }
            }
            //console.log(JSON.stringify(pomocna4))
            /* pomocna1.push(list[property]); */
            //console.log(JSON.stringify(pomocna0))
            array.push(object);
            this.data = array;

        },
        odvojiJedan() {
            var niz;
            var niz2 = [];
            var temp = this.array;
            for (let property in temp) {

                if (temp[property].location_name = 'Stroj 1' && temp[property].location_id == 0) {
                    niz = temp[property];

                }
            }
            niz2.push(niz);
            return niz2;
            /* console.log(JSON.stringify(niz2 )) */
        },
        odvojiDva() {
            var niz;
            var niz2 = [];
            var temp = this.array;
            for (let property in temp) {

                if (temp[property].location_name = 'Stroj 2' && temp[property].location_id == 1) {
                    niz = temp[property];

                }
            }
            niz2.push(niz);
            return niz2;
            /* console.log(JSON.stringify(niz2 )) */
        },
        odvojiTri() {
            var niz;
            var niz2 = [];
            var temp = this.array;
            for (let property in temp) {

                if (temp[property].location_name = 'Stroj 3' && temp[property].location_id == 2) {
                    niz = temp[property];

                }
            }
            niz2.push(niz);
            return niz2;
            /* console.log(JSON.stringify(niz2 )) */
        },
        odvojiKontrola() {
            var niz;
            var niz2 = [];
            var temp = this.array;
            for (let property in temp) {

                if (temp[property].location_name = 'Kontrola' && temp[property].location_id == 3) {
                    niz = temp[property];

                }
            }
            niz2.push(niz);
            return niz2;
            /* console.log(JSON.stringify(niz2 )) */
        },
        odvojiSkladiste() {
            var niz;
            var niz2 = [];
            var temp = this.array;
            for (let property in temp) {

                if (temp[property].location_name = 'Skladiste ulaz' && temp[property].location_id == 4) {
                    niz = temp[property];

                }
            }
            niz2.push(niz);
            return niz2;
            /* console.log(JSON.stringify(niz2 )) */
        },
        odvojiIzlaz() {
            var niz;
            var niz2 = [];
            var temp = this.array;
            for (let property in temp) {

                if (temp[property].location_name = 'Skladiste izlaz' && temp[property].location_id == 5) {
                    niz = temp[property];

                }
            }
            niz2.push(niz);
            return niz2;
            /* console.log(JSON.stringify(niz2 )) */
        }
    },
    created() {
        this.fetchEventsList();
        this.$options.sockets.onmessage = data =>
            (this.array = JSON.parse(data.data));
        /*           console.log(JSON.stringify(data.data) );
         */

    }
};
</script>

<style scoped>
.text-datum,
.text-pozicija {
    color: orange !important;
    font-size: 20px;
    margin: 0 10px 0 5px;
    font-weight: 400;
    display: block;
}

.broj-taga {
    font-size: 22px;
    border: 2px solid #ffffffb9;
    border-radius: 5px;
    font-weight: 400;
    min-height: 38px;
}
</style>
