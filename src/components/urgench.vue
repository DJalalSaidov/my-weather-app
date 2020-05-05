<template>
  <v-container fluid>
    <h3>
      {{ maincity }}, {{ maindate1 }} dan {{ maindate2 }} gacha ob havo
      ma'lumotlari shu yerda!
    </h3>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="lineWidth"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
      :show-labels="showLabels"
      :label-size="labelSize"
    ></v-sparkline>
    <h5><i>5 kunlik ma'lumotlar openweathermap.org saytidan olinmoqda.</i></h5>
  </v-container>
</template>
<script>
import axios from "axios";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];

export default {
  data: () => ({
    maincity: "",
    maintemp1: "",
    maintemp2: "",
    maintemp3: "",
    maintemp4: "",
    maintemp5: "",
    maindate1: "",
    maindate2: "",
    showLabels: true,
    lineWidth: 2,
    labelSize: 7,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [],
    gradientDirection: "top",
    gradients,
    fill: true,
    type: "trend",
    autoLineWidth: false
  }),
  // computed: {
  //   value() {
  //     return [parseInt(this.maintemp1), parseInt(this.maintemp2)];
  //   }
  // },
  mounted() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?q=urgench&units=metric&appid=8f1ff4ffe4fc97575960a10c88a35088"
      )
      .then(response => {
        this.wholeResponse = response.data.Search;
        this.maincity = response.data.city.name;
        this.maindate1 = response.data.list[1].dt_txt;
        this.maindate2 = response.data.list[33].dt_txt;
        this.maintemp1 = response.data.list[1].main.temp;
        this.maintemp2 = response.data.list[9].main.temp;
        this.maintemp3 = response.data.list[17].main.temp;
        this.maintemp4 = response.data.list[25].main.temp;
        this.maintemp5 = response.data.list[33].main.temp;
        this.value = [
          parseInt(this.maintemp1),
          parseInt(this.maintemp2),
          parseInt(this.maintemp3),
          parseInt(this.maintemp4),
          parseInt(this.maintemp5)
        ];
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
