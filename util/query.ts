import {client} from '@/sanity/lib/client'

export const fetchSlider = async () => {
    try {
        const data = await client.fetch(`
            *[_type == "home"]{
                sliderImages,
                sliderResponsiveImages
            }    
        `)
        return data
    } catch (error) {
        console.log(error)
    }
}