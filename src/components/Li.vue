<template>
    <li>this is {{id}}, this is {{name}}, this is {{text}}</li>
</template>

<script>
export default {
    name: 'Li',
    props: {
        id: String,
        text: String,
        name: String
    }
}
</script>

