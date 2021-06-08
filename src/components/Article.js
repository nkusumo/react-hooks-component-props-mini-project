export default function Article({
    title,
    date="January 1, 1970",
    preview,
    minutes
}) {
    function minutesToRead(input) {
        if (input <30) {
            return '☕️'.repeat(Math.ceil(input/5))
        } else {
            return '🍱'.repeat(Math.ceil(input/10))
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {minutesToRead(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}