<template>
  <div class="Home">
      <CardContainer :class="ContainerClass" :ContainerMode="ContainerMode" id="card1"> <HomeContainer :ContainerMode="ContainerMode" :changeContainerMode="changeContainerMode"/>  </CardContainer>
      <div class="ControlButtons">
        <ControlButton Component="Approve" />
        <ControlButton Component="Decline" />
        <ControlButton Component="Objection" />
        <ControlButton Component="Comment" />

      </div>
  </div>
</template>

<script>
import CardContainer from '../components/CardComponents/CardContainer.vue'
import ControlButton from '../components/ControlButton.vue'
import HomeContainer from '../components/CardComponents/HomeComponents/HomeContainer.vue'
import { useQuery, useResult } from '../../node_modules/@vue/apollo-composable/dist'
import getRandomPostQuery from '@/graphql/getRandomPost.query.gql'
import { watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  components: {
    CardContainer,
    ControlButton,
    HomeContainer
  },
  computed: {
        ContainerClass(){
            return `CardContainer ${this.ContainerMode}`
        },
    },
    data(){
        return {
        ContainerMode: false,
        PostClassifier: "Vertical"
        }
    },
    methods: {
        changeContainerMode(){
        this.ContainerMode = !this.ContainerMode
        if(this.PostClassifier === "Vertical"){
            this.PostClassifier = "Horizental";
        }
        else {
            this.PostClassifier = "Vertical";
        }
        }
    },
    setup(){
      const {result, loading} = useQuery(getRandomPostQuery)
      const RandomPost = useResult(result, {}, data => data.randomPost)
      const store = useStore()
      const getPost =(post) => store.dispatch('getPost',post)
      
      watch(loading, () => {
        console.log(RandomPost.value)
        getPost(RandomPost.value);
      })

      return { RandomPost}
    }
}
</script>

<style scoped>
.Home {
  @apply flex flex-col items-center justify-center
  overflow-hidden;
}

.ControlButtons {
  @apply flex justify-between mt-4;
  max-width: 650px;
  min-width: 550px;
}


</style>