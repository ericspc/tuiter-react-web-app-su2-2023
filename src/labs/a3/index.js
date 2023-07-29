import JavaScript from "./java-script";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";
import Delete from "../test/test";
import Bnm from "../test/bnm";
function Assignment3() {
    return (
        <div>
            <h1>Assignment 3</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <JavaScript/>
            {/*<Delete/>*/}
            {/*<Bnm/>*/}
        </div>
    );
}
export default Assignment3;