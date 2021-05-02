<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Feeling Bored?</h1>
      <h2 class="subtitle">
        Here are few pages that can hopefully cheer you up.
      </h2>
    </section>
    <section class="section">
      <div class="page-description">
        <p>
          If you are struggling to an activity to do, check out the
          <span><router-link to="/bored">Bored</router-link></span> page. It
          will give you various activities and you can do. You also have the
          option to select a category you want.
        </p>
      </div>
      <div class="page-description">
        <p>
          Looking for a quick laugh? You can get a joke from the
          <span><router-link to="/jokes">Jokes</router-link></span> page. Here
          you choose a joke from categries provides or just get a random one.
          You will also have an option to blacklist any certain types of jokes.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-description {
  margin-bottom: 15px;
}
</style>
