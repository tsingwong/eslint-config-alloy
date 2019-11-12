<template>
    <div>
        <TodoItem
            v-if="complete"
            v-for="todo in todos"
            :todo="todo"
        /><!-- ↑ In this case, the `v-if` should be written on the wrapper element. -->
        <TodoItem
            v-for="todo in todos"
            v-if="todo.shown"
            :todo="todo"
        /><!-- ↑ In this case, the `v-for` list variable should be replace with a computed property that returns your filtered list. -->
    </div>
</template>
