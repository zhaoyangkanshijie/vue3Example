<template>
    <div>
        <p @click="changeMessage()">{{message}}</p>
        <p @click="methods.changeMessage2()">{{state.message}}</p>
        <p @click="changeMessage3()">{{state.lowerCaseMessage}}</p>
        <p>{{newMessage}}</p>
         <teleport to="#teleport-target">
            <div class="toast-msg">我是一个 Toast 文案</div>
        </teleport>
    </div>
</template>

<script>
import { ref, reactive, onMounted, computed, watch, watchEffect, onRenderTracked, onRenderTriggered, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured } from "vue";
export default {
    name: 'test',
    props: {
        propsData: String
    },
    //props,context:emit,attrs,slots
    setup(props, context) {
        //data
        const message = ref(new Date().toString());
        const state = reactive({
            message: new Date().toString(),
            lowerCaseMessage: computed(() => state.message.toLowerCase())
        })

        //computed
        const newMessage = computed(()=>{
			return message.value + Math.random().toString();
        })

        //beforeCreate created
        setTimeout(() => {
          message.value = '1'
        }, 1000)
        
        //method
        const changeMessage = () => {
            message.value = 'hello';
        }
        const methods = {
            changeMessage2() {
                message.value = 'hello2';
            },
            changeMessage3() {
                message.value = 'hello3';
            }
        }

        onMounted(() => {
            console.log(props, context, context.emit, context.attrs, context.slots)
            // const timer = setInterval(()=>{
            //     message.value = Math.random().toString();
            //     state.message = Math.random().toString();
            // },1000);
        })
        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('onUnmounted')
        })
        //当一个 reactive对象属性或一个ref被追踪时触发
        onRenderTracked((e)=>{
            console.log('onRenderTracked:',e);
        })
        //依赖项变更被触发时
        onRenderTriggered((e)=>{
            console.log('onRenderTriggered:',e);
        })
        onErrorCaptured((e)=>{
            console.log('onErrorCaptured:',e);
        })

        //watch
        watch([message, state.lowerCaseMessage], newVal => {
          //可以监听多个值
          console.log('watch:' + newVal)
        })
        watchEffect(() => {
          // watch 副作用函数 首次加载会触发,当值发生变化也会触发
          console.log('message.value:' + message.value)
        })
        
        return {
            message,
            state,
            newMessage,
            changeMessage,
            methods,
            ...methods
        }
    }
}
</script>

<style scoped>

</style>