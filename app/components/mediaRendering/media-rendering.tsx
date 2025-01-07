'use client'

import useMediaQuery from "@/lib/use-media-query"

const MediaRendering = ({
    minWidth, maxWidth, children
}: {
    minWidth: string | null,
    maxWidth: string | null,
    children: React.ReactNode
}) => {

    const minDeviceSize = useMediaQuery(minWidth ? `(min-width: ${minWidth}px)` : '(min-width: 0px)');
    const maxDeviceSize = useMediaQuery(maxWidth ? `(max-width: ${maxWidth}px)` : '(max-width: 100000px)'); // Arbitrary large max width

    return (
        <>{(maxDeviceSize && minDeviceSize) && children}</>
    )
}

export default MediaRendering;