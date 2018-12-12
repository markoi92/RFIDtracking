<template>
<v-card>
    <v-card-title>
        Tablica podataka
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="lists" :search="search" item-key="tag_id">
        <template slot="items" slot-scope="props">
            <tr @click="specificUser(props.item.tag, props.expanded = !props.expanded)">
                <td>{{ props.item.tag_id }}</td>
                <td class="text-xs-left">{{ props.item.tag }}</td>
               
            </tr>
        </template>
        <template slot="expand" slot-scope="props">
            <v-card flat>
                <!-- <div v-for="data in lists" :key="data.id">
                    <div v-if="data.broj_taga == brojTaga"> -->
                <!-- <v-card-text>Tag <span class="expand-text">{{data.broj_taga}}</span> se pojavio na mjestu <span class="expand-text">{{data.mjesto}}</span> na datum <span class="expand-text">17.09.2018 16:00</span></v-card-text> -->
                <template >
                    <v-container fluid grid-list-md class="primary">
                        <v-data-iterator :items="arrayOdabranihTagova" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
                            <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
                                <v-card>
                                    <v-card-title>
                                        <h4>Tag broj: <span  class="expand-text">{{ brojTaga }}</span></h4>
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-list dense>
                                        <v-list-tile>
                                            <v-list-tile-content>Datum ulaska:</v-list-tile-content>
                                            <v-list-tile-content class="align-end">{{ props.item.date_in }}</v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile>
                                            <v-list-tile-content>Datum izlaska:</v-list-tile-content>
                                            <v-list-tile-content class="align-end">{{ props.item.date_out }}</v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile>
                                            <v-list-tile-content>Mjesto:</v-list-tile-content>
                                            <v-list-tile-content class="align-end">{{ props.item.location_name }}</v-list-tile-content>
                                        </v-list-tile>
                                        
                                    </v-list>
                                </v-card>
                            </v-flex>
                        </v-data-iterator>
                    </v-container>
                </template>

                <!-- </div>
                </div> -->
            </v-card>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
        </v-alert>
    </v-data-table>
</v-card>
</template>


<script>
export default {
  data() {
    return {
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      arrayOdabranihTagova: [],
      brojTaga: "",
      lists: [],
      search: "",
      headers: [
        {
          text: "Tag ID",
          align: "left",
          sortable: true,
          value: "tag_id"
        },
        {
          text: "Broj taga",
          value: "tag"
        }
      ]
    };
  },
  methods: {
    fetchEventsList: function() {
      this.$http.get("http://localhost:2004/v1/tags").then(function(data) {
        this.lists = data.body;
      });
    },
    dohvatiUnutarnji() {
      var a = [];
      this.lists.forEach(function(element) {
        for (var property in element) {
          a = element[property];
          /* console.log(JSON.stringify(a)); */
        }
      });
      /* a.forEach(function(element2) {
               for (var property2 in element2) {
              console.log(JSON.stringify(a));
              }
            }); */
      this.arrayOdabranihTagova = a;
    },
    specificUser(brojTaga) {
      var list = [];
      this.brojTaga = brojTaga;
      /*  console.log(brojTaga); */
      for (var property in this.lists) {
        /* console.log(JSON.stringify(this.lists[property].tag)); */
        if (this.lists[property].tag == brojTaga) {
          /* console.log(JSON.stringify(this.lists[property].tag_infos)); */

          /* list.push(this.lists[property]); */
          this.arrayOdabranihTagova = this.lists[property].tag_infos;
          /*           console.log(JSON.stringify(this.arrayOdabranihTagova));
 */
        }
      }
    }
  },
  created() {
    this.fetchEventsList();
    this.dohvatiUnutarnji();
  }
};
</script>

<style scoped>
.expand-text {
  color: orange !important;
  font-size: 18px;
  margin: 0 5px 0 5px;
  font-weight: 400;
}
</style>
