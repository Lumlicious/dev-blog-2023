export default function Tag({ color, name }) {
    type NotionColor = 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
    const notionColorMap = {
        'default': 'bg-primary-light text-primary',
        'gray': 'bg-grey-light text-black',
        'brown': 'bg-amber-light text-amber',
        'orange': 'bg-orange-light text-orange',
        'yellow': 'bg-yellow-light text-yellow-dark',
        'green': 'bg-green-light text-green ',
        'blue': 'bg-blue-light text-blue-dark',
        'purple': 'bg-purple-light text-purple',
        'pink': 'bg-pink-light text-pink',
        'red': 'bg-red-light text-red'
    }
    return (
        <span
            className={`mb-5 mr-2 inline-block rounded-lg px-2 py-1 font-body text-smsm:mb-8 ${notionColorMap[color]}`}>{name}</span>
    )
}