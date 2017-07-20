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
