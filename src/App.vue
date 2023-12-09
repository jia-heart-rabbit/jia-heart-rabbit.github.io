<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat >
      <v-container class="py-0 fill-height bar" >
        <v-avatar class="mr-10" color="grey darken-1"  size="32">
          <img src="../public/rabbit.jpg">
        </v-avatar>
        <v-btn v-for="item in links" :key="item.id"  text @click="goto(item.path)">{{ item.name }}</v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260" class="hollow">
          行到水穷处，坐看云起时
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="lighten-3 mainpage">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {name:'学习笔记',path:'/user',id:1},
        {name:'一些照片',path:'/like',id:2},
        {name:'碎碎念',path:'/about',id:3},
      ],
    }),
    methods:
    {
      goto(e)
      {
        this.$router.push(e);
      }
    }
  }
</script>

<style scoped>
.hollow{
  text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
  font-size: 20px; 
  color:#fff;
}

.mainpage{
  background-color: #fff;
}
</style>