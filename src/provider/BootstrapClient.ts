'use client'

import { useEffect } from 'react'

export default function BootstrapClient() {
    useEffect(() => {
        let cancelled = false

        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
                if (!cancelled) {
                    console.log('Bootstrap JS loaded')
                }
            })
            .catch((err) => {
                console.error('Failed to load Bootstrap JS:', err)
            })

        return () => {
            cancelled = true
        }
    }, [])

    return null
}