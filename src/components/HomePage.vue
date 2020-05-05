<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="6">
          <h1 class="display-1 font-weight-thin mb-4">
            Ob-havoni qidiring!
          </h1>
          <v-layout>
            <v-flex xs12 sm12 md12 lg6 offset-lg3 offset-md1>
              <v-text-field
                solo
                label="Qidirish uchun shu yerga yozing..."
                v-model="searchValue"
                @keyup.enter.native="getPosts(searchValue)"
                append-icon="search"
                @click:append="getPosts(searchValue)"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="450">
            <v-img src="../assets/photo-for-hero.jpg" :aspect-ratio="16 / 9">
            </v-img>
            <v-card-title>
              <div class="display-1 mb-2">
                {{ maincity }}da hozir {{ maintemp }} °
              </div>
              <div class="title font-weight-regular grey--text">
                Xush kelibsiz saytimizga
              </div>
            </v-card-title>
            <v-row class="px-4 grey--text" align="center">
              <v-avatar size="24" class="mr-4">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                  contain
                ></v-img>
              </v-avatar>

              <span> Ob-havo ma'lumotlari shu yerda </span>
            </v-row>

            <v-divider class="mt-6 mx-4"></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                citykhiva
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ khivamain }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="display-3" cols="6"> {{ khivatemp }}&deg;C </v-col>
              <v-col cols="6">
                <v-img
                  v-if="weatherchecker"
                  src="../assets/clear.png"
                  alt="Sunny image"
                  width="92"
                ></v-img>
                <v-img
                  v-else
                  src="../assets/cloudly.jpg"
                  alt="Sunny image"
                  width="92"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >Shamol esishi {{ khivawind }} km/s</v-list-item-subtitle
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >Namlik {{ khivapressure }}%</v-list-item-subtitle
            >
          </v-list-item>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="primary" text to="/khiva">5 kunlik ma'lumot</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                cityurgench
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ urgenchmain }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="display-3" cols="6">
                {{ urgenchtemp }}&deg;C
              </v-col>
              <v-col cols="6">
                <v-img
                  v-if="weatherchecker2"
                  src="../assets/clear.png"
                  alt="Sunny image"
                  width="92"
                ></v-img>
                <v-img
                  v-else
                  src="../assets/cloudly.jpg"
                  alt="Sunny image"
                  width="92"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >Shamol esishi {{ urgenchwind }} km/s</v-list-item-subtitle
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >Namlik {{ urgenchpressure }}%</v-list-item-subtitle
            >
          </v-list-item>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="primary" text rounded to="/urgench"
              >5 kunlik ma'lumot</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                citytashkent
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ tashkentmain }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="display-3" cols="6">
                {{ tashkenttemp }}&deg;C
              </v-col>
              <v-col cols="6">
                <v-img
                  v-if="weatherchecker3"
                  src="../assets/clear.png"
                  alt="Sunny image"
                  width="92"
                ></v-img>
                <v-img
                  v-else
                  src="../assets/cloudly.jpg"
                  alt="Sunny image"
                  width="92"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >Shamol esishi {{ tashkentwind }} km/s</v-list-item-subtitle
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >Namlik {{ tashkentpressure }}%</v-list-item-subtitle
            >
          </v-list-item>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="primary" text rounded to="/tashkent"
              >5 kunlik ma'lumot</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div>
      <h2 class="text-center">Chiroyli shaharlar</h2>
    </div>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="@/assets/khiva1.jpg" height="200px"></v-img>

          <v-card-title>
            Kalta minor shahar ramziy belgisi sifatida tan olingan.
          </v-card-title>

          <v-card-subtitle>
            <i>Diametr asosi 14,5 metrni, balandligi 29 metr</i>
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                Minora hozirgi paytda kesik konus shaklida bo‘lib hozirni o‘zida
                ham haybatli ko‘rinishga ega. Dinamik qisqarishiga qarab xulosa
                qilinadigan bo‘lsa, bitganidan so‘ng uning balandligi 100 metrga
                yaqin bo‘lib O‘rta Osiyoda eng katta va baland minora bo‘lishi
                mumkin edi. Minoraga tushgan insolyatsiya (quyosh nurlarini
                tushushi va sinishi)ga qaraydigan bo‘lsak minoradagi
                koshinlarning rangi o‘zgarmaydi.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="@/assets/khiva2.jpg" height="200px"></v-img>

          <v-card-title>
            Xiva– Xorazmning qadimiy shaharlardan biri.
          </v-card-title>

          <v-card-subtitle>
            Ichan Qal'a uzunligi 650 mеtr, eni 400 mеtr.
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Rivoyat qilishlariga ko’ra Xiva shahriga Nux payg’ambarning
                o’g’li Som asos solgan. Shahar karvon yo’lida joylashganligi
                uchun u еrda savdogarlar tеz-tеz bo’lishib turishardi.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="@/assets/khiva3.jpg" height="200px"></v-img>

          <v-card-title>
            Ichan Qal'a o’ziga xos yaxlit mе'moriy inshoatlardan iborat.
          </v-card-title>

          <v-card-subtitle>
            Dеvor aylanasining uzunligi 2200 mеtrgacha.
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                XIX asrga kеlib shahar kеngaydi, u ikki qismdan, ya'ni Ichan
                Qal'a shahriston (ichki shahar) va Dеshon Qal'a rabot (tashqi
                shahar)dan iborat bo’lib. Shahar tеvaragida esa o’nlab
                qishloqlar joylashgan edi.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
//
const NYTBaseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const ApiKey = "&units=metric&APPID=8f1ff4ffe4fc97575960a10c88a35088";
function buildUrl(url) {
  return NYTBaseUrl + url + ApiKey;
}

//
import axios from "axios";
import NProgress from "nprogress";
axios.interceptors.request.use(config => {
  NProgress.start();
  return config;
});
axios.interceptors.response.use(response => {
  NProgress.done();
  return response;
});
export default {
  props: {
    source: String
  },
  data: () => ({
    show: false,
    maincity: "",
    maintemp: "",
    citykhiva: "",
    khivamain: "",
    khivatemp: "",
    khivawind: "",
    khivapressure: "",
    khivaicon: "",
    cityurgench: "",
    urgenchtemp: "",
    urgenchwind: "",
    urgenchmain: "",
    urgenchpressure: "",
    urgenchicon: "",
    citytashkent: "",
    tashkentmain: "",
    tashkenttemp: "",
    tashkentwind: "",
    tashkentpressure: "",
    tashkenticon: "",
    date: Date()
  }),
  computed: {
    weatherchecker() {
      if (this.khivaicon == "01d") {
        return true;
      } else {
        return false;
      }
    },
    weatherchecker2() {
      if (this.urgenchicon == "01d") {
        return true;
      } else {
        return false;
      }
    },
    weatherchecker3() {
      if (this.tashkenticon == "01d") {
        return true;
      } else {
        return false;
      }
    },
    currentRouteName() {
      return this.$route.name;
    }
  },
  mounted() {
    this.getPosts("Khiva");
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=khiva&units=metric&APPID=8f1ff4ffe4fc97575960a10c88a35088"
      )
      .then(response => {
        this.wholeResponse = response.data.Search;
        this.citykhiva = response.data.name;
        this.khivamain = response.data.weather[0].main;
        this.khivatemp = response.data.main.temp;
        this.khivawind = response.data.wind.speed;
        this.khivapressure = response.data.main.humidity;
        this.khivaicon = response.data.weather[0].icon;
      })
      .catch(error => {
        console.log(error);
      }),
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=urgench&units=metric&APPID=8f1ff4ffe4fc97575960a10c88a35088"
        )
        .then(response => {
          this.wholeResponse = response.data.Search;
          this.cityurgench = response.data.name;
          this.urgenchmain = response.data.weather[0].main;
          this.urgenchtemp = response.data.main.temp;
          this.urgenchwind = response.data.wind.speed;
          this.urgenchpressure = response.data.main.humidity;
          this.urgenchicon = response.data.weather[0].icon;
        })
        .catch(error => {
          console.log(error);
        }),
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=tashkent&units=metric&APPID=8f1ff4ffe4fc97575960a10c88a35088"
        )
        .then(response => {
          this.wholeResponse = response.data.Search;
          this.citytashkent = response.data.name;
          this.tashkentmain = response.data.weather[0].main;
          this.tashkenttemp = response.data.main.temp;
          this.tashkentwind = response.data.wind.speed;
          this.tashkentpressure = response.data.main.humidity;
          this.tashkenticoncon = response.data.weather[0].icon;
        })
        .catch(error => {
          console.log(error);
        });
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios
        .get(url)
        .then(response => {
          this.maincity = response.data.name;
          this.maintemp = response.data.main.temp;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>
