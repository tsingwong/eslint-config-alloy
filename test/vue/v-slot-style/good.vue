<template>
    <my-component v-slot="data">
        {{ data }}
    </my-component>
    <my-component>
        <template #default>content</template>
        <template #one>content</template>
        <template #two>content</template>
    </my-component>
</template>
