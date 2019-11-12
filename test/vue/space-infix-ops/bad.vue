<template>
    <div :attr="a+1" />
    <div :attr="a?1 : 2" />
    <div :attr="a ? 1:2" />
    <div :[1+2]="1+2" />
</template>
