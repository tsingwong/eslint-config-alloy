<template>
    <div :attr="-a" />
    <div :attr="typeof a" />
    <div :[typeof(a)]="typeof a" />
</template>
