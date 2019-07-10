<script>

Vue.component('mainFrameInfo', {
  props: {  picture: {  
            type: string
          },
            description: {
            type: string
            }

       },

  template:`<div class='col-12>
              {{picture}}
            </div>
            <div class='col-12>
              {{description}}
            </div>
            `
})


export default {
  name: 'MainFrameInfo',
  props: {
    picture: String,
    description: String
  }
}


</script>
