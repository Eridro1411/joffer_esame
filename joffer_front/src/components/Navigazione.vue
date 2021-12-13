<template>
    <div class="flex items-aroud justify-around m-5 p-1 bg-green-400">
        <router-link to="/list" tag="button">Lista</router-link>
        <router-link to="/detail" tag="button">Dettaglio</router-link>
        <router-link to="/create" tag="button">Crea</router-link>
        <router-link to="/edit" tag="button">Modifica</router-link>
    </div>
</template>

<script>
export default {
}
</script>