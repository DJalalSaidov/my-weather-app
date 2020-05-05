<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h2>Login</h2>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Foydalanuvchi ismi"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Maxfiy so'z"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success">Ro'yhatdan o'tish</v-btn>
      <v-btn color="info">Kirish</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    showPassword: false
  })
};
</script>
