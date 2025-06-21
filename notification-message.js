const NotificationMessageComponent = {
    template: '#notification-message-template',
    data() {
        return {
            isHidden: false
        }
    },
    props: {
        type: {
            type: String,
            default: ''
        },
        header: {
            type: String,
            default: ''
        },
    },
    methods: {
        hide() {
            this.isHidden = true;
        }
    }
}

Vue.createApp({
    components: {
        notificationMessage: NotificationMessageComponent
    }
}).mount('#app')