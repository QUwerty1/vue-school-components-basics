const GithubUserCard = {
    template: '#github-user-card-template',
    props: {
        username: {type: String, required: true}
    },
    data() {
        return {
            userData: null
        }
    },
    async created() {
        this.userData = await fetch(`https://api.github.com/users/${this.username}`)
            .then(data => data.json());
    }
}

Vue.createApp({
    components: {
        githubUserCard: GithubUserCard
    }
}).mount('#app');