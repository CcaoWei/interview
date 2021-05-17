
1.vue优点？
答：轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb；
简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；
双向数据绑定：保留了angular的特点，在数据操作方面更为简单；
组件化：保留了react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；
视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；
虚拟DOM：dom操作是非常耗费性能的， 不再使用原生的dom操作节点，极大解放dom操作，但具体操作的还是dom不过是换了另一种方式；
运行速度更快:相比较与react而言，同样是操作虚拟dom，就性能而言，vue存在很大的优势。
15.v-on可以监听多个方法吗？
答：可以，栗子：<input type="text" v-on="{ input:onInput,focus:onFocus,blur:onBlur, }">。
20.单页面应用和多页面应用区别及优缺点
答：单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。
多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新
单页面的优点：
用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。
单页面缺点：
不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；初次加载时耗时多；页面复杂度提高很多。
 
 
 什么是 vue 生命周期？有什么作用？
答：每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做 生命周期钩子 的函数，这给了用户在不同阶段添加自己的代码的机会。（ps：生命周期钩子就是生命周期函数）例如，如果要通过某些插件操作DOM节点，如想在页面渲染完后弹出广告窗， 那我们最早可在mounted 中进行。

vuex有哪几种属性？
答：有五种，分别是 State、 Getter、Mutation 、Action、 Module
state => 基本数据(数据源存放地)
getters => 从基本数据派生出来的数据
mutations => 提交更改数据的方法，同步！
actions => 像一个装饰器，包裹mutations，使之可以异步。
modules => 模块化Vuex

1.v-show 和 v-if 的区别
    v-show是通过dispaly 控制显示隐藏的
    v-if 是组件真正的销毁和渲染，频繁切换状态用v-show 否则用v-if
2.为何在v-for中使用key
    在v-for中用key是因为在diff算法中通过tag和key来判断是否是sameNode，这样可以减少渲染次数，提升渲染性能
3.描述vue组件生命周期（父子组件）
4.vue组件如何通讯
    父子组件  props和$emit
    自定义事件  event.$no  event.$off event.$emit
    vuex
5.描述组件渲染和更新的过程
    vue原理的三大模块，第一个就是响应式，监听属性变化，第二部分就是模板渲染，第三块虚拟dom
6.双向数据绑定v-model的实现原理
    input元素的value = this.name
    绑定的input事件 this.name = $event.target.value
    data更新触发re-render
7.对于mvvm的理解  画图
    view -> viewModel（dom listeners directives）->model
    view <- viewModel（dom listeners directives）<-model
    dom             vue                            plain javasript objects
8.computed有什么特点
    最大的特点就是缓存，data不变的话不会重新计算，所以说合理的使用computed能够提高性能。
9.为何组件data必须是一个函数
    组件的export default看似是一个对象，实际编译出来是一个class类，我在每个地方使用这个组件的时候，
    相当与实例化了一个这个类，实例化执行data的时候如果data不是一个函数的话，那每一个实例的数据都一样了 
    数据就会共享，达不到我们想要的独立性
10.ajax请求应该放在哪个生命周期
    mounted中，js是单线程的 ajax是异步获取数据，放在mounted之前没有用，只会让逻辑更加混乱
11.如何将组建所有的props传递给子组件
    $props 
    <User v-bind="$props" />
12.如何自己实现v-model
13.多个组件有相同的逻辑，如何抽离？
    mixin  
    缺点：
14.何时使用异步组件
    基本上就是加载大组件的时候，加载图表，编辑器
    路由异步加载
15.何时使用keep-alive
    缓存组件，不需要重复渲染
    如：多个静态tab页面的切换
    能优化性能
16.何时需要使用 beforeDestory
    接触自定义事件
    清除定时器
    解除自定义的dom事件 如 window scroll 
    会造成内存泄漏
17. 什么实作用域插槽
18.vuex中action和mutation的区别
    最大的区别就是 在action中要处理异步，mutation不可以，mutation涉及做原子操作，action可以整合多个mutation
19.vue-router常用的路由模式 
    vue-router声明周期
        全局路由钩子：2个 (beforeEach、afterEach)
        组件路由钩子：3个 (beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave)
    hash 默认
    H5 history (需要服务端的支持)
20.如何配置vue-router的异步加载
    通过import加载组件


插值 指令  v-html有xss风险  子组件会被覆盖

1.computed  和 watch
    computed有缓存，data不变则不会重新计算
    问题：watch 如何深度监听？
    回答：watch监听引用类型，拿不到oldval
        wathc:{
            name(oldval,newval){//name如果是个字符串可以监听到oldval
                console.log(oldval,newval)
            },
            info:{
                handler(oldval,newval){ 
                如果info是引用类型 拿不到oldval
                },
                deep:true//深度监听
            },
        }
2.class 和 style
  动态属性    :class="{'active':isactive}"  //布尔类型写法   isactive:true
            :class="[isactive]"  //值类型   isactive:'active'
            style  里面如果有-的话就用驼峰式   比如：font-size    变成 fontSize
3. v-if 和v-show的区别？
   v-if渲染结果  不匹配 在DOM节点中不显示
   v-show 渲染结果  不匹配的 在DOM节点中还是显示的只不过变成了 dispaly：none

4.v-if和v-show的使用场景？
    条件判断更新不频繁或者是一次性的的时候 用v-if
    相反的话用v-show
5.如何遍历对象？  
    也可以用v-for
    遍历对象的时候是  v-for = "(val,key,index) in listobj" :key="key"
6.key的重要性
    key不能乱写如（random 或者index）
    用和业务相关的id
7.v-for和v-if 不能用
  eslint会报错
  因为  v-for 比 v-if 的计算级高一些，在渲染模板的时候先用v-for进行循环。
        循环完成之后用v-if进行判断就导致做了列表长度的判断
8.event参数，自定义参数
    不传参数的话 就是直接获取  event1(event){}
    传参数event2(val,$event) event2(val,event){}
    event是原生的  event挂载到当前组件
9.事件修饰符，按键修饰符
    .stop  阻止单击事件继续传播
    .prevent 提交事件不再重载页面
    .stop.prevent  修饰符可以串联
    .capture 使用事件捕获模式
    .self 只当在目标元素自身时触发处理函数
    ctrl.exact  有且只有ctrl被按下的时候才触发
10.观察 事件被绑定到哪里？
11.父子组件传值
  props 和$emit
  父传子 父组件中 <child :parentInfo="info"></child>
        子组件中  props:['parentInfo']/props:{list:{type:Array,defaut:[]}}
  子传父 子组件中  @sendInfoToPartent="sendInfo"
                sendInfo(){
                    this.$emit('getChildInfo',"我是子组件中的info")
                }
        父组件中 <child @getChildInfo="getChildInfo"></child>
                getChildInfo(val){}
        
12.组件件通讯  --自定义事件 兄弟间的通讯  用一个公共的vue实例
        兄弟组件中  @sendInfoToPartent="sendInfo"
                import event from './event' =》这里面只是new 了一个vue的实例  
                （
                    import vue from 'vue'
                    export default new Vue()
                ）
                sendInfo(){
                    this.$emit('getChildInfo',"我是子组件中的info")
                    event.$emit('getbortherInfo',"我是兄弟组件中的info")
                }
        父组件中 
                import event from './event'
                mounted(){
                  监听  event.$on('getbortherInfo',this.brotherEvent)
                }
                methos:{
                     brotherEvent(info){}
                }
                beforeDestroy(){//解绑自定义事件   及时销毁 否则会造成内存泄漏
                    event.$off('getbortherInfo',this.brotherEvent)
                }
13.组件生命周期
    挂载阶段
        初始化 beforeCreate
              created
              beforeMounte
              mounted
        -----挂载完毕
    更新阶段
        当data被修改时
            beforeUpdate
            虚拟DOM重新渲染并应用更新
            updated
    销毁阶段
        beforeDestory
        destoryed
    -----销毁完毕
    问题：
    cerated和mounted有什么区别？？???
        created 是把vue的实例初始化了,还没有渲染
        mounted 是把页面组件啊都渲染完了  所以一些ajax请求会放在mounted中调用
    destory事件中做一些什么事情？?????
        解除绑定 
        销毁子组件以及事件监听器   
    ----------------
     index created   创建是从外到内   渲染是从内到外    
     list created
     list mounted
     index mounted
     index beforeUpdate 更新是从内到外 
     list  beforeUpdate
     list  updated
     index updated
     list destoryed
     index destoryed
14.vue 高级特性
    1）自定义 v-moudel 
        <customModel v-model="name"></customModel>
        customModel.vue中
        <input type="text" :value="text1" @input="$emit('change',$event.target.value)"/>
        model:{
            prop:'text1'//对应props的text
            event:'change'
        },
        props:{
            text1:{
                type:String,
                default(){
                    return ""
                }
            }
        },
        注意：input 使用了：value 而不是v-model 
            上面的change 和 model.event对应
            text1属性对应
    2）$nextTick
        vue是一个异步渲染的框架
        data改变之后 DOM不会立刻渲染
        $nextTick会在DOM渲染之后被处罚，以获取最新的DOM节点
        场景 ：
            在list中添加一项
            addItem(){
                this.list.push(`${Date.now()}`)
                this.list.push(`${Date.now()}`)
                this.list.push(`${Date.now()}`)
                const ulEle = this.$refs.ul1
                console.log(ulElem.childNodes.length)  
                //点击这个函数获取的是添加之前的子元素

                //应该是
                //1.异步渲染 2.$nextTick待DOM渲染完成再回调
                3.页面渲染时会将data的修改多次整合，多次data修改只会渲染一次
                this.$nextTick(()=>{ 
                    const ulEle = this.$refs.ul1
                    console.log(ulElem.childNodes.length)  
                })
            }
    3）slot插槽
        直接使用
            父组件向子组件插入一些自己的东西
            子组件中保留一个<slot></slot>
            父组件中使用
                <child>  
                        <div>
                            我这里都可以随便写东西
                        </div> 
                </child>

        作用域的插槽
             子组件中保留一个<slot :slotData="websit"></slot>
             父组件中使用
<child>  
<template v-slot="slotProps">
  <div>
    {{slotProps.slotData.child}}
  </div>
</template>
</child>
        

    4）动态、异步组件
        动态组件
            :is="属性的名字"
            根据数据，动态渲染的场景 即组件类型不确定
            新闻详情页中有 文本、图片、video 但是不能确定
            <component :is="NextTickName"></component>
            data(){
                return:{
                    NextTickName:"组件名称"//组件名称跟引用进来的组件保持一致
                }
            }
        异步组件
            大的组件如何异步加载 ？？
                import() 函数
                按需加载，异步加载大组件 什么时候用到什么时候加载
                components:{
                    FormDemo:() => import('../components/FormDemo')
                }

    5）keep-alive
        字面意思就是 保持活着
        它其实就是缓存组件
        使用场景就是 当频繁切换tab或者列表时 不需要重复渲染  只需要显示就行
        vue常见性能优化
        使用了keep-alive 之后 就不会走销毁生命周期
    6）mixin
        多个组件有相同的逻辑，抽离出来 
        mixin有点问题
        vue3 解决了这个问题
        如何使用：
         import myMixin from './mixin'
         export default{
             mixins:[myMixin]//可以添加多个，会自动合并起来
         }

         混合的问题   1.变量来源不明确,不利于阅读。
                    2.多个mixin可能会造成变量重合冲突
                    3.组件和mixin容易出现多对多的问题，复杂度变高了
    7）refs
15.vuex使用
   基本概念：state getters action(action里面才能做异步操作) mutation
   用于vue组件： dispatch commit mapstate mapgetters mapactions mapmutation
   state的数据结构设计 

16.路由
    hash 模式
    h5 history 模式
    后者需要server端支持
    routes:[
        {
            path:'',
            components:()=> import('') //懒加载
        }
    ]

17.vue的原理
组件化  响应式  模板编译 vdom和diff
1.为何v-for要使用key ？？

2.描述组件渲染和更新的过程？？？
3.双向数据绑定v-model的实现原理？？？
    1)组件化的基础：
        如何了解mvvm模型
            其实就是咱们的组件化的理念，数据驱动视图，让我们只关心数据，更新了数据就会更新视图，而不是去操作dom；
        view ==vm修改=》model
    2)data的数据一旦变化，立刻触发视图的更新
        vue核心api object.definePropety
        object.definePropety监听数据，监听数据的get和set  
           object.definePropety实现响应式是如何实现的？？
            diff计算 是vdom中最核心，最关键的部分，在日常中使用就能体现出来比如key
            diff算法是什么：即对比，是一个广泛的概念，如git diff 改了什么东西，两个数做diff，如vdom diff
    3）模板编译，模板实vue开发中最常用的部分，它不是html 有指令，插值 ，js表达式，可以做循环做判断。
        组件渲染和更新过程？？？？
        答案：vue template complier 将模板编译为render函数，执行render函数生成vnode 然后在生成html渲染到dom上

    
    3)实现数据驱动视图的第一步
    4)考察vue原理的第一题
-----------vue真题演练！！！！！！！！！！！！！！！！！！！！
