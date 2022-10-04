<template>
  <HeaderCont />
  <TitleCont name1="unsplash" name2="api" />
  <section class="unspl__cont">
    <div class="container">
      <div class="unspl__inner">
        <div class="unsplash__search">
          <form @submit.prevent="SearchUnsplash()">
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
        <div class="unspl__img__wrap">
          <div class="unspl__item" v-for="unspl in unspls" :key="unspl.id">
            <img :src="unspl.urls.regular" :alt="unspl.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
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
  setup() {
    const unspls = ref([]);
    const search = ref("london");

    const SearchUnsplash = () => {
      fetch(
        `https://api.unsplash.com/search/photos?query=${search.value}&client_id=tAVffcr0OH82NIrhxNxzcvTr9SQC8WqhRAP8aI5R2XY&per_page=30`
      )
        .then((response) => response.json())
        .then((data) => {
          unspls.value = data.results;
          search.value = "";
          console.log(unspls);
        })
        .catch((error) => console.log("error", error));
    };
    SearchUnsplash();

    return {
      search,
      unspls,
      SearchUnsplash,
    };
  },
};
</script>

<style scoped lang="scss">
.unspl__cont {
  background: var(--black);
  padding-bottom: 15vh;

  .unspl__img__wrap {
    line-height: 0;
    -webkit-column-count: 4; /* split it into 4 columns */
    -webkit-column-gap: 8px; /* give it a 8px gap between columns */
    -moz-column-count: 4;
    -moz-column-gap: 8px;
    column-count: 4;
    column-gap: 8px;

    .unspl__item {
      img {
        width: 100% !important;
        height: auto !important;
        margin-bottom: 8px; /* to match column gap */
      }
    }
  }
}

.unsplash__search {
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
