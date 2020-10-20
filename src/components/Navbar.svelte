<script>
    import { onMount } from 'svelte'
    import Button from '@components/Button.svelte'

    let allSections
    let onviewSegment

    const updateOnviewSegment = (sectionID) => onviewSegment = sectionID

    const getThreshold = (width, height) => Math.min(width, height) / Math.max(width, height)

    onMount(() => {
        const WIDTH = window.innerWidth
        const HEIGHT = window.innerHeight

        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => !!entry.isIntersecting && updateOnviewSegment(entry.target.id))
        }, { threshold: getThreshold(WIDTH, HEIGHT) })

        allSections = document.querySelectorAll('section')
        allSections.forEach(section => io.observe(section))
    })
</script>

<nav class:hidden={onviewSegment === 'hero'}>
    <ul>
        <li aria-current={onviewSegment === 'projects' ? 'page' : null}>
            <Button scrollTo="#projects" class="flex flex-wrap content-center justify-center w-full h-full" btn={false}>
                <svg role="img" viewBox="0 0 24 24">
                    <title>Projects</title>
                    <path d="M16.8961 15.9196C16.8961 15.9196 20.1589 12.6363 21.2743 11.5162C24.7749 7.99375 23.0241 0.946553 23.0241 0.946553C23.0241 0.946553 16.0206 -0.815247 12.5201 2.70835C9.90291 5.34185 8.15891 7.1554 8.15891 7.1554C8.15891 7.1554 3.76691 6.2308 1.14062 8.8735L15.1463 22.9668C17.7726 20.3241 16.8961 15.9196 16.8961 15.9196V15.9196ZM15.1795 5.5868C15.3916 5.37303 15.6435 5.20343 15.9208 5.08772C16.198 4.972 16.4953 4.91244 16.7955 4.91244C17.0957 4.91244 17.3929 4.972 17.6702 5.08772C17.9475 5.20343 18.1994 5.37303 18.4115 5.5868C18.7312 5.90844 18.949 6.31826 19.0372 6.76443C19.1255 7.21061 19.0803 7.6731 18.9073 8.09341C18.7343 8.51372 18.4413 8.87297 18.0654 9.12573C17.6895 9.37849 17.2476 9.5134 16.7955 9.5134C16.3434 9.5134 15.9014 9.37849 15.5255 9.12573C15.1496 8.87297 14.8567 8.51372 14.6837 8.09341C14.5107 7.6731 14.4655 7.21061 14.5537 6.76443C14.642 6.31826 14.8598 5.90844 15.1795 5.5868V5.5868ZM2.25034 21.8145C2.25034 21.8145 5.67891 21.8145 7.96462 19.5145L4.53605 16.0645C2.25034 17.2145 2.25034 21.8145 2.25034 21.8145V21.8145Z" />
                </svg>
                <span>Projects</span>
            </Button>
        </li>
        <li aria-current={onviewSegment === 'posts' ? 'page' : null}>
            <Button scrollTo="#posts" class="flex flex-wrap content-center justify-center w-full h-full" btn={false}>
                <svg role="img" viewBox="0 0 24 24">
                    <title>Posts</title>
                    <path d="M22.8973 0.00415039H1.1029C0.500153 0.00415039 0.0131836 0.387055 0.0131836 0.861V23.1391C0.0131836 23.613 0.500153 23.9959 1.1029 23.9959H22.8973C23.5001 23.9959 23.9871 23.613 23.9871 23.1391V0.861C23.9871 0.387055 23.5001 0.00415039 22.8973 0.00415039ZM14.0433 1.93206H17.3125V7.55246L15.729 6.64473L14.0433 7.59262V1.93206ZM21.5352 22.068H2.46506V1.93206H12.0001V9.88202C12.0001 9.97038 12.0342 10.0587 12.1023 10.131C12.1436 10.177 12.1961 10.216 12.2568 10.2459C12.3175 10.2758 12.3851 10.296 12.4557 10.3052C12.5263 10.3144 12.5986 10.3125 12.6682 10.2996C12.7379 10.2867 12.8037 10.2631 12.8617 10.2301L15.7154 8.6262L18.4874 10.2167C18.5793 10.2703 18.6917 10.2997 18.8075 10.2997C19.1071 10.2997 19.3523 10.1069 19.3523 9.87131V1.93206H21.5318V22.068H21.5352Z" />
                </svg>
                <span>Posts</span>
            </Button>
        </li>
        <li aria-current={onviewSegment === 'about' ? 'page' : null}>
            <Button scrollTo="#about" class="flex flex-wrap content-center justify-center w-full h-full" btn={false}>
                <svg role="img" viewBox="0 0 24 24">
                    <title>About</title>
                    <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 3.6C13.992 3.6 15.6 5.208 15.6 7.2C15.6 9.192 13.992 10.8 12 10.8C10.008 10.8 8.4 9.192 8.4 7.2C8.4 5.208 10.008 3.6 12 3.6ZM12 20.64C9 20.64 6.348 19.104 4.8 16.776C4.836 14.388 9.6 13.08 12 13.08C14.388 13.08 19.164 14.388 19.2 16.776C17.652 19.104 15 20.64 12 20.64Z" />
                </svg>
                <span>About</span>
            </Button>
        </li>
        <li aria-current={onviewSegment === 'contact' ? 'page' : null}>
            <Button scrollTo="#contact" class="flex flex-wrap content-center justify-center w-full h-full" btn={false}>
                <svg role="img" viewBox="0 0 24 24">
                    <title>Contact</title>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 11C24 16.799 18.627 21.5 12 21.5C10.8115 21.5016 9.62788 21.3473 8.4795 21.041C7.6035 21.485 5.592 22.337 2.208 22.892C1.908 22.94 1.68 22.628 1.7985 22.349C2.3295 21.095 2.8095 19.424 2.9535 17.9C1.116 16.055 0 13.64 0 11C0 5.201 5.373 0.5 12 0.5C18.627 0.5 24 5.201 24 11ZM7.5 11C7.5 11.3978 7.34196 11.7794 7.06066 12.0607C6.77936 12.342 6.39782 12.5 6 12.5C5.60218 12.5 5.22064 12.342 4.93934 12.0607C4.65804 11.7794 4.5 11.3978 4.5 11C4.5 10.6022 4.65804 10.2206 4.93934 9.93934C5.22064 9.65804 5.60218 9.5 6 9.5C6.39782 9.5 6.77936 9.65804 7.06066 9.93934C7.34196 10.2206 7.5 10.6022 7.5 11ZM13.5 11C13.5 11.3978 13.342 11.7794 13.0607 12.0607C12.7794 12.342 12.3978 12.5 12 12.5C11.6022 12.5 11.2206 12.342 10.9393 12.0607C10.658 11.7794 10.5 11.3978 10.5 11C10.5 10.6022 10.658 10.2206 10.9393 9.93934C11.2206 9.65804 11.6022 9.5 12 9.5C12.3978 9.5 12.7794 9.65804 13.0607 9.93934C13.342 10.2206 13.5 10.6022 13.5 11ZM18 12.5C18.3978 12.5 18.7794 12.342 19.0607 12.0607C19.342 11.7794 19.5 11.3978 19.5 11C19.5 10.6022 19.342 10.2206 19.0607 9.93934C18.7794 9.65804 18.3978 9.5 18 9.5C17.6022 9.5 17.2206 9.65804 16.9393 9.93934C16.658 10.2206 16.5 10.6022 16.5 11C16.5 11.3978 16.658 11.7794 16.9393 12.0607C17.2206 12.342 17.6022 12.5 18 12.5Z" />
                </svg>
                <span>Contact</span>
            </Button>
        </li>
    </ul>
</nav>

<style>
    nav {
        @apply fixed bottom-0 z-50 w-full h-20 bg-black lg:h-14 lg:top-0;
    }

    ul {
        @apply grid h-full max-w-screen-sm grid-cols-4 grid-rows-1 mx-auto;
    }

    li {
        @apply flex flex-wrap content-center justify-center text-center text-gray-500;
    }

    [aria-current], li:hover {
        @apply relative text-prime;
    }

    [aria-current]::after, li:hover::after {
        @apply absolute bottom-0 block h-1 bg-prime;
        content: '';
        width: 80%;
    }

    svg {
        @apply w-6 h-6 fill-current lg:hidden;
    }

    span {
        @apply w-full mt-2 text-sm uppercase font-fira lg:pb-1 lg:normal-case;
    }
</style>