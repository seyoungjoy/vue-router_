<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile router :to="{name:'home'}" exact>
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="{name:'about-name'}" exact>
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-list-tile router :to="{name:'users',}" exact>
              <v-list-tile-action>
                  <i class="fas fa-user"></i>
              </v-list-tile-action>
              <v-list-tile-content>
                  <v-list-tile-title>User</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="$router.push({
          name:'test',


          })">
              <v-list-tile-action>
                  <i class="fas fa-user"></i>
              </v-list-tile-action>
              <v-list-tile-content>
                    <v-list-tile-title>
                        Test
                    </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
<!--        라우터에 내보낼 컴포넌트들을 지정한 후 그걸 어디에 뿌려줄지 설정을 해야한다. -->
        <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
    methods:{

    }
}
</script>