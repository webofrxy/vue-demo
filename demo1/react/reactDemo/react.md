##react Notes
1. react 中遇到super：
	子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
	另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例
	例如：
		class Point {
		  constructor(x, y) {
		    this.x = x;
		    this.y = y;
		  }
		}

		class ColorPoint extends Point {
		  constructor(x, y, color) {
		    this.color = color; // ReferenceError 报错
		    super(x, y);
		    this.color = color; // 正确
		  }
		}
2. react中的数据：
	-React提倡所有的数据都是由父组件来管理，通过props的形式传递给子组件来处理，数据完全由父组件来管理和控制，子组件用来显示、操作数据，得经过父组件的批准，即——父组件通过props的形式将数据传递给子组件，子组件拿到父组件传递过来的数据，再进行展示
	-React开发的规范，组件内部的数据由state控制，外部对内部传递数据时使用 props ，同级用state，父子级用props
	-getInitialState中返回的变量==vue中data中的变量
	-渲染一个列表数据的方法：
		<ListTodo todo={this.state.todolist} />
		var ListTodo = React.createClass({
		     render: function () {
		         return (
		             <ul id="todo-list">
			            {
			                 // this.props.todo 获取父组件传递过来的数据
			                 // {/* 遍历数据 */}
			                 this.props.todo.map(function (item, i) {
			                     return (
			                         <li>
			                             <label>{item}</label>
			                             <button>delete</button>
			                         </li>
			                     );
			                 })
			             }
		             </ul>
		         );
		     }
		 });
	-子组件中更改数据，父组件更新数据的方法：
		+让父组件开放一个可以修改数据的接口，然后将这个接口作为props传递给子组件，让其能修改数据
		+子组件调用父组件的接口对todolist数据进行修改了之后，相当于修改了React对象的state数据，此时就会触发React的自动更新
			集成 ListTodo 组件，传入两个属性 onDel 和 todo
			todo - 将todolist的数据传入到组件，当删除时，更新todolist数据
			onDel - 将 handleChange 函数传入到组件，删除时，用它来处理最新的todolist数据
			<ListTodo onDel={this.handleChange} todo={this.state.todolist} />

			handleDel: function (e) {
	             var delIndex = e.target.getAttribute('data-key');
	             // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
	             this.props.todo.splice(delIndex, 1);
	             this.props.onDel(this.props.todo);
         	},
			// ListTodo 组件用于展示列表，并可以删除某一项内容，它有 noDel todo 两个属性，上文已经提到过
			// 它的基本逻辑是：遍历 todo 的内容，生成数据列表和删除按钮
			// 对某一项执行删除时，想将 todo 中的数据删除，
			// 然后通过 onDel 事件调用 TodoList 的 handleChange 来更新state，然后react自动render
3. map方法遍历返回函数调用结果组成的新的数组, 因此在map方法中需要return标签元素, 返回渲染标签元素数组.
   react中使用axios处理异步
	问题：axios处理异步，获取到数据之后渲染一个导航，不过我获取到之后并没有渲染出来
	代码：
	/// <reference path="../../../typings/index.d.ts" />

		import * as React from 'react';
		import * as axios from 'axios';

		const styles = {
		    container: {
		        margin: '1rem'
		    },
		    h2: {
		        fontWeight: 300,
		        fontSize: '1.5rem'
		    },
		    techs: {
		        display: 'flex',
		        flexDirection: 'row',
		        flexWrap: 'wrap',
		        justifyContent: 'space-around'
		    }
		};

		// 數據結構
		class NavList {
		    constructor(
		        public name: string,
		        public link: string
		    ) {}
		}

		interface NavProps { };

		interface NavState {
		    nav: NavList[]
		};

		export class Navs extends React.Component<NavProps, NavState> {
		    constructor() {
		        super();
		        this.state = { nav: [] };
		    }

		    componentDidMount() {
		        axios
		            .get('app/nav/nav.json')
		            .then((response: Axios.AxiosXHR<NavList[]>) => {
		                this.setState({ nav: response.data });
		            });
		    }

		    render() {
		        return (
		            <nav style={styles.techs}>
		                //没有渲染出来  开始 代码里没有这段注释
		                {this.state.nav.map((nav:NavList,i:number)=>{
		                    <a href={nav.link}>{nav.name}</a>
		                })}
		                //没有渲染出来  结束 代码里没有这段注释
		            </nav>
		        );
		    }
		}
	方法：return (<a key={i} href={nav.link}>{nav.name}</a>)
	问题：<a href={nav.link}>{nav.name}</a>
4. 关键字：React保存了后台数据，如何把它渲染出来
	搜索内容：用react 渲染一个商城list页
	链接：http://react-china.org/t/react/12994
5. react 中的路由案例：http://www.2cto.com/kf/201702/594741.html