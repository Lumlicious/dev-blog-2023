export default function Tag({ color, name }) {
    // const colorMap = {
    //     'default': 'bg-primary-',
    //     'gray': '',
    //     'brown': '',
    //     'orange': '',
    //     'yellow': '',
    //     'green': '',
    //     'blue': '',
    //     'purple': '',
    //     'pink': '',
    //     'red': ''
    // }
    return (
        <span
            className="mb-5 mr-2 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">{name}</span>
    )
}