<template>
  <v-container>
    <h1>Documentation</h1>
    <h3>
      Ushbu veb-ilova 915-18 guruh talabasi Saidov Jaloliddin tomonidan ishlab
      chiqildi
    </h3>
    <h4>Quyida veb-ilova haqida so'z yuritiladi.</h4>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <br />
    <div>
      <div class="text-center d-flex pb-4">
        <v-btn color="primary" rounded @click="all">Ochish</v-btn>
        <v-btn color="primary" rounded @click="none">Yopish</v-btn>
      </div>

      <v-expansion-panels v-model="panel" multiple>
        <h3>Umumiy ma'lumot</h3>
        <v-expansion-panel>
          <v-expansion-panel-header
            ><b>Loyiha haqida</b></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Ushbu loyiha ob-havo ma'lumotlarini o'z ichiga olgan. Bunda
            foydalanuvchiga yengil tarzda ma'lumot berish uchun ishlab chiqdim.
            Ya'ni bosh sahifada asosiy elementlar bu bosh sahifa tepa qismidagi
            qidiruv funksiyasidir va uning yonida qidirilgan ma'lumotni aks
            ettiruvchi bo'limdan iborat. Keyinki navbatda 3 ta bo'lakga
            bo'lingan ob-havo ma'lumot beruvchi qismlar, chiroyli shaharlar
            qismi va eng tepa va pastki qismda yo'lboshlovchi menyular o'rin
            olgan. Ob-havo ma'lumotlari Openweathermap.org sayti API'laridan
            foydalangan xolda ishlab chiqilgan.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header
            ><b>Qo'llanilgan texnologiyalar</b></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Vue.js butun dunyo bo'ylab veb ilova ishlab chiqish uchun keng
            qo'llaniladigan yangi dasturiy texnologiyalardan biridir. Vue.js
            aslida foydalanuvchi interfeyslarini yaratish uchun turli xil
            qo'shimcha vositalarga ega JavaScript frameworkidir.
            <p>
              Vue frameworkidan foydalangan texnologiyalarim quyidagilardan
              iborat:
            </p>
            <ul>
              <li>Vue js</li>
              <li>Vue router (yo'nalishlarni boshqarish uchun)</li>
              <li>Vuetify (dizayn)</li>
              <li>Axios (HTTP so'rovlarini amalga oshirish uchun)</li>
              <li>Openweathermap.org APIsidan foydalandim</li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header
            ><b>Tashqi ko'rinish</b></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Bu loyihada men Vue js komponenti bo'lmish Vuetify ya'ni Google'ning
            mashxur Material designga asoslangan va foydalanuvchi interfeysi
            uchun qulay bo'lgani uchun foydalandim.
            <p>
              Vuetify - komponentlar kutubxonasi 2016 yildan beri faol
              rivojlanmoqda.
            </p>
            <p>
              Tashqi ko'rinishida asosan men ko'k va oq ranglardan klassik
              tarzda qo'shimcha dizaynlarsiz foydalandim.
            </p>
            <img width="100%" src="@/assets/documentation/heropage.jpg" />
            <p>
              Bu loyiha 6 ta sahifa va 1 ta sahifachadan iborat.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <p></p>
        <br />
        <v-divider></v-divider>
        <h3>Sahifalar haqida</h3>
        <v-expansion-panel>
          <v-expansion-panel-header
            ><b>Bosh sahifa</b></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Bosh sahifa 5 qismdan iborat.
            <ol>
              <li>Menyu qismi</li>
              <li>Hero page (old ko'rinish)</li>
              <li>Shaharlar ob-havosi</li>
              <li>Chiroyli shaharlar</li>
              <li>pastki menyu qismi</li>
              <li>Past qismi (footer)</li>
            </ol>
            <br />
            <p>
              1- qismda sayt logotipi va sarlavhasi o'ng tarafdan 7ta menyu
              o'rin olgan.
            </p>
            <p>
              2- Old ko'rinish 2ta qism va parallax orqa fonidan foydalanilgan.
              Birinchi bo'lakda qidiruv matni kiritiladigan joy o'rin olgan va
              uning yon qismida ushbu qidiruv natijasini aks ettiradigan qism
              ya'ni card joylashtirilgan.
              <img width="100%" src="@/assets/documentation/mainpage.jpg" />
            </p>
            <p>3-qismda 3ta bo'lakga bo'lingan cardlar joylashtirilgan.</p>
            <img width="100%" src="@/assets/documentation/cards.jpg" />
            <p>
              4- qismda chiroyli shaharlarqismi o'rin olgan va qiziqarli
              ma'lumotlar keltirilgan.
            </p>
            <img width="100%" src="@/assets/documentation/cities.jpg" />
            <p>
              5- 6- qismlarda mos ravishda pastki menyu va pastki qism ya'ni
              footer qismi joy olgan.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header
            ><b
              >Xiva - Urganch -Toshkent sahifalari</b
            ></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Bu sahifalar 3 tasi bir-biriga o'xshash, faqat ob-havo ma'lumotlari
            bilan farq qiladi.
            <p>Bu sahifalarni Xiva sahifasi misolida ko'rib chiqamiz.</p>
            <p>
              Bu sahifaning ajralib turadigan qismi sparkline ya'ni Vuetifyning
              grafik funksiyasidir.
            </p>
            <ol>
              <li>
                Tepa qismdan Shahar nomi va qaysi sanalar bo'yicha ma'lumotlar
                aks etgan yozuv o'rin olgan.
              </li>
              <li>
                O'rta qism grafik gradient ranglar bilan ajralgan ya'ni ob-havo
                harorati yuqori bo'lishi bilan bu funksiya tepaga qarab qizil
                rangda ifodalaydi aksincha pastga qarab ochiq ko'k tusga ega
                bo'ladi o'rtadan sariq rangi bilan ajarlib turadi.
              </li>
              <li>
                Pastki qismda shu sahifaga tegishli shaharning iqlim harorati 5
                kun bo'yicha ifodalangan.
              </li>
            </ol>
            <img width="100%" src="@/assets/documentation/temp.jpg" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header
            ><b>Documentation</b></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Bu sahifada ko'rib turganingizdek Vuetifyning expansion panellari
            o'rin olgan.
            <ol>
              <li>Tepa qismdan qisqacha ma'lumotlar</li>
              <li>
                Tepa qismning 2- bo'lagida ushbu expansion panellarni hammasini
                ochib va yopish tugmalari o'rin olgan.
              </li>
              <li>
                O'rta qismdan bo'limlarga bo'linga expansion panellarni
                ko'rishingiz mumkin.
              </li>
            </ol>
            <img width="100%" src="@/assets/documentation/src.jpg" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header><b>Kirish</b></v-expansion-panel-header>
          <v-expansion-panel-content>
            Bu sahifada tizimga kirish uchun forma joylashtirilgan.
            <p></p>
            <img src="@/assets/documentation/auth.jpg" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header><b>Aloqa</b></v-expansion-panel-header>
          <v-expansion-panel-content>
            Bu sahifachada bog'lanish uchun ma'lumotlar va tizimga aloqador
            xodimga xat yuboruvchi formalardan iborat.
            <p></p>
            <img src="@/assets/documentation/feedback.jpg" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <br />
        <v-divider></v-divider>
        <h3>Dasturiy qismi haqida</h3>
        <v-expansion-panel>
          <v-expansion-panel-header
            ><b>Komponentlar</b></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Bu veb ilovamda 6 ta lokal komponent va bitta global ya'ni saytning
            asosiy qismi header va footerlarni boshqa komponentlarda
            ishlatmaslik uchun global komponentdan foydalandim.
            <p><i>Global va lokal komponentlar joylashuvi</i></p>
            <img src="@/assets/documentation/comp.jpg" />
            <p>
              <i>Bu global komponentning VS code'da yig'ilgan ko'rinishi</i>
            </p>
            <img src="@/assets/documentation/globalcomponent.jpg" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header><b>Vue Router</b></v-expansion-panel-header>
          <v-expansion-panel-content>
            Vue router'da qaysi komponentlar qayerda ishlashini ta'minlash
            maqsadida qurib chiqildi. Ya'ni Vue router'da qaysi linkga kirilsa
            router uni unga tegishli bo'lgan komponentga yo'naltiradi.
            <p>
              <i
                >Bu rasmda Vue router qanday tuzilganini ko'rishingiz mumkin.</i
              >
            </p>
            <img width="100%" src="@/assets/documentation/router.jpg" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header><b>Axios</b></v-expansion-panel-header>
          <v-expansion-panel-content>
            Axios'dan json formatdagi so'rovlar bilan ishlashda foydalandim
            ya'ni Openweathermap.org sayti API'laridan json formatidagi
            ma'lumotlarni Vue js veb ilovasi muloqotida foydalandim.
            <p>
              <i
                >Bu rasmda Axios qanday ishlatilganini qisqacha ko'rishingiz
                mumkin.</i
              >
            </p>
            <img width="100%" src="@/assets/documentation/axios.jpg" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <br />
        <v-divider></v-divider>
        <h3>Yakunlovchi qism</h3>
        <v-expansion-panel>
          <v-expansion-panel-header
            ><b>Xususiyatlari</b></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <ul>
              <li>
                Bosh sahifada siz dunyodagi barcha shaharlarni ob-havosini bosh
                sahifada joylashgan qidiruv tizimidan topishingiz mumkin.
              </li>
              <li>
                3ta shahar ob-havosi haqida batafsil ma'lumot olishingiz mumkin.
              </li>
              <li>
                Chiroyli shaharlar qismida qiziqarli ma'lumotlar.
              </li>
              <li>
                Shaharlar sahifasi orqali siz 5 kunlik ob-havo ma'lumotlariga
                interaktiv tarzda ega bo'lishingiz mumkin.
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header
            ><b>UI to'g'ri tanlanganligi</b></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Web ilovani yaratishda User interface'larga ya'ni UI'larga alohida
            e'tibor qaratildi.
            <ul>
              <li>
                Tepa va pastki menyularni ochilishi mutanosibligi ta'minlagan.
              </li>
              <li>
                Bosh sahifadagi 3 ta bo'lakcha ma'lumot berishliligida Namlik,
                Shamol esishi va ob-havo qandayligi rasmlari alohida o'rin
                olgan.
              </li>
              <li>
                Qiziqarli shaharlar qismida odamni o'ziga jalb qiladigan
                ma'lumotlar o'rin olgan.
              </li>
              <li>
                Documentation alohida expansion panellardan foydalanilgan.
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header><b>Xulosa</b></v-expansion-panel-header>
          <v-expansion-panel-content>
            Muallifdan fikrlar:
            <ul>
              <li>
                Vue js kelajakda rivojlanadi yaqin orada yo'q bo'lib ketmaydi.
              </li>
              <li>
                Ishlash tezligi bilan boshqa frameworklardan ajralib turadi.
              </li>
              <li>
                Kodi toza yozilishi (clean code) bilan ajralib turishi.
              </li>
              <li>
                Chiroyli kod yozilishi bilan dasturchilarni o'ziga jalb qiladi.
              </li>
              <li>
                Documentation yetarli.
              </li>
              <li>Ekotizimlari juda faol masalan Vuetify )</li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      panel: [],
      items: 14
    };
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    }
  }
};
</script>
