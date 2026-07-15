export default function manifest() {
    return {
        name: 'Rohan Patil - Web Developer',
        short_name: 'Rohan Patil',
        description: "Rohan Patil is a Full Stack Web Developer",
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/rohan',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}