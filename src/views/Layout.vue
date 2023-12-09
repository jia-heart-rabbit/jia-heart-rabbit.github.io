<!--  -->
<template>
  <div>
    <h2><span>I</span>M<span> MOMO! </span></h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
div {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}

h2 {
    color: #222;
    font-size: 100px;
}
h2 a {
    text-decoration: none;
    color: white;
}

h2 span {
    transition: 0.5s;
}

h2:hover span:nth-child(1) {
    margin-right: 10px;
}

h2:hover span:nth-child(2) {
    margin-left: 30px;
}

h2 span:nth-child(1)::after {
    opacity: 0;
    transition: 2s;
}

h2:hover span:nth-child(1)::after {
    content: "'";
    opacity: 1;
}

h2:hover span {
    color: white;
    text-shadow: 0 0 10px #fff,
      0 0 20px #fff,
      0 0 40px #fff,
      0 0 80px #fff;
}
</style>
