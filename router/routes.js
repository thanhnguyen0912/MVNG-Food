const routes = [{
        path: '/',
        component: () =>
            import ('layouts/search.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                path: '/home',
                name: 'home',
                component: () =>
                    import ('pages/home.vue')
            },
            {
                path: '/login',
                component: () =>
                    import ('pages/login.vue')
            },
            {
                path: '/sign-up',
                component: () =>
                    import ('pages/sign-up.vue')
            }

        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes