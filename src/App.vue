<template>
<v-app dark>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
        <v-list>
            <v-list-tile v-for="(item, i) in items" :key="i" :to="item.link" :value="item.active" class="active"
                       active-class="orange--text">
                <v-list-tile-action class="nesto">
                    <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn icon @click.stop="clipped = !clipped">
            <v-icon>web</v-icon>
        </v-btn>
        <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor:pointer">{{title}}</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

    </v-toolbar>
    <v-content>
        <router-view />

    </v-content>
    <v-footer :fixed="fixed" app>
        <span>&copy; Diplomski 2018</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "cast",
          title: "Live pregled",
          link: "/"
        },
        {
          icon: "table_chart",
          title: "Pregled podataka",
          link: "/datatable"
        },
        {
          icon: "delete_outline",
          title: "Nesukladni",
          link: "/dopunska"
        },
        {
          icon: "bar_chart",
          title: "Dijagrami",
          link: "/dashboard"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Sljedovanje proizvodnje "
    };
  },
  computed: {},
  name: "App"
};
</script>

<style scoped>
</style>
