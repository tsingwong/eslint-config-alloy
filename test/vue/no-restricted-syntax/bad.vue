<template>
    <!-- ✘ BAD -->
    <div>{{ foo() }}</div>
    <div>{{ foo.bar() }}</div>
    <div>{{ foo().bar }}</div>
</template>
