<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-avatar :tile="false">
        <img :src="require('@/assets/logo.png')" alt="logo" />
      </v-avatar>
      <v-toolbar-title>Ob-Havo ma'lumotlari</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <span
        ><v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn class="my-2" color="white" text rounded dark v-on="on"
                >Aloqa</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span><v-icon>phone</v-icon></span>
                <span class="headline"
                  > Bog'lanish  +99 8<b>97 515 05 10</b></span
                >
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Ismingiz*" required></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Familiyangiz*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Elektron manzilingiz*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        outlined
                        name="input-7-4"
                        label="Murojaatingiz*"
                        required
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*ushbu satrlar to'ldirilishi shart</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text rounded @click="dialog = false"
                  >Bekor qilish</v-btn
                >
                <v-btn color="success" text rounded @click="dialog = true"
                  >Yuborish</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row></span
      >
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="primary" padless>
      <v-layout justify-center wrap>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>915-18 Jalol Saidov</strong>
        </v-col>
      </v-layout>
    </v-footer>
  </v-app>
</template>
<style>
#nprogress .bar {
  background: red;
}
</style>
<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    links: [
      {
        label: "Bosh sahifa",
        url: "/"
      },
      {
        label: "Xiva",
        url: "/khiva"
      },
      {
        label: "Urganch",
        url: "/urgench"
      },
      {
        label: "Toshkent",
        url: "/tashkent"
      },
      {
        label: "Documentation",
        url: "/about"
      },
      {
        label: "Kirish",
        url: "/login"
      }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>
