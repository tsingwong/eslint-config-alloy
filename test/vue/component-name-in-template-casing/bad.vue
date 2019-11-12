<template>
    <cool-component />
    <coolComponent />
    <Cool-component />
</template>
<script>
export default {
    components: {
        CoolComponent,
        'registered-in-kebab-case': VueComponent1,
        registeredInCamelCase: VueComponent2
    }
};
</script>
