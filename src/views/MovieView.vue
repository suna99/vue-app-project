<template>
  <HeaderCont />
  <TitleCont name1="movie" name2="api" />
  <div class="movie__cont">
    <div class="container">
      <div class="movie__search">
        <form @submit.prevent="SearchMovies()">
          <div>
            <label for="search">검색하기</label>
            <input
              type="search"
              id="search"
              placeholder="검색하기"
              v-model="search"
            />
            <button type="submit">검색</button>
          </div>
        </form>
      </div>
      <div class="movie__list">
        <ul>
          <li v-for="movie in movies" :key="movie.id">
            <a href="">
              <img :src="image(movie.poster_path)" :alt="movie.title" />
              <span>{{ movie.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ContactCont />
  <FooterCont />
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },
  methods: {
    image(img) {
      return `https://image.tmdb.org/t/p/w300/${img}`;
    },
  },
  setup() {
    const movies = ref([]);
    const search = ref("bear");

    const SearchMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=${search.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.results;
          search.value = "";
        })
        .catch((error) => console.log("error", error));
    };
    SearchMovies();

    return {
      search,
      movies,
      SearchMovies,
    };
  },
};
</script>

<style scoped lang="scss">
.movie__cont {
  background-color: #f0eeeb;
}
.movie__list ul {
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 1 1 23%;
    margin: 1%;

    img {
      border-radius: 0.4em;
    }

    span {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #fff;
      color: var(--white);
      display: -webkit-box;
      font-family: SCoreDream;
      font-family: var(--subKor_font);
      overflow: hidden;
      padding-top: 10px;
      text-overflow: ellipsis;
    }
  }
}

.movie__search {
  background: var(--black);
  form {
    position: relative;
    height: auto;
    text-align: center;
    margin-bottom: 32px;
  }
  label {
    color: var(--black);
    font-size: 0;
    height: 0;
    text-indent: -9999px;
    width: 0;
  }
  input {
    background: var(--black);
    border: 2px solid var(--light_border);
    border-radius: 50px;
    color: #f0eeeb;
    color: var(--white);
    padding: 1rem 3rem 1rem 2rem;
    width: 98%;
  }
  button {
    background: var(--white);
    border: 0;
    border-radius: 50%;
    color: var(--black);
    font-family: var(--subKor_font);
    font-size: 12px;
    height: 40px;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.3s ease;
    width: 40px;
  }
}
</style>
