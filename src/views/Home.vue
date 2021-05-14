<template>
  <div class="Home">
      <CardContainer :class="ContainerClass" :ContainerMode="ContainerMode" id="card1"> <HomeContainer :ContainerMode="ContainerMode" :changeContainerMode="changeContainerMode"/>  </CardContainer>
      <div class="ControlButtons">
        <ControlButton Component="Approve" v-if="Mode !== 'Approve'" @click="addApprove"/>
        <ControlButton Component="Decline" v-if="Mode !== 'Decline'" @click="removeApprove"/>
        <ControlButton Component="Objection" />
        <ControlButton Component="Comment" @click="() => {ContainerMode === false ? changeContainerMode() : ''}"/>
        <!-- <p> {{ifApproval.name}}</p> -->

      </div>
  </div>
</template>

<script>
import CardContainer from '../components/CardComponents/CardContainer.vue'
import ControlButton from '../components/ControlButton.vue'
import HomeContainer from '../components/CardComponents/HomeComponents/HomeContainer.vue'
import { useMutation, useQuery, useResult } from '../../node_modules/@vue/apollo-composable/dist'
import getRandomPostQuery from '@/graphql/getRandomPost.query.gql'
import addApprovalMutation from '@/graphql/addApproval.mutation.gql'
import removeApproveMutation from '@/graphql/removeApproval.mutation.gql'
import checkApprovalQuery from '@/graphql/checkApproval.query.gql'
import checkDeclineQuery from '@/graphql/checkDecline.query.gql'


import { ref, watch } from 'vue'
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
      const Mode = ref('')
      const {result, loading} = useQuery(getRandomPostQuery)
      const RandomPost = useResult(result, {}, data => data.randomPost)
      const store = useStore()
      
      const getPost =(post) => store.dispatch('getPost',post)

      const post = ref(store.state.InitialPost)
      const user = ref(store.state.user2)
    

      
      watch(loading, () => {
        console.log(RandomPost.value)
        getPost(RandomPost.value);
        post.value = store.state.InitialPost
        user.value = store.state.user2
        
      })

      const {mutate:addApprove, onDone} = useMutation(addApprovalMutation, () => 
              ({
              variables: {
                postUuid: post.value.uuid,
                username: user.value.username
              },
            }))

      onDone(() => {
        Mode.value="Approve"
      })
    
      const {result: checkApproval, loading: checkLoading } = useQuery(checkApprovalQuery, () => ({
          name: post.value.uuid + '+' + user.value.username 
      }))
      const ifApproval = useResult(checkApproval)
      watch(checkLoading, () => {
        if(ifApproval.value.name === "True") {
        Mode.value = "Approve"
      }})

      const {result: checkDecline, loading: checkDeclineLoading } = useQuery(checkDeclineQuery, () => ({
          name: post.value.uuid + '+' + user.value.username 
      }))
      const ifDecline = useResult(checkDecline)
      watch(checkDeclineLoading, () => {
        if(ifDecline.value.name === "True") {
          Mode.value = "Decline" 
      }})

      const {mutate:removeApprove, onDone:Remove} = useMutation(removeApproveMutation, () => 
              ({
              variables: {
                postUuid: post.value.uuid,
                username: user.value.username
              },
            }))

      Remove(() => {
        Mode.value="Decline"
      })
















      
      
      return { RandomPost, Mode, addApprove, post, user, ifApproval, removeApprove}
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