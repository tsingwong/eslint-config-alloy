<template>
    <my-component #default="data">
        {{ data }}
    </my-component>
    <my-component>
        <template v-slot>content</template>
        <template v-slot:one>content</template>
        <template v-slot:two>content</template>
    </my-component>
</template>
