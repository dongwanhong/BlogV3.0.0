<template lang="pug">
    .layout.h-100
        .layout-header
            slot(name="header")
        .layout-body(v-if="scroll")
            .layout-content
                slot(name="body")
        .layout-body(v-else)
            slot(name="body")
        .layout-footer
            slot(name="footer")
</template>

<script>
export default {
    props: {
        scroll: Boolean
    }
}
</script>
