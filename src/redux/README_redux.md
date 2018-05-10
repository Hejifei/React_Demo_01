redux 
#Web应用是一个状态机，视图与状态是一一对应的。
#所有的状态保存在一个对象里面。

#三大原则：
1、单一数据源
2、state只读
唯一修改state的方法就是触发action，action是一个用于描述已发生事件的普通对象。
3、用纯函数来指定修改


Redux不在意如何存储state，state可以是普通对象，不可变对象，或者其他类型。

#1、Store是保存数据的地方，可以把它看成一个容器。 createStore生成Store
import { createStore } from 'redux';
const store = createStore(fn);

#2、State:某种时间点的数据集合。通过store.getState()拿到
const state = store.getState();

#3、Action：View发出的通知，表示State应该要发生变化了。
Action是个对象。其中type属性时必须的，表示Action的名称。
把数据从应用传到store的有效载荷。是store数据的唯一来源。
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};

#4、Action Creator:定义函数生成Action，这个函数叫Action Creator
const ADD_TODO = '添加 TODO';
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
const action = addTodo('Learn Redux');

#5、store.dispatch()：View发出Action的唯一方法
store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
或者
store.dispatch(addTodo('Learn Redux'))

#6、reducer：Store收到Action后，必须给出一个新的State，这样View才会发生变化。这种State的计算过程叫做Reducer.
指定了应用状态的变化如何响应actions并发送到store的，记住actions只是描述了有事情发生了这一事实，并没有描述应用如何更新state.

#7、纯函数

#8、store.subscribe()：Store允许使用store.subscribe方法设置监听函数，一旦State发生变化，就自动执行这个函数。

Reducer拆分
combineReducers方法合并Reducer